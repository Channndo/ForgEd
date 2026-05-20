"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ForgEdTagline } from "@/components/brand/ForgEdLogo";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--gold)]/10 blur-[120px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto flex justify-center">
            <Image
              src="/forged-wordmark.png"
              alt="ForgEd — Learn Skills That Matter."
              width={320}
              height={180}
              className="h-auto w-full max-w-[min(100%,320px)] object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>

          <ForgEdTagline className="mt-6" />

          <p className="mx-auto mt-8 max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
            A free AI-powered platform to build skills in technology, business, insurance, cybersecurity, and the careers of the future — at your own pace.
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
