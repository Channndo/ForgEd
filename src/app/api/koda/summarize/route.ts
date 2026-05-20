import { NextResponse } from "next/server";
import { kodaSummarizeLesson, KodaServiceError } from "@/services/ai";
import type { KodaLearningContext } from "@/services/ai/types";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { context } = (await request.json()) as { context?: KodaLearningContext };
    if (!context?.lessonExcerpt && !context?.lessonTitle) {
      return NextResponse.json(
        { detail: "Lesson context is required." },
        { status: 400 }
      );
    }
    const result = await kodaSummarizeLesson(context);
    return NextResponse.json({ summary: result.message, model: result.model });
  } catch (e) {
    if (e instanceof KodaServiceError) {
      return NextResponse.json({ detail: e.message }, { status: e.status });
    }
    return NextResponse.json({ detail: "Summarize failed." }, { status: 500 });
  }
}
