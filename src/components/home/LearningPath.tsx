"use client";

import { motion } from "framer-motion";

const STEPS = [
  { label: "Explore", desc: "Browse categories & featured courses" },
  { label: "Learn", desc: "Modules, lessons & interactive cards" },
  { label: "Quiz", desc: "Instant feedback & retry support" },
  { label: "Level Up", desc: "XP, badges & career tracking" },
];

export function LearningPath() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold sm:text-3xl">Your learning path</h2>
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-stretch">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex-1 glass rounded-2xl p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)]/20 text-sm font-bold text-[var(--accent)]">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold">{step.label}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{step.desc}</p>
              {i < STEPS.length - 1 && (
                <div className="absolute -right-2 top-1/2 hidden h-0.5 w-4 bg-[var(--accent)]/30 md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
