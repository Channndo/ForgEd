"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { useKoda } from "@/hooks/useKoda";
import { useKodaPanel } from "./KodaProvider";
import { KodaLogo, KodaLogoMark } from "./KodaLogo";
import { KODA_QUICK_PROMPTS } from "@/lib/koda/config";

export function KodaChatPanel() {
  const { open, setOpen, context, pendingPrompt, clearPendingPrompt } =
    useKodaPanel();
  const {
    available,
    loading,
    streaming,
    messages,
    statusNote,
    send,
    setContext,
    reset,
  } = useKoda(context);

  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setContext(context ?? {});
  }, [context, setContext]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open && pendingPrompt) {
      void send(pendingPrompt, { useStream: true });
      clearPendingPrompt();
    }
  }, [open, pendingPrompt, send, clearPendingPrompt]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%", opacity: 0.8 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.8 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-[var(--koda-gold)]/15 bg-[var(--background)]/98 shadow-2xl backdrop-blur-xl"
          >
            <header className="flex items-center justify-between border-b border-white/5 px-4 py-4">
              <KodaLogoMark />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-[var(--muted)] hover:bg-white/5 hover:text-white"
                aria-label="Close KODA"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <p className="px-4 py-2 text-xs text-[var(--muted)] border-b border-white/5">
              {statusNote}
            </p>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((m, i) => (
                <div
                  key={`${i}-${m.role}`}
                  className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.role === "assistant" && (
                    <div className="mt-0.5 shrink-0">
                      <KodaLogo size={28} />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-[var(--koda-gold)]/15 text-white border border-[var(--koda-gold)]/25"
                        : "glass text-[var(--foreground)] border border-[var(--koda-gold)]/10"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{m.content}</p>
                  </div>
                </div>
              ))}
              {(loading || streaming) && (
                <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  KODA is thinking…
                </div>
              )}
              <div ref={endRef} />
            </div>

            {available && messages.length <= 2 && (
              <div className="flex flex-wrap gap-2 px-4 pb-2">
                {KODA_QUICK_PROMPTS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => void send(p, { useStream: true })}
                    className="rounded-full border border-[var(--koda-silver)]/20 bg-white/5 px-3 py-1 text-xs text-[var(--muted)] hover:border-[var(--koda-gold)]/40 hover:text-white"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            <form
              className="border-t border-white/5 p-4"
              onSubmit={(e) => {
                e.preventDefault();
                const t = input.trim();
                if (!t) return;
                setInput("");
                void send(t, { useStream: true });
              }}
            >
              <div className="flex gap-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  rows={2}
                  placeholder={
                    available ? "Ask KODA anything about this lesson…" : "KODA offline"
                  }
                  disabled={!available || loading}
                  className="flex-1 resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-[var(--koda-gold)]/40 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!available || loading || !input.trim()}
                  className="flex h-10 w-10 shrink-0 items-center justify-center self-end rounded-xl bg-gradient-to-br from-[var(--koda-gold)] to-[var(--koda-silver)] text-black disabled:opacity-40"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={reset}
                className="mt-2 text-xs text-[var(--muted)] hover:text-white"
              >
                New conversation
              </button>
            </form>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
