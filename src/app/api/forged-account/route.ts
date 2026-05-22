import { NextRequest, NextResponse } from "next/server";
import { callForgedGas, notifySignupEmail } from "@/lib/forged-account/gasClient";
import { normalizeAuthSessionResponse } from "@/lib/forged-account/gasResponse";

const SERVER_SECRET = process.env.FORGED_SERVER_SECRET ?? "";

const PUBLIC_ACTIONS = new Set([
  "registerUser",
  "loginUser",
  "requestPasswordReset",
  "resetPassword",
  "verifyCertificate",
]);

const SERVER_ACTIONS = new Set([
  "createForgEdDatabase",
  "initializeSheets",
  "upgradeUsersSheet",
  "notifySignup",
  "sendSignupEmail",
  "diagnoseEmail",
]);

export async function POST(req: NextRequest) {
  if (!process.env.FORGED_WEB_APP_URL || !SERVER_SECRET) {
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
    let data = await callForgedGas(payload);
    if (action === "loginUser" || action === "registerUser") {
      data = normalizeAuthSessionResponse(data);
    }
    const ok = Boolean(data.ok);

    // Fallback signup email only when GAS did not send (avoid second slow GAS round-trip on register).
    if (ok && action === "registerUser" && data.user && typeof data.user === "object") {
      const gasSent = data.emailSent === true;
      if (!gasSent) {
        const u = data.user as Record<string, unknown>;
        void notifySignupEmail({
          userId: String(u.userId || u.id || ""),
          email: String(u.email || body.email || ""),
          username: String(u.username || body.username || ""),
          displayName: String(u.displayName || ""),
          firstName: String(u.firstName || body.firstName || ""),
          lastName: String(u.lastName || body.lastName || ""),
          phone: String(u.phone || body.phone || ""),
          street: String(u.street || body.street || ""),
          city: String(u.city || body.city || ""),
          state: String(u.state || body.state || ""),
          zip: String(u.zip || body.zip || ""),
          referralSource: String(u.referralSource || body.referralSource || ""),
        }).then((notify) => {
          if (!notify.emailSent) {
            console.error(
              "[forged-account] signup email failed:",
              notify.emailError || "notifySignup failed"
            );
          }
        });
      }
    }

    return NextResponse.json(data, { status: ok ? 200 : 400 });
  } catch (e) {
    console.error("[forged-account]", e);
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : "Account service error." },
      { status: 502 }
    );
  }
}
