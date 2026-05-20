"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { KodaLearningContext } from "@/lib/koda/types";
import { KodaChatPanel } from "./KodaChatPanel";

interface KodaContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
  context: KodaLearningContext | undefined;
  setLearningContext: (ctx: KodaLearningContext | undefined) => void;
  openWithPrompt: (prompt?: string) => void;
  pendingPrompt: string | null;
  clearPendingPrompt: () => void;
}

const KodaContext = createContext<KodaContextValue | null>(null);

export function KodaProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [context, setContext] = useState<KodaLearningContext | undefined>();
  const [pendingPrompt, setPendingPrompt] = useState<string | null>(null);

  const toggle = useCallback(() => setOpen((o) => !o), []);
  const setLearningContext = useCallback((ctx: KodaLearningContext | undefined) => {
    setContext(ctx);
  }, []);

  const openWithPrompt = useCallback((prompt?: string) => {
    if (prompt) setPendingPrompt(prompt);
    setOpen(true);
  }, []);

  const clearPendingPrompt = useCallback(() => setPendingPrompt(null), []);

  const value = useMemo(
    () => ({
      open,
      setOpen,
      toggle,
      context,
      setLearningContext,
      openWithPrompt,
      pendingPrompt,
      clearPendingPrompt,
    }),
    [open, context, pendingPrompt, toggle, setLearningContext, openWithPrompt, clearPendingPrompt]
  );

  return (
    <KodaContext.Provider value={value}>
      {children}
      <KodaChatPanel />
    </KodaContext.Provider>
  );
}

export function useKodaPanel() {
  const ctx = useContext(KodaContext);
  if (!ctx) throw new Error("useKodaPanel must be used within KodaProvider");
  return ctx;
}
