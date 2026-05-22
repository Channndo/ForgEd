/**
 * Google Apps Script Web App client.
 * Must use redirect: "follow" — a manual redirect breaks POST body delivery.
 */

import {
  extractJsonFromGasText,
  isForgedGasHealthPayload,
} from "@/lib/forged-account/gasResponse";

const WEB_APP_URL = process.env.FORGED_WEB_APP_URL ?? "";
const GAS_POST_RETRIES = 2;

async function postForgedGasOnce(
  payload: Record<string, unknown>
): Promise<Record<string, unknown>> {
  const res = await fetch(WEB_APP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    redirect: "follow",
    signal: AbortSignal.timeout(45_000),
  });

  const text = await res.text();
  try {
    return extractJsonFromGasText(text);
  } catch {
    const preview = text.trim().slice(0, 120);
    throw new Error(
      `ForgEd database returned non-JSON (HTTP ${res.status}). Redeploy Apps Script as Web App (Execute as: Me). Preview: ${preview}`
    );
  }
}

export async function callForgedGas(
  payload: Record<string, unknown>
): Promise<Record<string, unknown>> {
  if (!WEB_APP_URL) {
    throw new Error("FORGED_WEB_APP_URL is not configured.");
  }

  const needsSession = payload.action === "loginUser" || payload.action === "registerUser";
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= GAS_POST_RETRIES; attempt++) {
    try {
      const data = await postForgedGasOnce(payload);
      if (needsSession && isForgedGasHealthPayload(data)) {
        lastError = new Error(
          "ForgEd accounts returned a health check instead of a login response."
        );
        if (attempt < GAS_POST_RETRIES) {
          await new Promise((r) => setTimeout(r, 1200 * (attempt + 1)));
          continue;
        }
        throw lastError;
      }
      return data;
    } catch (e) {
      const err = e instanceof Error ? e : new Error(String(e));
      const timedOut =
        err.name === "TimeoutError" || err.name === "AbortError";
      lastError = timedOut
        ? new Error(
            "ForgEd accounts timed out — Google Apps Script may be waking up. Try again in a few seconds."
          )
        : err;
      if (attempt < GAS_POST_RETRIES) {
        await new Promise((r) => setTimeout(r, 1200 * (attempt + 1)));
        continue;
      }
      throw lastError;
    }
  }

  throw lastError || new Error("Could not reach ForgEd accounts.");
}

export async function notifySignupEmail(user: {
  userId: string;
  email: string;
  username: string;
  displayName: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  referralSource?: string;
}): Promise<{ emailSent: boolean; emailError?: string }> {
  const secret = process.env.FORGED_SERVER_SECRET ?? "";
  if (!secret) {
    return { emailSent: false, emailError: "FORGED_SERVER_SECRET not set on server." };
  }

  try {
    const data = await callForgedGas({
      action: "notifySignup",
      serverSecret: secret,
      ...user,
    });
    return {
      emailSent: Boolean(data.emailSent),
      emailError: typeof data.emailError === "string" ? data.emailError : undefined,
    };
  } catch (e) {
    return {
      emailSent: false,
      emailError: e instanceof Error ? e.message : "notifySignup failed.",
    };
  }
}
