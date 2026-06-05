export type ForgedPathPlatform = "edx" | "coursera" | "stanford-online" | "princeton-online";

export interface ForgedPathPlatformInfo {
  id: ForgedPathPlatform;
  name: string;
  costNote: string;
  financialAidNote: string;
  financialAidUrl: string;
  financialAidLabel: string;
}

export const FORGED_PATH_PLATFORMS: Record<ForgedPathPlatform, ForgedPathPlatformInfo> = {
  edx: {
    id: "edx",
    name: "edX",
    costNote:
      "edX courses are often free to audit. A verified certificate or full program track may require a fee set by the university partner.",
    financialAidNote:
      "edX offers financial assistance that can reduce or cover certificate costs. Apply from the course enrollment page before you pay.",
    financialAidUrl:
      "https://support.edx.org/hc/en-us/articles/360037609111-How-do-I-apply-for-financial-assistance",
    financialAidLabel: "Apply for edX financial assistance",
  },
  coursera: {
    id: "coursera",
    name: "Coursera",
    costNote:
      "Coursera courses may be free to preview, but certificates, specializations, and graded access often require payment.",
    financialAidNote:
      "Coursera provides financial aid and scholarships for many courses. Submit an application from the course page — approval can take up to 15 days.",
    financialAidUrl:
      "https://www.coursera.support/s/article/209819033-Apply-for-Financial-Aid-or-a-Scholarship",
    financialAidLabel: "Apply for Coursera financial aid",
  },
  "stanford-online": {
    id: "stanford-online",
    name: "Stanford Online",
    costNote:
      "Stanford Online programs may charge tuition or certificate fees depending on the specific course or credential.",
    financialAidNote:
      "Review the course page for current pricing and any financial support, scholarships, or employer reimbursement options listed by Stanford Online.",
    financialAidUrl: "https://online.stanford.edu/",
    financialAidLabel: "View Stanford Online courses",
  },
  "princeton-online": {
    id: "princeton-online",
    name: "Princeton Online",
    costNote:
      "Princeton Online offerings may include fees for enrollment, certificates, or continuing education credit.",
    financialAidNote:
      "Check the course listing for tuition details and any aid, waiver, or sponsorship options published by Princeton.",
    financialAidUrl: "https://online.princeton.edu/",
    financialAidLabel: "View Princeton Online courses",
  },
};

export function getPlatformInfo(platform: ForgedPathPlatform): ForgedPathPlatformInfo {
  return FORGED_PATH_PLATFORMS[platform];
}

export function detectPlatformFromLink(link: string): ForgedPathPlatform {
  if (link.includes("edx.org")) return "edx";
  if (link.includes("coursera.org")) return "coursera";
  if (link.includes("online.stanford.edu")) return "stanford-online";
  if (link.includes("online.princeton.edu")) return "princeton-online";
  return "coursera";
}
