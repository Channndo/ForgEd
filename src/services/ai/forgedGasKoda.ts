/**
 * KODA inference via ForgEd Google Apps Script — Ollama URL + API key live in Script Properties.
 */

const WEB_APP_URL = process.env.FORGED_WEB_APP_URL?.trim() ?? "";

async function forgedGasPost<T>(
  action: string,
  body: Record<string, unknown>
): Promise<T> {
  if (!WEB_APP_URL) {
    throw new Error("FORGED_WEB_APP_URL is not configured.");
  }
  const res = await fetch(WEB_APP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, ...body }),
    redirect: "follow",
    signal: AbortSignal.timeout(120_000),
  });
  const data = (await res.json().catch(() => ({}))) as T & {
    ok?: boolean;
    error?: string;
  };
  if (!res.ok || data.ok === false) {
    throw new Error(
      typeof data.error === "string" && data.error
        ? data.error
        : `ForgEd API error (${res.status}).`
    );
  }
  return data;
}

export async function forgedGasKodaHealth(): Promise<{
  ok: boolean;
  model: string;
  configured: boolean;
  error?: string;
}> {
  try {
    const data = await forgedGasPost<{
      ok: boolean;
      ollamaOk?: boolean;
      model?: string;
      configured?: boolean;
      error?: string;
    }>("kodaHealth", {});
    return {
      ok: Boolean(data.ollamaOk),
      model: data.model ?? "",
      configured: Boolean(data.configured),
      error: data.error,
    };
  } catch (e) {
    return {
      ok: false,
      model: "",
      configured: false,
      error: e instanceof Error ? e.message : "ForgEd KODA health check failed.",
    };
  }
}

export async function forgedGasKodaChat(params: {
  accessToken: string;
  messages: { role: string; content: string }[];
  model?: string;
}): Promise<{ content: string; model: string }> {
  const data = await forgedGasPost<{
    ok: boolean;
    message?: string;
    model?: string;
    error?: string;
  }>("kodaChat", {
    accessToken: params.accessToken,
    messages: params.messages,
    model: params.model,
  });
  return {
    content: data.message?.trim() || "",
    model: data.model?.trim() || params.model || "",
  };
}
