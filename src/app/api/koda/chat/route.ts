import { NextRequest, NextResponse } from "next/server";
import {
  kodaChat,
  kodaChatStreamGenerator,
  KodaServiceError,
} from "@/services/ai";
import type { KodaChatRequest } from "@/services/ai/types";

export const runtime = "nodejs";

function parseBody(raw: unknown): KodaChatRequest | null {
  if (!raw || typeof raw !== "object") return null;
  const b = raw as Record<string, unknown>;
  if (!Array.isArray(b.messages)) return null;
  return {
    messages: b.messages as KodaChatRequest["messages"],
    mode: b.mode as KodaChatRequest["mode"],
    context: b.context as KodaChatRequest["context"],
    stream: Boolean(b.stream),
    sessionId: typeof b.sessionId === "string" ? b.sessionId : undefined,
  };
}

export async function POST(request: NextRequest) {
  let body: KodaChatRequest | null;
  try {
    body = parseBody(await request.json());
  } catch {
    return NextResponse.json({ detail: "Invalid JSON body." }, { status: 400 });
  }

  if (!body?.messages?.length) {
    return NextResponse.json({ detail: "messages array is required." }, { status: 400 });
  }

  const stream =
    request.nextUrl.searchParams.get("stream") === "1" || body.stream === true;

  try {
    if (stream) {
      const sessionId = body.sessionId ?? crypto.randomUUID();
      const encoder = new TextEncoder();
      let full = "";

      const readable = new ReadableStream({
        async start(controller) {
          try {
            for await (const token of kodaChatStreamGenerator(body!)) {
              full += token;
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ content: token })}\n\n`)
              );
            }
            controller.enqueue(
              encoder.encode(
                `data: ${JSON.stringify({ done: true, sessionId, model: process.env.OLLAMA_MODEL || "ollama" })}\n\n`
              )
            );
            controller.close();
          } catch (e) {
            const msg =
              e instanceof KodaServiceError
                ? e.message
                : "KODA stream failed.";
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ error: msg })}\n\n`)
            );
            controller.close();
          }
        },
      });

      return new Response(readable, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      });
    }

    const result = await kodaChat(body);
    return NextResponse.json(result);
  } catch (e) {
    if (e instanceof KodaServiceError) {
      return NextResponse.json({ detail: e.message }, { status: e.status });
    }
    return NextResponse.json(
      { detail: "KODA encountered an unexpected error." },
      { status: 500 }
    );
  }
}
