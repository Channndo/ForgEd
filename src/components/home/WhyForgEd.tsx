import { Shield, TrendingUp, Users, Cpu } from "lucide-react";
import { Card } from "@/components/ui/Card";

const REASONS = [
  {
    icon: Cpu,
    title: "Built for real-world change",
    text: "Technology, AI, and industry shifts move fast. ForgEd helps everyday people keep up without expensive degrees.",
  },
  {
    icon: TrendingUp,
    title: "Skill-first progression",
    text: "Earn XP, level up, unlock badges, and track streaks — motivating structure without childish gimmicks.",
  },
  {
    icon: Shield,
    title: "Professional & accessible",
    text: "Dark, focused UI designed for beginners and scalable into enterprise-grade learning later.",
  },
  {
    icon: Users,
    title: "Future-ready architecture",
    text: "KODA, your learning assistant, and full digital textbooks help you go deeper on every topic.",
  },
];

export function WhyForgEd() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold sm:text-3xl">Why ForgEd exists</h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          Millions of people need practical skills — not another overwhelming platform. ForgEd meets learners where they are.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <Card key={title}>
              <Icon className="h-8 w-8 text-[var(--accent)]" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
