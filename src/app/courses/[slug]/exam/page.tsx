import { getAllCourseSlugs } from "@/lib/coursePaths";
import ExamClient from "./ExamClient";

export function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export default function ExamPage() {
  return <ExamClient />;
}
