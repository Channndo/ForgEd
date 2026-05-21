export type ExcelCellKey = string;

export interface ExcelLabScenario {
  title: string;
  instructions: string;
  /** Row labels in column A */
  rows: { label: string; key: string; hint?: string }[];
  /** Expected numeric answers keyed by row key */
  answers: Record<string, number>;
  /** Tolerance for numeric compare */
  tolerance?: number;
  hints: string[];
  walkthrough: string[];
  solution: { label: string; value: number }[];
}

export const EXCEL_LAB_SCENARIOS: Record<string, ExcelLabScenario> = {
  "budget-planner": {
    title: "Monthly budget worksheet",
    instructions:
      "Enter values in column B for each line item. Your take-home pay is $3,200. Fixed costs and savings goals are listed — calculate what remains for variable spending.",
    rows: [
      { label: "Take-home pay", key: "income", hint: "Start with 3200" },
      { label: "Rent / housing", key: "rent", hint: "1100" },
      { label: "Debt payments", key: "debt", hint: "400" },
      { label: "Savings goal", key: "savings", hint: "300" },
      { label: "Variable spend (food, transport, misc)", key: "variable" },
    ],
    answers: {
      income: 3200,
      rent: 1100,
      debt: 400,
      savings: 300,
      variable: 1400,
    },
    hints: [
      "Subtract each fixed line from take-home pay before estimating variable spend.",
      "Variable spend = income − rent − debt − savings.",
      "If variable spend is negative, your fixed costs exceed income — adjust savings or debt first.",
    ],
    walkthrough: [
      "Enter 3200 for take-home pay.",
      "Enter fixed costs: rent 1100, debt 400, savings 300.",
      "Variable spend should be 3200 − 1100 − 400 − 300 = 1400.",
    ],
    solution: [
      { label: "Take-home pay", value: 3200 },
      { label: "Rent", value: 1100 },
      { label: "Debt", value: 400 },
      { label: "Savings", value: 300 },
      { label: "Variable spend", value: 1400 },
    ],
  },
  "debt-payoff": {
    title: "Debt payoff comparison",
    instructions:
      "You owe $4,800 on Card A (22% APR) and $2,100 on Card B (18% APR). Enter the avalanche target payment (highest APR first) and total months to clear both with $350/month.",
    rows: [
      { label: "Card A balance", key: "cardA", hint: "4800" },
      { label: "Card B balance", key: "cardB", hint: "2100" },
      { label: "Monthly payment (total)", key: "payment", hint: "350" },
      { label: "Months to debt-free (avalanche)", key: "months" },
      { label: "Interest saved vs minimum-only (approx $)", key: "saved" },
    ],
    answers: {
      cardA: 4800,
      cardB: 2100,
      payment: 350,
      months: 22,
      saved: 680,
    },
    tolerance: 2,
    hints: [
      "Avalanche: put extra payment toward the highest APR balance first.",
      "With $350/month, estimate payoff in roughly 20–24 months for this scenario.",
      "Structured payoff saves hundreds vs paying only minimums.",
    ],
    walkthrough: [
      "Record both balances accurately.",
      "Apply the full $350 to the strategy — avalanche hits Card A first.",
      "Reasonable answers: ~22 months to clear, ~$600–750 interest saved vs minimums.",
    ],
    solution: [
      { label: "Card A balance", value: 4800 },
      { label: "Card B balance", value: 2100 },
      { label: "Monthly payment", value: 350 },
      { label: "Months to debt-free", value: 22 },
      { label: "Interest saved (approx)", value: 680 },
    ],
  },
};

export const EXCEL_LAB_TYPES = new Set(Object.keys(EXCEL_LAB_SCENARIOS));
