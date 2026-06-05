export interface ForgedPathPhaseReflection {
  phaseId: string;
  headline: string;
  synthesis: string;
  keyConnections: string[];
  reflectionPrompts: string[];
  executiveApplication: string;
}

export const FORGED_PATH_PHASE_REFLECTIONS: ForgedPathPhaseReflection[] = [
  {
    phaseId: "phase-1",
    headline: "How the mind, markets, and money connect",
    synthesis:
      "Phase 1 builds the cognitive and analytical bedrock every executive decision rests on. Neuroscience explains how people actually process information and bias. Economics explains how incentives shape behavior at scale. Finance translates activity into measurable reality through statements and cash flow.",
    keyConnections: [
      "Cognitive bias (neuroscience) often explains why markets and teams deviate from rational models (economics).",
      "Economic incentives drive the transactions that eventually appear on financial statements (finance).",
      "Cash flow discipline is the bridge between abstract strategy and operational survival.",
    ],
    reflectionPrompts: [
      "Where have you seen cognitive bias override sound economic reasoning in a decision you witnessed?",
      "Which financial statement line item would you inspect first when evaluating a new initiative — and why?",
      "How do incentives in your organization align (or misalign) with the outcomes leadership says it wants?",
    ],
    executiveApplication:
      "Before your next major decision, pause to separate what you know (financials), what you assume (incentives), and what your brain may be distorting (bias). That three-part check becomes a reflex across the rest of this program.",
  },
  {
    phaseId: "phase-2",
    headline: "Capital as a strategic weapon",
    synthesis:
      "Corporate finance is not accounting — it is the discipline of choosing where scarce capital creates the most durable value. Valuation, cost of capital, and investment analysis are the tools executives use to say yes, no, or not yet.",
    keyConnections: [
      "Every capital allocation decision is implicitly a bet on future cash flows — valuation makes that bet explicit.",
      "Cost of capital sets the hurdle; projects below it destroy value even when they generate profit.",
      "Investment analysis connects Phase 1 financial literacy to real strategic trade-offs.",
    ],
    reflectionPrompts: [
      "What is the implicit hurdle rate your organization uses — and is it stated or assumed?",
      "Which past investment would you re-evaluate with a formal valuation lens?",
      "Where is capital trapped in low-return activities that could be redeployed?",
    ],
    executiveApplication:
      "Frame your next budget conversation around return on capital, not just return on effort. Ask: 'If this dollar could only be spent once, where does it earn the highest risk-adjusted return?'",
  },
  {
    phaseId: "phase-3",
    headline: "Position, power, and principle",
    synthesis:
      "Strategy defines where to compete. Leadership determines whether the organization can get there. Ethics sets the boundaries that keep power from corroding trust. Together they answer: what game are we playing, who moves the pieces, and what lines will we not cross?",
    keyConnections: [
      "Competitive positioning (organizational analysis) fails without influence to execute (leadership).",
      "Power without ethical guardrails erodes the stakeholder trust strategy depends on.",
      "Ethical frameworks turn vague 'values' into decision criteria when trade-offs are real.",
    ],
    reflectionPrompts: [
      "Where is your organization's stated strategy misaligned with its actual structure or incentives?",
      "When did influence — not authority — determine an outcome in your experience?",
      "Describe a decision where ethical stakes were high but the 'right' path was costly. What guided the choice?",
    ],
    executiveApplication:
      "Before restructuring or launching a new initiative, map three layers: competitive logic (strategy), political capital required (leadership), and stakeholder impact (ethics). Weakness in any layer predicts failure.",
  },
  {
    phaseId: "phase-4",
    headline: "Deals are designed, not discovered",
    synthesis:
      "Negotiation and transaction structuring are two sides of the same coin. Negotiation secures terms; structure determines durability. The best executives think about both before the first conversation.",
    keyConnections: [
      "Negotiation leverage often comes from structure — alternatives, timing, and dependency.",
      "Agreement architecture (partnerships, commercial terms) prevents deals that look good on day one from failing on day 365.",
      "Phase 3 leadership skills directly affect negotiation outcomes and post-deal execution.",
    ],
    reflectionPrompts: [
      "What was your best alternative in the last significant negotiation you led or observed?",
      "Where did a deal succeed on price but fail on structure?",
      "How would you redesign a past partnership agreement with what you now know about transaction design?",
    ],
    executiveApplication:
      "Enter every material negotiation with a structure sketch before a term sheet. Ask: 'What happens at renewal, breach, and exit?' — not just 'What is the price?'",
  },
  {
    phaseId: "phase-5",
    headline: "Law as the operating system of commerce",
    synthesis:
      "Contract law and intellectual property are not specialty topics for lawyers — they are the enforceable rules of every business relationship. Contracts convert trust into obligation. IP protects the assets that differentiation depends on.",
    keyConnections: [
      "Every negotiated term (Phase 4) becomes enforceable only through contract principles.",
      "IP strategy determines whether competitive advantage can be defended or easily copied.",
      "Liability and enforcement clauses are where deals survive stress — not where they are celebrated.",
    ],
    reflectionPrompts: [
      "Which active agreement in your world would you re-read with a contract-analysis lens?",
      "What intangible assets create your organization's edge — and are they protected?",
      "Where has ambiguity in an agreement created cost or conflict?",
    ],
    executiveApplication:
      "Treat legal review as strategic, not administrative. Before signing, identify the three clauses that matter most if the relationship fails — and whether you can live with them.",
  },
  {
    phaseId: "phase-6",
    headline: "Risk and the rules of the game",
    synthesis:
      "Enterprise risk management and constitutional governance both ask: what rules constrain power, and what happens when those rules are tested? Executives operate inside financial risk, operational risk, and institutional frameworks that outlast any single leader.",
    keyConnections: [
      "Risk management quantifies what strategy assumes away.",
      "Governance frameworks (constitutional reasoning) model how institutions balance competing interests over time.",
      "Phase 5 legal tools are one layer; governance is the system they operate within.",
    ],
    reflectionPrompts: [
      "What is the single largest unmitigated risk in your organization's current plan?",
      "How does your board or leadership structure balance speed with accountability?",
      "Where do formal rules and informal power diverge — and what risk does that create?",
    ],
    executiveApplication:
      "Run a pre-mortem on your top initiative: assume it failed in 18 months. Work backward through risk, governance, and legal exposure. The gaps you find are your action list.",
  },
  {
    phaseId: "phase-7",
    headline: "Judgment under complexity",
    synthesis:
      "The Ethics of Memory closes the arc by asking how institutions remember, interpret, and justify the past. Executive judgment is not only analytical — it is historical and ethical. What you remember, what you omit, and what you honor shapes the culture that executes every strategy.",
    keyConnections: [
      "Institutional memory explains why organizations repeat mistakes or preserve wisdom.",
      "Ethical analysis (Phase 3, deepened) applies to how leaders frame history and accountability.",
      "Every prior phase converges here: decisions become legacy.",
    ],
    reflectionPrompts: [
      "What story does your organization tell about its past — and what does it leave out?",
      "How do you distinguish between learning from failure and punishing it into silence?",
      "What decision from your career would you want preserved as institutional memory — and why?",
    ],
    executiveApplication:
      "You have completed 14 courses across disciplines most executives never integrate. Your final exercise: write one page on how you will apply this curriculum to one real decision in the next 90 days. That document is worth more than any test score.",
  },
];

export function getPhaseReflection(phaseId: string): ForgedPathPhaseReflection | undefined {
  return FORGED_PATH_PHASE_REFLECTIONS.find((r) => r.phaseId === phaseId);
}
