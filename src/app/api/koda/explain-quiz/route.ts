import { NextResponse } from "next/server";
import { kodaExplainQuiz, KodaServiceError } from "@/services/ai";
import type { KodaLearningContext } from "@/services/ai/types";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { context } = (await request.json()) as { context?: KodaLearningContext };
    if (!context?.quizQuestion) {
      return NextResponse.json(
        { detail: "Quiz context is required." },
        { status: 400 }
      );
    }
    const result = await kodaExplainQuiz(context);
    return NextResponse.json({
      explanation: result.message,
      model: result.model,
    });
  } catch (e) {
    if (e instanceof KodaServiceError) {
      return NextResponse.json({ detail: e.message }, { status: e.status });
    }
    return NextResponse.json({ detail: "Explain failed." }, { status: 500 });
  }
}
