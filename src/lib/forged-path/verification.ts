import type { ForgedPathPlatform } from "./platforms";

export interface ForgedPathCourseVerification {
  courseId: string;
  platform: ForgedPathPlatform;
  verificationUrl: string;
  verifiedAt: string;
}

const PLATFORM_URL_PATTERNS: Record<ForgedPathPlatform, RegExp[]> = {
  edx: [
    /^https?:\/\/(www\.)?credentials\.edx\.org\/credentials\//i,
    /^https?:\/\/(www\.)?edx\.org\/certificates\//i,
    /^https?:\/\/(learning\.)?edx\.org\/certificate/i,
    /^https?:\/\/(www\.)?edx\.org\/verify\//i,
  ],
  coursera: [
    /^https?:\/\/(www\.)?coursera\.org\/account\/accomplishments\/verify\//i,
    /^https?:\/\/(www\.)?coursera\.org\/account\/accomplishments\/certificate\//i,
    /^https?:\/\/(www\.)?coursera\.org\/verify\//i,
  ],
  "stanford-online": [
    /^https?:\/\/(online\.)?stanford\.edu\//i,
    /^https?:\/\/credentials\.stanford\.edu\//i,
    /^https?:\/\/cpd\.stanford\.edu\//i,
  ],
  "princeton-online": [
    /^https?:\/\/(online\.)?princeton\.edu\//i,
  ],
};

export const PLATFORM_CERTIFICATE_INSTRUCTIONS: Record<
  ForgedPathPlatform,
  { howToFind: string; urlHint: string }
> = {
  edx: {
    howToFind:
      "After earning your edX verified certificate, open it from your edX profile and copy the public verification or credentials link.",
    urlHint: "https://credentials.edx.org/credentials/… or https://www.edx.org/certificates/…",
  },
  coursera: {
    howToFind:
      "After completing the course, open your Coursera accomplishment and copy the Verify Certificate link.",
    urlHint: "https://www.coursera.org/account/accomplishments/verify/…",
  },
  "stanford-online": {
    howToFind:
      "Submit the official Stanford Online certificate or credential verification URL from your completed course.",
    urlHint: "https://online.stanford.edu/… or Stanford credentials link",
  },
  "princeton-online": {
    howToFind:
      "Submit the official Princeton Online certificate or credential verification URL from your completed course.",
    urlHint: "https://online.princeton.edu/…",
  },
};

export function normalizeVerificationUrl(raw: string): string {
  const trimmed = raw.trim();
  if (!/^https?:\/\//i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return trimmed;
}

export function validateVerificationUrl(
  platform: ForgedPathPlatform,
  rawUrl: string
): { ok: true; url: string } | { ok: false; error: string } {
  let url: string;
  try {
    url = normalizeVerificationUrl(rawUrl);
    const parsed = new URL(url);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      return { ok: false, error: "URL must use http or https." };
    }
  } catch {
    return { ok: false, error: "Enter a valid certificate verification URL." };
  }

  const patterns = PLATFORM_URL_PATTERNS[platform];
  if (!patterns.some((pattern) => pattern.test(url))) {
    const hint = PLATFORM_CERTIFICATE_INSTRUCTIONS[platform].urlHint;
    return {
      ok: false,
      error: `URL must be an official ${platform === "edx" ? "edX" : platform === "coursera" ? "Coursera" : platform} certificate link. Expected format: ${hint}`,
    };
  }

  return { ok: true, url };
}
