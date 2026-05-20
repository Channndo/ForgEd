import { PROMPTING_FUNDAMENTALS_BANK } from "./banks/prompting-fundamentals";
import { AI_PRODUCTIVITY_SYSTEMS_BANK } from "./banks/ai-productivity-systems";
import { AI_RESEARCH_SKILLS_BANK } from "./banks/ai-research-skills";
import { AI_ETHICS_RISKS_BANK } from "./banks/ai-ethics-risks";
import { AI_WORKFLOW_AUTOMATION_BANK } from "./banks/ai-workflow-automation";
import { SALES_SCHOOL_101_BANK } from "./banks/sales-school-101";
import { CUSTOMER_PSYCHOLOGY_BANK } from "./banks/customer-psychology";
import { OBJECTION_HANDLING_BANK } from "./banks/objection-handling";
import { NEGOTIATION_BASICS_BANK } from "./banks/negotiation-basics";
import { FOLLOW_UP_SYSTEMS_BANK } from "./banks/follow-up-systems";
import { CRM_FUNDAMENTALS_BANK } from "./banks/crm-fundamentals";
import { AI_ASSISTED_SALES_BANK } from "./banks/ai-assisted-sales";
import { BUDGETING_SYSTEMS_BANK } from "./banks/budgeting-systems";
import { CREDIT_AND_DEBT_BANK } from "./banks/credit-and-debt";
import { BANKING_BASICS_BANK } from "./banks/banking-basics";
import { TAXES_EXPLAINED_BANK } from "./banks/taxes-explained";
import { INVESTING_FUNDAMENTALS_BANK } from "./banks/investing-fundamentals";
import { RETIREMENT_PLANNING_BANK } from "./banks/retirement-planning";
import { OPERATING_SYSTEMS_BASICS_BANK } from "./banks/operating-systems-basics";
import { NETWORKING_BASICS_BANK } from "./banks/networking-basics";
import { INTERNET_INFRASTRUCTURE_BANK } from "./banks/internet-infrastructure";
import { TROUBLESHOOTING_BASICS_BANK } from "./banks/troubleshooting-basics";
import { THREAT_AWARENESS_BANK } from "./banks/threat-awareness";
import { PASSWORD_SECURITY_BANK } from "./banks/password-security";
import { PHISHING_DEFENSE_BANK } from "./banks/phishing-defense";
import { NETWORK_SECURITY_BANK } from "./banks/network-security";
import { INCIDENT_RESPONSE_BASICS_BANK } from "./banks/incident-response-basics";
import { BRANDING_FUNDAMENTALS_BANK } from "./banks/branding-fundamentals";
import { CUSTOMER_ACQUISITION_BANK } from "./banks/customer-acquisition";
import { DIGITAL_PRESENCE_BANK } from "./banks/digital-presence";
import { STARTUP_FINANCE_BANK } from "./banks/startup-finance";
import { AI_FOR_ENTREPRENEURS_BANK } from "./banks/ai-for-entrepreneurs";
import { SERVICE_ADVISING_FUNDAMENTALS_BANK } from "./banks/service-advising-fundamentals";
import { REPAIR_ORDER_WORKFLOW_BANK } from "./banks/repair-order-workflow";
import { CUSTOMER_COMMUNICATION_SERVICE_BANK } from "./banks/customer-communication-service";
import { MAINTENANCE_SELLING_BANK } from "./banks/maintenance-selling";
import { WARRANTY_BASICS_BANK } from "./banks/warranty-basics";
import { DIFFICULT_CUSTOMER_SCENARIOS_BANK } from "./banks/difficult-customer-scenarios";
import { AI_AUTOMOTIVE_SERVICE_BANK } from "./banks/ai-automotive-service";
import type { QuizQuestion } from "@/lib/quizTypes";

export const PATH_BANKS: Record<string, QuizQuestion[]> = {
  "prompting-fundamentals": PROMPTING_FUNDAMENTALS_BANK,
  "ai-productivity-systems": AI_PRODUCTIVITY_SYSTEMS_BANK,
  "ai-research-skills": AI_RESEARCH_SKILLS_BANK,
  "ai-ethics-risks": AI_ETHICS_RISKS_BANK,
  "ai-workflow-automation": AI_WORKFLOW_AUTOMATION_BANK,
  "sales-school-101": SALES_SCHOOL_101_BANK,
  "customer-psychology": CUSTOMER_PSYCHOLOGY_BANK,
  "objection-handling": OBJECTION_HANDLING_BANK,
  "negotiation-basics": NEGOTIATION_BASICS_BANK,
  "follow-up-systems": FOLLOW_UP_SYSTEMS_BANK,
  "crm-fundamentals": CRM_FUNDAMENTALS_BANK,
  "ai-assisted-sales": AI_ASSISTED_SALES_BANK,
  "budgeting-systems": BUDGETING_SYSTEMS_BANK,
  "credit-and-debt": CREDIT_AND_DEBT_BANK,
  "banking-basics": BANKING_BASICS_BANK,
  "taxes-explained": TAXES_EXPLAINED_BANK,
  "investing-fundamentals": INVESTING_FUNDAMENTALS_BANK,
  "retirement-planning": RETIREMENT_PLANNING_BANK,
  "operating-systems-basics": OPERATING_SYSTEMS_BASICS_BANK,
  "networking-basics": NETWORKING_BASICS_BANK,
  "internet-infrastructure": INTERNET_INFRASTRUCTURE_BANK,
  "troubleshooting-basics": TROUBLESHOOTING_BASICS_BANK,
  "threat-awareness": THREAT_AWARENESS_BANK,
  "password-security": PASSWORD_SECURITY_BANK,
  "phishing-defense": PHISHING_DEFENSE_BANK,
  "network-security": NETWORK_SECURITY_BANK,
  "incident-response-basics": INCIDENT_RESPONSE_BASICS_BANK,
  "branding-fundamentals": BRANDING_FUNDAMENTALS_BANK,
  "customer-acquisition": CUSTOMER_ACQUISITION_BANK,
  "digital-presence": DIGITAL_PRESENCE_BANK,
  "startup-finance": STARTUP_FINANCE_BANK,
  "ai-for-entrepreneurs": AI_FOR_ENTREPRENEURS_BANK,
  "service-advising-fundamentals": SERVICE_ADVISING_FUNDAMENTALS_BANK,
  "repair-order-workflow": REPAIR_ORDER_WORKFLOW_BANK,
  "customer-communication-service": CUSTOMER_COMMUNICATION_SERVICE_BANK,
  "maintenance-selling": MAINTENANCE_SELLING_BANK,
  "warranty-basics": WARRANTY_BASICS_BANK,
  "difficult-customer-scenarios": DIFFICULT_CUSTOMER_SCENARIOS_BANK,
  "ai-automotive-service": AI_AUTOMOTIVE_SERVICE_BANK,
};
