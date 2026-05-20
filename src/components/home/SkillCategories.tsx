import Link from "next/link";
import { LEARNING_DOMAINS } from "@/lib/ecosystem/domains";

export function SkillCategories() {
  return (
    <section className="px-4 py-16 sm:px-6 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl text-[var(--silver)]">
          Learning domains
        </h2>
        <p className="mt-2 text-[var(--muted)]">
          Fourteen broad umbrellas — AI and cybersecurity courses live under Technology.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {LEARNING_DOMAINS.map((domain) => (
            <Link
              key={domain.id}
              href={`/courses?domain=${domain.id}`}
              className="glass rounded-2xl border border-transparent p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--gold)]/30 bg-gradient-to-br from-[var(--gold)]/5 to-transparent"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold">{domain.label}</h3>
                {domain.status === "coming-soon" && (
                  <span className="text-[9px] uppercase tracking-wider text-[var(--muted)]">
                    Soon
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-[var(--muted)]">{domain.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
