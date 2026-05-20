import { notFound } from "next/navigation";
import { LEARNING_PATHS, getLearningPathById } from "@/lib/paths/learningPaths";
import PathDetailClient from "./PathDetailClient";

export function generateStaticParams() {
  return LEARNING_PATHS.map((p) => ({ pathId: p.id }));
}

export default async function PathDetailPage({
  params,
}: {
  params: Promise<{ pathId: string }>;
}) {
  const { pathId } = await params;
  const path = getLearningPathById(pathId);
  if (!path) notFound();
  return <PathDetailClient path={path} />;
}
