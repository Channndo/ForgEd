import { NextRequest, NextResponse } from "next/server";

const WEB_APP_URL = process.env.FORGED_WEB_APP_URL ?? "";
const SERVER_SECRET = process.env.FORGED_SERVER_SECRET ?? "";

const PUBLIC_ACTIONS = new Set([
  "registerUser",
  "loginUser",
  "requestPasswordReset",
  "resetPassword",
]);

const SERVER_ACTIONS = new Set(["createForgEdDatabase", "initializeSheets"]);

async function callAppsScript(payload: Record<string, unknown>) {
  if (!WEB_APP_URL) {
    throw new Error("FORGED_WEB_APP_URL is not configured.");
  }
  const res = await fetch(WEB_APP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    redirect: "follow",
  });
  const text = await res.text();
  try {
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    throw new Error("Invalid response from ForgEd database.");
  }
}

export async function POST(req: NextRequest) {
  if (!WEB_APP_URL || !SERVER_SECRET) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Account backend not configured. Set FORGED_WEB_APP_URL and FORGED_SERVER_SECRET.",
      },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const action = String(body.action || "").trim();
  if (!action) {
    return NextResponse.json({ ok: false, error: "Missing action." }, { status: 400 });
  }

  const authHeader = req.headers.get("authorization") ?? "";
  const tokenFromHeader = authHeader.replace(/^Bearer\s+/i, "").trim();
  const accessToken = String(
    body.accessToken || body.access_token || tokenFromHeader || ""
  ).trim();

  const payload: Record<string, unknown> = { ...body, action };

  if (SERVER_ACTIONS.has(action)) {
    payload.serverSecret = SERVER_SECRET;
  } else if (PUBLIC_ACTIONS.has(action)) {
    /* no session required */
  } else {
    if (!accessToken) {
      return NextResponse.json({ ok: false, error: "Sign in required." }, { status: 401 });
    }
    payload.accessToken = accessToken;
    payload.authorization = `Bearer ${accessToken}`;
  }

  try {
    const data = await callAppsScript(payload);
    const ok = Boolean(data.ok);
    return NextResponse.json(data, { status: ok ? 200 : 400 });
  } catch (e) {
    console.error("[forged-account]", e);
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : "Account service error." },
      { status: 502 }
    );
  }
}
