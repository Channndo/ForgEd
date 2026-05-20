import { NextResponse } from "next/server";
import {
  kodaRecommendNext,
  KodaServiceError,
  placeholderRecommendations,
} from "@/services/ai";
import type { KodaLearningContext } from "@/services/ai/types";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { context } = (await request.json()) as {
      context?: KodaLearningContext;
    };
    const ctx = context ?? {};
    const placeholders = placeholderRecommendations(ctx);

    try {
      const result = await kodaRecommendNext(ctx);
      return NextResponse.json({
        message: result.message,
        model: result.model,
        placeholders,
      });
    } catch (e) {
      if (e instanceof KodaServiceError && e.status >= 500) {
        return NextResponse.json({
          message: null,
          placeholders,
          offline: true,
        });
      }
      throw e;
    }
  } catch (e) {
    if (e instanceof KodaServiceError) {
      return NextResponse.json({ detail: e.message }, { status: e.status });
    }
    return NextResponse.json({ detail: "Recommend failed." }, { status: 500 });
  }
}
