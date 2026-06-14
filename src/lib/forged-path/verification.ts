import type { ForgedPathPlatform } from "./platforms";
import { FORGED_PATH_PLATFORMS } from "./platforms";

export interface ForgedPathCourseVerification {
  courseId: string;
  platform: ForgedPathPlatform;
  verificationUrl: string;
  verifiedAt: string;
}

const PLATFORM_URL_PATTERNS: Record<ForgedPathPlatform, RegExp[]> = {
  edx: [
    /^https?:\/\/courses\.edx\.org\/certificates\//i,
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
  // Exception: the specific Stanford Online / Princeton Online courses are not
  // currently enrollable, so ANY completed course from these schools counts —
  // including free ones whose certificates live on Coursera, edX, or the
  // schools' own credential/statement-of-accomplishment sites.
  "stanford-online": [
    /^https?:\/\/([a-z0-9-]+\.)*stanford\.edu\//i,
    /^https?:\/\/courses\.edx\.org\/certificates\//i,
    /^https?:\/\/(www\.)?credentials\.edx\.org\/credentials\//i,
    /^https?:\/\/(www\.)?edx\.org\/(certificates|verify)\//i,
    /^https?:\/\/(www\.)?coursera\.org\/account\/accomplishments\//i,
    /^https?:\/\/(www\.)?coursera\.org\/verify\//i,
  ],
  "princeton-online": [
    /^https?:\/\/([a-z0-9-]+\.)*princeton\.edu\//i,
    /^https?:\/\/courses\.edx\.org\/certificates\//i,
    /^https?:\/\/(www\.)?credentials\.edx\.org\/credentials\//i,
    /^https?:\/\/(www\.)?edx\.org\/(certificates|verify)\//i,
    /^https?:\/\/(www\.)?coursera\.org\/account\/accomplishments\//i,
    /^https?:\/\/(www\.)?coursera\.org\/verify\//i,
  ],
};

export const PLATFORM_CERTIFICATE_INSTRUCTIONS: Record<
  ForgedPathPlatform,
  { howToFind: string; urlHint: string }
> = {
  edx: {
    howToFind:
      "After earning your edX verified certificate, open it from your edX dashboard and copy the certificate URL from your browser address bar.",
    urlHint: "https://courses.edx.org/certificates/…",
  },
  coursera: {
    howToFind:
      "After completing the course, open your Coursera accomplishment and copy the Verify Certificate link.",
    urlHint: "https://www.coursera.org/account/accomplishments/verify/…",
  },
  "stanford-online": {
    howToFind:
      "The listed Stanford course isn't open for enrollment, so ANY completed Stanford Online course counts — including free ones. Submit the certificate or statement-of-accomplishment verification URL from whichever Stanford course you finished (Stanford, edX, or Coursera link).",
    urlHint: "https://online.stanford.edu/… , a Stanford credentials link, or your Coursera/edX certificate URL",
  },
  "princeton-online": {
    howToFind:
      "The listed Princeton course isn't open for enrollment, so ANY completed Princeton Online course counts — including free ones. Submit the certificate or statement-of-accomplishment verification URL from whichever Princeton course you finished (Princeton, edX, or Coursera link).",
    urlHint: "https://online.princeton.edu/… , a Princeton credentials link, or your Coursera/edX certificate URL",
  },
};

export function normalizeVerificationUrl(raw: string): string {
  const trimmed = raw.trim();
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const parsed = new URL(withProtocol);
    parsed.search = "";
    parsed.hash = "";
    return parsed.toString();
  } catch {
    return withProtocol;
  }
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
      error: `URL must be an official ${FORGED_PATH_PLATFORMS[platform].name} certificate link. Expected format: ${hint}`,
    };
  }

  return { ok: true, url };
}
