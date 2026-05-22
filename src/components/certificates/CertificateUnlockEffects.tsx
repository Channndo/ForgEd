"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/** Gold particles + glow behind certificate unlock modal. */
export function CertificateUnlockEffects() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${8 + ((i * 17) % 84)}%`,
        delay: (i % 7) * 0.12,
        size: 3 + (i % 4),
        duration: 2.2 + (i % 5) * 0.35,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--gold)]/20 blur-[80px]"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: [0.4, 0.7, 0.45], scale: [0.9, 1.15, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
      />
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-[var(--gold)]"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 8px rgba(201,169,98,0.8)",
          }}
          initial={{ y: 40, opacity: 0 }}
          animate={{
            y: [-20, -180 - (p.id % 3) * 40],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
