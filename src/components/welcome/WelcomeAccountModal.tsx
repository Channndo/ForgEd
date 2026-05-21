"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BookOpen, Flame, Sparkles } from "lucide-react";
import { ForgEdTagline } from "@/components/brand/ForgEdLogo";
import { Button } from "@/components/ui/Button";
import { withBasePath } from "@/lib/basePath";
import {
  markWelcomeSeen,
  shouldShowWelcomeModal,
  WELCOME_DISCLAIMER,
} from "@/lib/welcome/constants";

const BULLETS = [
  {
    icon: BookOpen,
    text: "Browse the Course Library and pick a learning path that fits your goals.",
  },
  {
    icon: Flame,
    text: "Earn XP, build streaks, and unlock badges as you finish lessons.",
  },
  {
    icon: Sparkles,
    text: "Open KODA anytime for explanations — powered by Mindroot AI.",
  },
] as const;

export function WelcomeAccountModal({ firstName }: { firstName: string }) {
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const dismiss = useCallback(() => {
    markWelcomeSeen();
    setOpen(false);
  }, []);

  useEffect(() => {
    if (shouldShowWelcomeModal()) setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, dismiss]);

  const motionProps = reducedMotion
    ? { initial: false as const, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, scale: 0.96, y: 12 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.98, y: 8 },
        transition: { type: "spring" as const, damping: 28, stiffness: 320 },
      };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] cursor-default bg-black/70 backdrop-blur-[3px]"
            aria-label="Close welcome"
            onClick={dismiss}
          />
          <div className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              ref={dialogRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="pointer-events-auto glass glow-gold max-h-[min(90vh,720px)] w-full max-w-md overflow-y-auto rounded-2xl border border-[var(--card-border)] bg-[#0a0a0a]/95 shadow-2xl outline-none"
              {...motionProps}
            >
              <div className="relative px-6 pb-6 pt-8 sm:px-8">
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.14),transparent_70%)]"
                  aria-hidden
                />

                <div className="relative flex flex-col items-center text-center">
                  <Image
                    src={withBasePath("/forged-wordmark.png")}
                    alt="ForgEd"
                    width={200}
                    height={100}
                    className="h-auto w-40 object-contain sm:w-44"
                    priority
                  />
                  <ForgEdTagline className="mt-4" />
                </div>

                <h2
                  id={titleId}
                  className="font-serif mt-8 text-center text-2xl font-bold text-[var(--silver)] sm:text-[1.65rem]"
                >
                  Welcome to{" "}
                  <span className="text-[var(--silver)]">Forg</span>
                  <span className="text-[var(--gold)]">Ed</span>, {firstName}.
                </h2>
                <p className="mt-3 text-center text-sm leading-relaxed text-[var(--muted)]">
                  Your account is ready. Everything you complete syncs here — pick
                  up exactly where you left off on any device.
                </p>

                <ul className="mt-6 space-y-3 text-left">
                  {BULLETS.map(({ icon: Icon, text }) => (
                    <li
                      key={text}
                      className="flex gap-3 rounded-xl border border-white/[0.06] bg-black/35 px-3 py-3 text-sm leading-relaxed text-[var(--foreground)]/90"
                    >
                      <Icon
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]"
                        aria-hidden
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button
                    variant="forge"
                    className="w-full sm:w-auto"
                    onClick={dismiss}
                  >
                    Start learning
                  </Button>
                  <button
                    type="button"
                    onClick={dismiss}
                    className="text-sm text-[var(--muted)] transition hover:text-[var(--silver)]"
                  >
                    Maybe later
                  </button>
                </div>

                <p className="mt-6 text-center text-[10px] leading-relaxed text-[var(--muted)]/80">
                  {WELCOME_DISCLAIMER}
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
