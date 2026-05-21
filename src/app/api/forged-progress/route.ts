/**
 * @deprecated Use /api/forged-account with FORGED_WEB_APP_URL (ForgEd Accounts GAS).
 */
import { NextRequest, NextResponse } from "next/server";

const SYNTIX_API =
  process.env.SYNTRIX_API_URL?.replace(/\/$/, "") || "https://api.syntrix.solutions";

const USER_ACCOUNTS_WEB_APP_URL = process.env.USER_ACCOUNTS_WEB_APP_URL ?? "";

const SERVER_SECRET = process.env.EDUCATION_PROGRESS_SECRET ?? "";

async function verifySyntrixToken(token: string): Promise<string | null> {
  const res = await fetch(`${SYNTIX_API}/api/auth/me`, {
    headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { user?: { email?: string }; email?: string };
  const email = data.user?.email || data.email;
  return typeof email === "string" ? email.trim().toLowerCase() : null;
}

async function callAppsScript(payload: Record<string, string>) {
  if (!USER_ACCOUNTS_WEB_APP_URL) {
    throw new Error("USER_ACCOUNTS_WEB_APP_URL not configured");
  }
  const res = await fetch(USER_ACCOUNTS_WEB_APP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    redirect: "follow",
  });
  const text = await res.text();
  return JSON.parse(text) as { ok?: boolean; progress?: unknown; error?: string };
}

export async function GET(req: NextRequest) {
  return handle(req, "GET");
}

export async function PUT(req: NextRequest) {
  return handle(req, "PUT");
}

async function handle(req: NextRequest, method: "GET" | "PUT") {
  if (!SERVER_SECRET || !USER_ACCOUNTS_WEB_APP_URL) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Progress sync not configured. Set EDUCATION_PROGRESS_SECRET and USER_ACCOUNTS_WEB_APP_URL (same Omnistrata Apps Script as CoverIQ).",
      },
      { status: 503 }
    );
  }

  const token = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "").trim();
  if (!token) {
    return NextResponse.json({ ok: false, error: "Sign in required." }, { status: 401 });
  }

  const email = await verifySyntrixToken(token);
  if (!email) {
    return NextResponse.json({ ok: false, error: "Invalid session." }, { status: 401 });
  }

  try {
    if (method === "GET") {
      const data = await callAppsScript({
        action: "forgedProgressGet",
        serverSecret: SERVER_SECRET,
        email,
      });
      return NextResponse.json({ ok: true, progress: data.progress ?? null });
    }

    const body = (await req.json()) as { progress?: unknown };
    if (!body.progress || typeof body.progress !== "object") {
      return NextResponse.json({ ok: false, error: "Missing progress." }, { status: 400 });
    }

    await callAppsScript({
      action: "forgedProgressSave",
      serverSecret: SERVER_SECRET,
      email,
      progressJson: JSON.stringify(body.progress),
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[forged-progress]", e);
    return NextResponse.json(
      { ok: false, error: "Could not sync progress." },
      { status: 502 }
    );
  }
}
