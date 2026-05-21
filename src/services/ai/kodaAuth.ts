import {
  extractBearerToken,
  isForgedAccountConfigured,
  validateForgedAccessToken,
} from "@/lib/forged-account/server";
import { useForgedAccountKoda, useSyntrixKoda } from "./inference";

export async function assertKodaAuthorized(
  authHeader: string | null | undefined
): Promise<void> {
  if (useSyntrixKoda()) {
    if (!extractBearerToken(authHeader)) {
      throw new KodaAuthError(401, "Sign in to use KODA.");
    }
    return;
  }
  if (useForgedAccountKoda() || isForgedAccountConfigured()) {
    const token = extractBearerToken(authHeader);
    if (!token) {
      throw new KodaAuthError(401, "Sign in to your ForgEd account to use KODA.");
    }
    const validation = await validateForgedAccessToken(token);
    if (!validation.ok) {
      if (validation.reason === "expired") {
        throw new KodaAuthError(401, "Session expired. Sign in again to use KODA.");
      }
      if (validation.reason === "missing") {
        throw new KodaAuthError(401, "Sign in to your ForgEd account to use KODA.");
      }
      throw new KodaAuthError(
        503,
        "ForgEd accounts are responding slowly. Wait a moment and try KODA again."
      );
    }
  }
}

export async function kodaRequiresSignIn(): Promise<boolean> {
  return useSyntrixKoda() || useForgedAccountKoda() || isForgedAccountConfigured();
}

export class KodaAuthError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = "KodaAuthError";
  }
}
