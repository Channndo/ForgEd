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
    const valid = await validateForgedAccessToken(token);
    if (!valid) {
      throw new KodaAuthError(401, "Session expired. Sign in again to use KODA.");
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
