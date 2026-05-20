"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--accent)]/20 blur-[120px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-[var(--muted)]">
            <Sparkles className="h-3.5 w-3.5 text-[var(--forge)]" />
            Omnistrata · Education Reforged
          </span>
          <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl text-gradient">
            Train for Tomorrow.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
            ForgEd is a free AI-powered platform to build skills in technology, business, insurance, cybersecurity, and the careers of the future — at your own pace.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/dashboard" variant="forge">
              Start Learning Free <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/courses" variant="secondary">
              Browse Courses
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
