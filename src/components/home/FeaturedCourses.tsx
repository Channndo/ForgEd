import Link from "next/link";
import { Clock, Zap } from "lucide-react";
import { getFeaturedCourses } from "@/lib/courses/catalog";
import { Card } from "@/components/ui/Card";

export function FeaturedCourses() {
  const courses = getFeaturedCourses();

  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl text-[var(--silver)]">Featured courses</h2>
        <p className="mt-2 text-[var(--muted)]">
          Start with high-impact paths designed for beginners and career switchers.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link key={course.id} href={`/courses/${course.slug}`}>
              <Card className="h-full transition-transform hover:scale-[1.02] hover:border-[var(--gold)]/30">
                <span className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                  {course.category.replace("-", " ")}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{course.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-[var(--muted)]">
                  {course.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-[var(--muted)]">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {course.estimatedHours}h
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="h-3.5 w-3.5 text-[var(--forge)]" />
                    {course.xpReward} XP
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
