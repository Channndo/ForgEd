import { PROMPT_TEXTBOOK, PROMPT_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/prompting-fundamentals";
import { AIPROD_TEXTBOOK, AIPROD_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/ai-productivity-systems";
import { AIRES_TEXTBOOK, AIRES_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/ai-research-skills";
import { AIETH_TEXTBOOK, AIETH_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/ai-ethics-risks";
import { AIAUTO_TEXTBOOK, AIAUTO_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/ai-workflow-automation";
import { SALES_TEXTBOOK, SALES_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/sales-school-101";
import { CUSTPSY_TEXTBOOK, CUSTPSY_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/customer-psychology";
import { OBJ_TEXTBOOK, OBJ_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/objection-handling";
import { NEG_TEXTBOOK, NEG_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/negotiation-basics";
import { FUP_TEXTBOOK, FUP_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/follow-up-systems";
import { CRM_TEXTBOOK, CRM_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/crm-fundamentals";
import { AISLS_TEXTBOOK, AISLS_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/ai-assisted-sales";
import { BUD_TEXTBOOK, BUD_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/budgeting-systems";
import { CRED_TEXTBOOK, CRED_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/credit-and-debt";
import { BANK_TEXTBOOK, BANK_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/banking-basics";
import { TAX_TEXTBOOK, TAX_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/taxes-explained";
import { INV_TEXTBOOK, INV_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/investing-fundamentals";
import { RET_TEXTBOOK, RET_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/retirement-planning";
import { OS_TEXTBOOK, OS_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/operating-systems-basics";
import { NET_TEXTBOOK, NET_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/networking-basics";
import { INET_TEXTBOOK, INET_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/internet-infrastructure";
import { TROUB_TEXTBOOK, TROUB_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/troubleshooting-basics";
import { THREAT_TEXTBOOK, THREAT_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/threat-awareness";
import { PASS_TEXTBOOK, PASS_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/password-security";
import { PHISH_TEXTBOOK, PHISH_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/phishing-defense";
import { NETSEC_TEXTBOOK, NETSEC_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/network-security";
import { IR_TEXTBOOK, IR_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/incident-response-basics";
import { BRAND_TEXTBOOK, BRAND_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/branding-fundamentals";
import { CAC_TEXTBOOK, CAC_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/customer-acquisition";
import { DIG_TEXTBOOK, DIG_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/digital-presence";
import { STFIN_TEXTBOOK, STFIN_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/startup-finance";
import { AIENT_TEXTBOOK, AIENT_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/ai-for-entrepreneurs";
import { SVC_TEXTBOOK, SVC_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/service-advising-fundamentals";
import { RO_TEXTBOOK, RO_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/repair-order-workflow";
import { SVCCOM_TEXTBOOK, SVCCOM_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/customer-communication-service";
import { MAINT_TEXTBOOK, MAINT_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/maintenance-selling";
import { WARR_TEXTBOOK, WARR_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/warranty-basics";
import { DIFF_TEXTBOOK, DIFF_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/difficult-customer-scenarios";
import { AASVC_TEXTBOOK, AASVC_TEXTBOOK_INTRO } from "@/lib/courses/textbooks/ai-automotive-service";
import type { TextbookBundle } from "./types";

export const PATH_BUNDLES: Record<string, TextbookBundle> = {
  "prompting-fundamentals": { slug: "prompting-fundamentals", intro: PROMPT_TEXTBOOK_INTRO, chapters: PROMPT_TEXTBOOK },
  "ai-productivity-systems": { slug: "ai-productivity-systems", intro: AIPROD_TEXTBOOK_INTRO, chapters: AIPROD_TEXTBOOK },
  "ai-research-skills": { slug: "ai-research-skills", intro: AIRES_TEXTBOOK_INTRO, chapters: AIRES_TEXTBOOK },
  "ai-ethics-risks": { slug: "ai-ethics-risks", intro: AIETH_TEXTBOOK_INTRO, chapters: AIETH_TEXTBOOK },
  "ai-workflow-automation": { slug: "ai-workflow-automation", intro: AIAUTO_TEXTBOOK_INTRO, chapters: AIAUTO_TEXTBOOK },
  "sales-school-101": { slug: "sales-school-101", intro: SALES_TEXTBOOK_INTRO, chapters: SALES_TEXTBOOK },
  "customer-psychology": { slug: "customer-psychology", intro: CUSTPSY_TEXTBOOK_INTRO, chapters: CUSTPSY_TEXTBOOK },
  "objection-handling": { slug: "objection-handling", intro: OBJ_TEXTBOOK_INTRO, chapters: OBJ_TEXTBOOK },
  "negotiation-basics": { slug: "negotiation-basics", intro: NEG_TEXTBOOK_INTRO, chapters: NEG_TEXTBOOK },
  "follow-up-systems": { slug: "follow-up-systems", intro: FUP_TEXTBOOK_INTRO, chapters: FUP_TEXTBOOK },
  "crm-fundamentals": { slug: "crm-fundamentals", intro: CRM_TEXTBOOK_INTRO, chapters: CRM_TEXTBOOK },
  "ai-assisted-sales": { slug: "ai-assisted-sales", intro: AISLS_TEXTBOOK_INTRO, chapters: AISLS_TEXTBOOK },
  "budgeting-systems": { slug: "budgeting-systems", intro: BUD_TEXTBOOK_INTRO, chapters: BUD_TEXTBOOK },
  "credit-and-debt": { slug: "credit-and-debt", intro: CRED_TEXTBOOK_INTRO, chapters: CRED_TEXTBOOK },
  "banking-basics": { slug: "banking-basics", intro: BANK_TEXTBOOK_INTRO, chapters: BANK_TEXTBOOK },
  "taxes-explained": { slug: "taxes-explained", intro: TAX_TEXTBOOK_INTRO, chapters: TAX_TEXTBOOK },
  "investing-fundamentals": { slug: "investing-fundamentals", intro: INV_TEXTBOOK_INTRO, chapters: INV_TEXTBOOK },
  "retirement-planning": { slug: "retirement-planning", intro: RET_TEXTBOOK_INTRO, chapters: RET_TEXTBOOK },
  "operating-systems-basics": { slug: "operating-systems-basics", intro: OS_TEXTBOOK_INTRO, chapters: OS_TEXTBOOK },
  "networking-basics": { slug: "networking-basics", intro: NET_TEXTBOOK_INTRO, chapters: NET_TEXTBOOK },
  "internet-infrastructure": { slug: "internet-infrastructure", intro: INET_TEXTBOOK_INTRO, chapters: INET_TEXTBOOK },
  "troubleshooting-basics": { slug: "troubleshooting-basics", intro: TROUB_TEXTBOOK_INTRO, chapters: TROUB_TEXTBOOK },
  "threat-awareness": { slug: "threat-awareness", intro: THREAT_TEXTBOOK_INTRO, chapters: THREAT_TEXTBOOK },
  "password-security": { slug: "password-security", intro: PASS_TEXTBOOK_INTRO, chapters: PASS_TEXTBOOK },
  "phishing-defense": { slug: "phishing-defense", intro: PHISH_TEXTBOOK_INTRO, chapters: PHISH_TEXTBOOK },
  "network-security": { slug: "network-security", intro: NETSEC_TEXTBOOK_INTRO, chapters: NETSEC_TEXTBOOK },
  "incident-response-basics": { slug: "incident-response-basics", intro: IR_TEXTBOOK_INTRO, chapters: IR_TEXTBOOK },
  "branding-fundamentals": { slug: "branding-fundamentals", intro: BRAND_TEXTBOOK_INTRO, chapters: BRAND_TEXTBOOK },
  "customer-acquisition": { slug: "customer-acquisition", intro: CAC_TEXTBOOK_INTRO, chapters: CAC_TEXTBOOK },
  "digital-presence": { slug: "digital-presence", intro: DIG_TEXTBOOK_INTRO, chapters: DIG_TEXTBOOK },
  "startup-finance": { slug: "startup-finance", intro: STFIN_TEXTBOOK_INTRO, chapters: STFIN_TEXTBOOK },
  "ai-for-entrepreneurs": { slug: "ai-for-entrepreneurs", intro: AIENT_TEXTBOOK_INTRO, chapters: AIENT_TEXTBOOK },
  "service-advising-fundamentals": { slug: "service-advising-fundamentals", intro: SVC_TEXTBOOK_INTRO, chapters: SVC_TEXTBOOK },
  "repair-order-workflow": { slug: "repair-order-workflow", intro: RO_TEXTBOOK_INTRO, chapters: RO_TEXTBOOK },
  "customer-communication-service": { slug: "customer-communication-service", intro: SVCCOM_TEXTBOOK_INTRO, chapters: SVCCOM_TEXTBOOK },
  "maintenance-selling": { slug: "maintenance-selling", intro: MAINT_TEXTBOOK_INTRO, chapters: MAINT_TEXTBOOK },
  "warranty-basics": { slug: "warranty-basics", intro: WARR_TEXTBOOK_INTRO, chapters: WARR_TEXTBOOK },
  "difficult-customer-scenarios": { slug: "difficult-customer-scenarios", intro: DIFF_TEXTBOOK_INTRO, chapters: DIFF_TEXTBOOK },
  "ai-automotive-service": { slug: "ai-automotive-service", intro: AASVC_TEXTBOOK_INTRO, chapters: AASVC_TEXTBOOK },
};
