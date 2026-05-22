"use client";

import { Button } from "@/components/ui/Button";
import { useProgress } from "@/components/providers/ProgressProvider";
import {
  isCourseReviewQuizPassed,
  isFinalExamPassed,
} from "@/lib/progress";

export function CourseAssessmentActions({
  slug,
  courseId,
}: {
  slug: string;
  courseId: string;
}) {
  const { progress } = useProgress();
  const reviewPassed = isCourseReviewQuizPassed(courseId);
  const examPassed = isFinalExamPassed(courseId);
  const courseComplete = progress.completedCourses.includes(courseId);

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <Button href={`/courses/${slug}/read`} variant="secondary">
        Open textbook
      </Button>
      <Button href={`/courses/${slug}/quiz`} variant="secondary">
        {reviewPassed ? "Review quiz ✓" : "Course review quiz"}
      </Button>
      <Button
        href={`/courses/${slug}/exam`}
        variant={reviewPassed && !examPassed ? "forge" : "secondary"}
      >
        {courseComplete || examPassed
          ? "Final exam ✓"
          : reviewPassed
            ? "Take final exam →"
            : "Final exam"}
      </Button>
    </div>
  );
}
