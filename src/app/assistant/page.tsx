"use client";

import { useEffect } from "react";
import { useProgress } from "@/components/providers/ProgressProvider";
import { KodaLogoMark } from "@/components/koda/KodaLogo";
import { useKodaPanel } from "@/components/koda/KodaProvider";
import { useKoda } from "@/hooks/useKoda";
import { KODA_QUICK_PROMPTS } from "@/lib/koda/config";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Send, Loader2 } from "lucide-react";
import { useState } from "react";

export default function AssistantPage() {
  const { progress, xpBar } = useProgress();
  const { setOpen, setLearningContext } = useKodaPanel();
  const context = {
    skillLevel: "beginner" as const,
    streak: progress.streak,
    xp: progress.xp,
    level: xpBar.level,
    completedCourses: progress.completedCourses,
  };
  const { available, loading, messages, statusNote, send, recommend } =
    useKoda(context);
  const [input, setInput] = useState("");
  const [recs, setRecs] = useState<string[]>([]);

  useEffect(() => {
    setLearningContext(context);
  }, [context, setLearningContext]);

  useEffect(() => {
    if (!available) return;
    let cancelled = false;
    void recommend().then((r) => {
      if (cancelled) return;
      if (r.placeholders.length) setRecs(r.placeholders);
      if (r.message) setRecs((prev) => [r.message!, ...prev].slice(0, 5));
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- load once when KODA comes online
  }, [available]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="flex items-center gap-4">
        <KodaLogoMark className="text-2xl" />
        <div>
          <h1 className="text-3xl font-bold">KODA</h1>
          <p className="text-[var(--muted)]">Your ForgEd learning companion</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-[var(--muted)]">{statusNote}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card className="border-[var(--koda-gold)]/20" glow>
          <p className="text-sm font-medium text-[var(--koda-gold)]">What KODA does</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
            <li>· Explains lessons in plain language</li>
            <li>· Coaches you through quiz answers</li>
            <li>· Suggests what to study next</li>
            <li>· Celebrates streaks and steady progress</li>
          </ul>
          <p className="mt-4 text-xs text-[var(--muted)]">
            Powered by the shared Omnistrata Ollama stack — same infrastructure as other products, with an education-first personality.
          </p>
          <Button
            variant="forge"
            className="mt-6 border border-[var(--koda-gold)]/30"
            onClick={() => setOpen(true)}
          >
            Open chat panel
          </Button>
        </Card>

        <Card>
          <p className="font-medium">Suggested for you</p>
          {recs.length === 0 ? (
            <p className="mt-2 text-sm text-[var(--muted)]">
              Start a course to get personalized recommendations.
            </p>
          ) : (
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              {recs.map((r, i) => (
                <li key={i}>· {r}</li>
              ))}
            </ul>
          )}
        </Card>
      </div>

      <div className="mt-10 glass rounded-2xl border border-[var(--koda-silver)]/10 p-6">
        <div className="max-h-80 space-y-3 overflow-y-auto">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`text-sm ${m.role === "user" ? "text-right text-[var(--koda-gold)]" : "text-[var(--muted)]"}`}
            >
              {m.content}
            </div>
          ))}
          {loading && (
            <span className="inline-flex items-center gap-2 text-xs text-[var(--muted)]">
              <Loader2 className="h-3 w-3 animate-spin" /> KODA…
            </span>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {KODA_QUICK_PROMPTS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => void send(p, { useStream: true })}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--muted)] hover:text-white"
            >
              {p}
            </button>
          ))}
        </div>
        <form
          className="mt-4 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const t = input.trim();
            if (!t) return;
            setInput("");
            void send(t, { useStream: true });
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!available || loading}
            placeholder="Ask KODA…"
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm outline-none focus:border-[var(--koda-gold)]/40"
          />
          <button
            type="submit"
            disabled={!available || loading}
            className="rounded-xl bg-[var(--koda-gold)]/20 px-4 text-[var(--koda-gold)] disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
