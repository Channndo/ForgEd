import { notFound } from "next/navigation";
import { LEARNING_PATHS, getLearningPathById } from "@/lib/paths/learningPaths";
import PathExamClient from "./PathExamClient";

export function generateStaticParams() {
  return LEARNING_PATHS.map((p) => ({ pathId: p.id }));
}

export default async function PathExamPage({
  params,
}: {
  params: Promise<{ pathId: string }>;
}) {
  const { pathId } = await params;
  const path = getLearningPathById(pathId);
  if (!path) notFound();
  return <PathExamClient path={path} />;
}
