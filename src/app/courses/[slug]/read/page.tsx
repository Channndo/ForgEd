import { notFound } from "next/navigation";
import { getAllCourseSlugs } from "@/lib/coursePaths";
import { getCourseBySlug } from "@/lib/courses/catalog";
import { isTextbookCourse } from "@/lib/courses/textbook/registry";
import TextbookReadClient from "./TextbookReadClient";

export function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export default async function TextbookReadPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course || !isTextbookCourse(slug)) notFound();
  return <TextbookReadClient />;
}
