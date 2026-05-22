import type { TextbookIntro } from "@/lib/courses/textbook/types";
import { HLTH_ADDITIONAL_RESOURCES } from "./additionalResources";

export const HLTH_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Healthcare Fundamentals",
  subtitle:
    "ForgEd academic survey — systems, clinical literacy, documentation, revenue cycle, ethics, and public health",
  paragraphs: [
    "Healthcare is not a single job title or building type. It is a coordinated system of financing, regulation, facilities, workforce roles, information systems, and clinical science that converts patient needs into measurable outcomes. This textbook treats medicine as a discipline that requires context: who pays, who is licensed to do what, how risk is communicated, and how evidence—not anecdote—guides care.",
    "Fifteen chapters pair conceptual foundations with worked clinical and administrative examples drawn from U.S. practice patterns (hospitals, ambulatory clinics, public health agencies, pharmacies, and payers). Chapter 1 opens with the history of medicine and today’s health system; ethics and HIPAA land in Chapter 13, healthcare careers in Chapter 14, and the closing chapter looks ahead at technology, payment reform, and the future of care.",
    "This material is general education for students, career explorers, and support-role trainees. It does not replace clinical licensure, nursing school, medical school, coding certification exams, or legal advice. Scope of practice, billing rules, and privacy law vary by state and employer policy—verify current standards with official sources (CMS, CDC, HHS HIPAA guidance, your state health department) before acting in a workplace.",
  ],
  additionalResources: HLTH_ADDITIONAL_RESOURCES,
};
