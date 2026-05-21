export { SECURITY_QUESTIONS } from "@/lib/syntrix/securityQuestions";

export const REFERRAL_SOURCES = [
  { value: "", label: "How did you hear about us?" },
  { value: "search", label: "Search engine" },
  { value: "social", label: "Social media" },
  { value: "friend", label: "Friend or colleague" },
  { value: "employer", label: "Employer or training program" },
  { value: "podcast", label: "Podcast or video" },
  { value: "school", label: "School or university" },
  { value: "other", label: "Other" },
] as const;

export const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS",
  "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY",
  "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV",
  "WI", "WY",
] as const;
