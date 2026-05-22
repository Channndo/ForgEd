/**
 * Minimal Ollama chat client for build-time quiz generation.
 */

export function ollamaBase() {
  return (process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434").replace(/\/$/, "");
}

export async function ollamaChat({
  model,
  system,
  user,
  temperature = 0.4,
  timeoutMs = 360000,
}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(`${ollamaBase()}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        model,
        stream: false,
        options: { temperature },
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Ollama ${res.status}: ${text.slice(0, 400)}`);
    }
    const data = await res.json();
    return data.message?.content?.trim() || "";
  } finally {
    clearTimeout(timer);
  }
}

/** Extract first JSON object/array from model output */
export function parseJsonFromLlm(text) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const raw = fenced ? fenced[1].trim() : text.trim();
  const start = raw.search(/[\[{]/);
  if (start < 0) throw new Error("No JSON in LLM response");
  const slice = raw.slice(start);
  const endObj = slice.lastIndexOf("}");
  const endArr = slice.lastIndexOf("]");
  const end = Math.max(endObj, endArr);
  if (end < 0) throw new Error("Incomplete JSON in LLM response");
  return JSON.parse(slice.slice(0, end + 1));
}
