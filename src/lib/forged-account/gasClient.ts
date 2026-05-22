/**
 * Google Apps Script Web App client.
 * Must use redirect: "follow" — a manual redirect breaks POST body delivery.
 */

const WEB_APP_URL = process.env.FORGED_WEB_APP_URL ?? "";

export async function callForgedGas(
  payload: Record<string, unknown>
): Promise<Record<string, unknown>> {
  if (!WEB_APP_URL) {
    throw new Error("FORGED_WEB_APP_URL is not configured.");
  }

  let res: Response;
  try {
    res = await fetch(WEB_APP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
      signal: AbortSignal.timeout(45_000),
    });
  } catch (e) {
    const timedOut =
      e instanceof Error &&
      (e.name === "TimeoutError" || e.name === "AbortError");
    throw new Error(
      timedOut
        ? "ForgEd accounts timed out — Google Apps Script may be waking up. Try again in a few seconds."
        : e instanceof Error
          ? e.message
          : "Could not reach ForgEd accounts."
    );
  }

  const text = await res.text();
  const trimmed = text.trim();

  if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
    return JSON.parse(trimmed) as Record<string, unknown>;
  }

  throw new Error(
    `ForgEd database returned non-JSON (HTTP ${res.status}). Redeploy Apps Script as Web App (Execute as: Me). Preview: ${trimmed.slice(0, 120)}`
  );
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
