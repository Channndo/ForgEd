import { getAllCourseSlugs } from "@/lib/coursePaths";
import QuizClient from "./QuizClient";

export function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export default function QuizPage() {
  return <QuizClient />;
}
