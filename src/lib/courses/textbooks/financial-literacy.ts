export type {
  TextbookLaw,
  TextbookCitation,
  TextbookSection,
  TextbookChapter,
  TextbookIntro,
} from "@/lib/courses/textbook/types";
import type { TextbookChapter } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const FIN_TEXTBOOK_INTRO = {
  title: "Financial Literacy",
  subtitle:
    "ForgEd deep-dive — money, markets, credit, saving, investing, risk, and lifelong planning",
  paragraphs: [
    "Personal finance is not a collection of tips about coupons and side hustles. It is applied economics at household scale: how purchasing power is created and eroded, how cash flows through accounts, how lenders price trust, how compound growth rewards patience, and how governments tax and regulate financial behavior. Mastery begins with precise vocabulary and measurable habits, not motivational slogans.",
    "This ForgEd textbook follows the rigor of structured facts-based curricula: each chapter builds conceptual models you can test against your own statements, pay stubs, and credit reports. You will learn why inflation matters to wage negotiations, how to construct a zero-based budget, what APR and utilization mean, when debt is tool versus trap, how emergency funds differ from retirement accounts, and how diversification reduces—but never eliminates—investment risk.",
    "The material is general education for consumers, students, and early-career professionals. It is not tax advice, investment advice, or legal counsel. Laws, contribution limits, and product terms change; verify current figures with official sources (IRS, CFPB, SEC, your state's insurance department) before acting. Use the table of contents to study sequentially or to revisit specific topics before major financial decisions.",
  ],
};

export const FIN_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "money-inflation",
    1,
    "Money, purchasing power, and inflation",
    [
      section(
        "functions-of-money",
        "1.1 What money is — and what it is not",
        [
          "Money is a social technology: a widely accepted medium of exchange, unit of account, and store of value. Coins, paper, bank balances, and central-bank digital liabilities differ in form, but they share the property that strangers can settle debts without bartering goats for dentistry. Wealth, by contrast, is the stock of productive assets, human capital, and claims that can generate future consumption.",
          "Confusing money with wealth leads to predictable errors. Holding large cash balances feels safe, yet inflation quietly transfers purchasing power from savers to borrowers and to those who receive newly created money first. Understanding money therefore requires understanding how its quantity and velocity interact with prices and output in the real economy.",
        ],
        {
          bulletPoints: [
            "Medium of exchange — reduces barter friction",
            "Unit of account — prices and contracts denominated in dollars",
            "Store of value — purchasing power preserved only if inflation is low and institutions stable",
            "Wealth — income-generating capacity; not identical to cash on hand",
          ],
        }
      ),
      section(
        "inflation-mechanics",
        "1.2 Inflation: measurement, causes, and consequences",
        [
          "Inflation is a sustained rise in the general price level. Economists measure it with indexes such as the Consumer Price Index (CPI) and Personal Consumption Expenditures (PCE). Not every price moves together: housing, food, energy, and medical care often diverge, which is why your felt inflation can differ from headline statistics.",
          "Demand-pull inflation occurs when spending outruns productive capacity; cost-push inflation rises when input costs (wages, energy, supply-chain disruptions) increase. Expectations matter: if workers and firms anticipate higher prices, wage and price setting can entrench a cycle. Central banks respond by tightening monetary policy—raising interest rates and slowing credit—to anchor expectations.",
          "For households, inflation erodes real wages when nominal pay raises lag price increases. Fixed-rate debt becomes relatively cheaper in real terms (you repay with dollars worth less), while savers in low-yield accounts lose ground. Long-term financial plans must express goals in real (inflation-adjusted) terms, not nominal dollars.",
        ],
        {
          bulletPoints: [
            "CPI / PCE — headline indexes; components differ from personal basket",
            "Demand-pull vs cost-push — different macro causes, same felt grocery bill",
            "Real wages — nominal pay must exceed inflation to gain purchasing power",
            "Central bank response — higher rates cool credit and spending",
          ],
          citations: [
            {
              source: "Bureau of Labor Statistics — Consumer Price Index",
              url: "https://www.bls.gov/cpi/",
              note: "Official U.S. inflation measurement methodology",
            },
          ],
        }
      ),
      section(
        "interest-nominal-real",
        "1.3 Nominal versus real interest rates",
        [
          "When a bank quotes a savings APY or a lender quotes a mortgage rate, that figure is nominal—it does not subtract inflation. The real interest rate approximates the Fisher relationship: real ≈ nominal − expected inflation. A 5% certificate of deposit during 3% inflation yields roughly 2% real return before taxes.",
          "Borrowers face the mirror image. A 7% fixed mortgage with 3% inflation means the real cost of carrying debt declines over time if income keeps pace with prices. Variable-rate debt, however, reprices with policy rates and can squeeze budgets when inflation fighting raises borrowing costs faster than wages adjust.",
        ],
        {
          bulletPoints: [
            "Nominal rate — quoted APR/APY before inflation adjustment",
            "Real rate — approximate nominal minus expected inflation",
            "Savers lose — low nominal yields below inflation erode purchasing power",
            "Fixed-rate borrowers — may repay with dollars worth less in real terms",
          ],
          citations: [
            {
              source: "Federal Reserve — Monetary policy and interest rates",
              url: "https://www.federalreserve.gov/monetarypolicy.htm",
              note: "How policy rates influence borrowing and savings conditions economy-wide",
            },
          ],
        }
      ),
      section(
        "time-value",
        "1.4 Time value of money and discounting",
        [
          "A dollar today is worth more than a dollar promised next year because you can invest today's dollar, earn returns, and because uncertainty and inflation discount future promises. Present value (PV) and future value (FV) equations translate cash flows across time, enabling comparison of lump sums versus streams—critical for retirement contributions, loan amortization, and business cases.",
          "Even without formulas, the intuition governs daily tradeoffs: paying cash for a discount versus financing at APR, choosing a pension lump sum versus annuity, or valuing an education that raises lifetime earnings. Financially literate households internalize that delaying saving shifts the burden onto later, larger contributions.",
        ],
        {
          bulletPoints: [
            "Future value grows with compounding periods and rate",
            "Present value divides future cash flows by (1 + r)^n",
            "Opportunity cost — every spend forecloses an investment alternative",
            "Rule of 72 — approximate years to double ≈ 72 ÷ annual percent return",
          ],
        }
      ),
      section(
        "macro-household-link",
        "1.5 From macroeconomics to household decisions",
        [
          "Macro indicators are not abstract headlines—they transmit through wages, unemployment risk, rent inflation, and portfolio returns. Recessions raise default risk and job loss probability; expansions tighten labor markets and may improve bargaining power. Trade policy, energy shocks, and pandemics propagate through supply chains into grocery and auto prices.",
          "Households cannot control monetary policy, but they can hedge exposures: diversify income skills, avoid excessive variable-rate leverage, maintain liquid reserves, and index long-term investments where appropriate. Financial literacy at this layer means reading the economy as context for personal choices, not as noise on a news ticker.",
        ],
        {
          bulletPoints: [
            "Unemployment rate — signals job-loss risk for emergency-fund sizing",
            "Policy rates — affect variable APRs, mortgage refinances, and savings yields",
            "Rent and CPI shelter — largest budget line for many renters",
            "Human capital — skills diversification hedges sector downturns",
          ],
        }
      ),
    ],
    "Functions of money, inflation dynamics, and real purchasing power"
  ),
  chapter(
    "budgeting-cash-flow",
    2,
    "Budgeting, cash flow, and living within means",
    [
      section(
        "cash-flow-statement",
        "2.1 Personal cash flow as a financial statement",
        [
          "A household operates like a small firm: cash inflows (wages, benefits, gig income, transfers) minus outflows (housing, food, transport, debt service, taxes, discretionary spending) equal net cash flow. Positive net flow funds saving; negative net flow draws down balances or adds debt.",
          "Unlike accrual accounting, cash flow focuses on timing—when rent clears, when a paycheck lands, when insurance premiums hit. Seasonality matters: annual subscriptions, holiday travel, and back-to-school expenses create spikes that average monthly budgeting hides unless you plan explicitly.",
        ],
        {
          bulletPoints: [
            "Inflows — wages, self-employment, benefits, interest, transfers in",
            "Outflows — fixed obligations, variable consumption, taxes, debt service",
            "Net cash flow — inflows minus outflows for the period (not net worth)",
            "Timing risk — bills due before payday require buffer or line of credit",
          ],
          citations: [
            {
              source: "CFPB — Budgeting and managing money",
              url: "https://www.consumerfinance.gov/consumer-tools/budgeting/",
              note: "Consumer-oriented guidance on building and maintaining a household budget",
            },
          ],
        }
      ),
      section(
        "budget-methods",
        "2.2 Budget architectures: zero-based, 50/30/20, and envelopes",
        [
          "Zero-based budgeting assigns every expected dollar of income to a category until remaining is zero, forcing tradeoffs visible on paper. The 50/30/20 heuristic allocates roughly half to needs, 30% to wants, and 20% to saving and debt payoff—useful as a starting scaffold, not a law. Cash envelope systems cap discretionary categories physically or via dedicated debit pots, combating overspend when cards obscure pain of payment.",
          "The best method is the one you reconcile weekly. Budgets fail from neglect, not from arithmetic. Treat the budget as a control system: set targets, measure actuals, adjust categories—especially food, transport, and subscriptions where variance concentrates.",
        ],
        {
          bulletPoints: [
            "Zero-based — income − allocations = 0 each month",
            "50/30/20 — needs / wants / save-debt split",
            "Envelope — capped spend pools for variable categories",
            "Pay yourself first — automate transfers on payday before discretionary spend",
          ],
        }
      ),
      section(
        "emergency-vs-budget",
        "2.3 Fixed, variable, and periodic expenses",
        [
          "Fixed costs (rent, insurance premiums, loan minimums) resist short-run cuts. Variable costs (utilities, groceries, fuel) flex with behavior. Periodic costs (vehicle registration, holidays, medical deductibles) derail naive monthly plans unless annualized—divide by twelve and fund a sinking fund.",
          "Separating essential from discretionary spending clarifies crisis response. In job loss, essentials and minimum debt service come first; discretionary and long-term investing pause until cash flow stabilizes. Documenting categories in a spreadsheet or app enables month-over-month variance analysis—the diagnostic that reveals lifestyle creep.",
        ],
        {
          bulletPoints: [
            "Fixed — contractually stable amounts (rent, loan minimums, premiums)",
            "Variable — scales with usage or choices (utilities, food, fuel)",
            "Periodic — annualized into monthly sinking-fund contributions",
            "Essential vs discretionary — defines austerity order in a shock",
          ],
        }
      ),
      section(
        "net-worth-tracking",
        "2.4 Net worth, KPIs, and review cadence",
        [
          "Net worth equals assets minus liabilities. Tracking it quarterly reveals whether budgeting and investing compound toward wealth or whether consumption and debt outrun income. Complementary KPIs include savings rate (savings ÷ gross income), debt-to-income ratio, and months of essential expenses covered by liquid reserves.",
          "A monthly money date—thirty to sixty minutes reconciling accounts, updating categories, and previewing next month's obligations—prevents small errors from becoming crises. Couples and roommates benefit from shared visibility rules: which accounts are joint, who pays which bill, and how windfalls are allocated.",
        ],
        {
          bulletPoints: [
            "Net worth — assets minus liabilities; snapshot, not cash flow",
            "Savings rate — share of gross income saved or invested",
            "Debt-to-income — monthly debt payments ÷ gross monthly income",
            "Money date — recurring reconciliation and forward-looking budget",
          ],
        }
      ),
      section(
        "subscription-audit",
        "2.5 Subscription creep, lifestyle inflation, and recurring audits",
        [
          "Recurring charges—streaming, software, gym memberships, meal kits, cloud storage—feel small individually but compound into material monthly outflows. Subscription creep occurs when trials convert silently, prices rise after promotional periods, and duplicate services overlap (three music apps, two cloud backups). Because card-on-file billing reduces pain of payment, these expenses evade envelope-style awareness until cash flow tightens.",
          "A quarterly recurring-expense audit exports thirty to ninety days of card and bank activity, lists every repeating merchant, and forces a keep-cut-pause decision. Negotiate retention offers on internet and insurance at renewal; cancel what no longer matches priorities. Lifestyle inflation is the tendency to raise spending as income rises; pairing raises with automatic savings increases preserves marginal dollars before new habits form.",
          "Income volatility—commission sales, seasonal work, tips—requires baseline budgets on conservative income estimates with surplus months funding holding accounts, not permanent spending lifts. Treat windfalls as one-time allocations: emergency fund top-up, debt principal, or IRA contribution—not implicit raises to monthly subscriptions.",
        ],
        {
          bulletPoints: [
            "Subscription audit — quarterly review of all auto-renew charges",
            "Lifestyle inflation — spending rises with income unless defaults redirect raises",
            "Holding account — park surplus months for lean months in variable income",
            "Marginal dollar — next dollar should match stated goals, not drift",
          ],
          citations: [
            {
              source: "CFPB — Managing your money",
              url: "https://www.consumerfinance.gov/consumer-tools/managing-your-money/",
              note: "Federal consumer guidance on tracking spending and recurring obligations",
            },
          ],
        }
      ),
    ],
    "Constructing budgets that reflect real cash timing and priorities"
  ),
  chapter(
    "banking-payments",
    3,
    "Banking, payments, and the financial plumbing",
    [
      section(
        "depository-types",
        "3.1 Checking, savings, and account mechanics",
        [
          "Depository institutions—commercial banks, credit unions, online banks—hold transaction accounts (checking) and store-of-value accounts (savings, money market). FDIC (banks) and NCUA (credit unions) insurance cover qualifying deposits up to statutory limits per depositor, per institution, reducing insolvency risk but not fraud risk.",
          "Checking accounts optimize payments: ACH, wires, debit cards, checks. Savings accounts historically limited withdrawals; today liquidity features vary. High-yield savings at insured online banks often pay more than legacy brick-and-mortar defaults while remaining federally insured when membership criteria are met.",
        ],
        {
          bulletPoints: [
            "Checking — payments and daily cash management",
            "Savings / HYSA — store of value; compare APY and insurance",
            "FDIC / NCUA — deposit insurance per institution limits",
            "Fraud vs insolvency — insurance does not replace monitoring for unauthorized transfers",
          ],
          laws: [
            {
              name: "Federal Deposit Insurance Act (FDIC insurance)",
              summary:
                "Insures eligible deposits at FDIC-member banks up to applicable limits.",
            },
          ],
          citations: [
            {
              source: "FDIC — How deposit insurance works",
              url: "https://www.fdic.gov/resources/deposit-insurance/",
            },
          ],
        }
      ),
      section(
        "payment-rails",
        "3.2 ACH, wires, cards, and peer-to-peer apps",
        [
          "ACH networks batch electronic transfers—payroll direct deposit, bill pay, account-to-account moves—typically settling in one to two business days. Wires move large or urgent sums same-day with irreversibility and higher fees. Card networks (Visa, Mastercard) authorize retail payments; merchants pay interchange, consumers see rewards and fraud protections governed by Regulation E and card network rules.",
          "Peer-to-peer apps (Zelle, Venmo, Cash App) map to bank accounts or balances; treat them as cash-like. Scams exploit instant transfers and weak dispute paths. Never send P2P payments to strangers claiming buyer protection you cannot verify.",
        ],
        {
          bulletPoints: [
            "ACH — batched bank transfers; payroll and bill pay backbone",
            "Wire — same-day, high-value, generally irreversible",
            "Debit/credit cards — network authorization; Reg E vs FCBA protections differ",
            "P2P apps — cash-like; weak recourse on scam payments to strangers",
          ],
          laws: [
            {
              name: "Electronic Fund Transfer Act (Regulation E)",
              summary:
                "Governs consumer rights on electronic debits from deposit accounts, including error resolution timelines.",
            },
          ],
          citations: [
            {
              source: "Federal Reserve — Payment systems overview",
              url: "https://www.federalreserve.gov/paymentsystems.htm",
              note: "U.S. payment rails, oversight, and policy context for ACH and card networks",
            },
          ],
        }
      ),
      section(
        "fees-overdraft",
        "3.3 Fees, overdrafts, and float",
        [
          "Maintenance fees, minimum balance requirements, out-of-network ATM charges, and overdraft penalties can erode low-balance households. Opting into overdraft coverage for debit transactions is often expensive versus declined transactions plus a buffer in checking. Linking a savings account or line of credit for transfers can be cheaper if terms are understood.",
          "Float—the lag between spending and settlement—has shrunk as real-time payments expand. Still, pending charges reduce available balance before they post; budgeting on ledger balance avoids surprises.",
        ],
        {
          bulletPoints: [
            "Overdraft opt-in — debit coverage often triggers high per-item fees",
            "Available balance — pending debits reduce spendable cash before posting",
            "APY disclosure — savings yields must be stated under Truth in Savings rules",
            "Fee schedule — compare maintenance, ATM, and transfer costs across institutions",
          ],
          laws: [
            {
              name: "Truth in Savings Act (Regulation DD)",
              summary:
                "Requires clear disclosure of deposit account APY, fees, and minimum balance rules before account opening.",
            },
          ],
        }
      ),
      section(
        "identity-fraud",
        "3.4 Fraud, identity theft, and consumer protections",
        [
          "Regulation E limits consumer liability for unauthorized electronic transfers when reported promptly. Credit cards offer strong chargeback rights for billing errors and fraud under the Fair Credit Billing Act. Debit fraud reimbursement is narrower and slower—another reason many experts prefer credit cards for everyday spend paid in full monthly.",
          "Freeze credit reports at all three bureaus when not actively applying for loans. Use strong unique passwords, hardware or app-based two-factor authentication, and monitor accounts weekly. Phishing remains the dominant attack—institutions rarely ask for passwords via text links.",
        ],
        {
          laws: [
            {
              name: "Electronic Fund Transfer Act (Regulation E)",
              summary:
                "Consumer rights and error resolution for electronic transfers from deposit accounts.",
            },
            {
              name: "Fair Credit Billing Act",
              summary:
                "Dispute process for unauthorized or erroneous credit card charges.",
            },
          ],
        }
      ),
      section(
        "choosing-institution",
        "3.5 Selecting and consolidating financial institutions",
        [
          "Evaluate APY on cash, fee schedules, ATM networks, mobile app quality, and customer service. Splitting accounts—bills checking, high-yield savings, investment brokerage—can optimize each function if complexity remains manageable. Consolidation reduces forgotten accounts but concentrates risk if credentials are compromised.",
          "Document beneficiaries on deposit accounts where allowed. Maintain a simple inventory: institution, account type, last four digits, and who to contact—stored securely for partners or heirs.",
        ]
      ),
    ],
    "How money moves, how accounts work, and how to stay safe"
  ),
  chapter(
    "credit-scores",
    4,
    "Credit reports, scores, and borrowing reputation",
    [
      section(
        "credit-file",
        "4.1 Credit reports and the three bureaus",
        [
          "Equifax, Experian, and TransUnion maintain credit files summarizing your borrowing history: trade lines (cards, loans), public records (bankruptcies, some liens), and inquiries when lenders pull reports. The files feed scoring models; they are not identical—dispute errors on each bureau separately.",
          "AnnualCreditReport.com provides free weekly access to reports (policy may vary—verify current federal allowance). Review for wrong balances, accounts that are not yours, and stale negative items beyond reporting limits (typically seven years for most derogatories, ten for some bankruptcies).",
        ],
        {
          citations: [
            {
              source: "CFPB — Credit reports and scores",
              url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/",
            },
          ],
        }
      ),
      section(
        "score-models",
        "4.2 FICO, VantageScore, and scoring factors",
        [
          "FICO and VantageScore weight payment history, amounts owed (especially utilization), length of credit history, new credit, and mix of account types. Utilization—balances divided by limits on revolving accounts—often moves scores quickly. Paying down cards before statement closing dates can lower reported utilization.",
          "Industry-specific scores exist (auto, bankcard). 'Educational' scores from free apps may differ from scores lenders use. Focus on fundamentals that improve all models rather than chasing a single number.",
        ],
        {
          bulletPoints: [
            "Payment history — largest weight; late payments hurt for years",
            "Utilization — keep revolving balances well below limits; many aim under 30%, lower is better",
            "Age of accounts — keep oldest cards open if no fee harm",
            "Hard inquiries — rate shopping for mortgages/auto within windows counts as one inquiry in many models",
          ],
          laws: [
            {
              name: "Fair Credit Reporting Act (FCRA)",
              summary:
                "Governs accuracy, access, disputes, and permissible use of consumer credit reports by furnishers and users.",
            },
          ],
        }
      ),
      section(
        "building-credit",
        "4.3 Building and rehabilitating credit",
        [
          "Secured credit cards (cash collateral), credit-builder loans, and authorized user status on a responsible cardholder's account can establish history. Consistent on-time payment matters more than carrying small balances—paying in full avoids interest while still building positive history.",
          "Collections and charge-offs negotiate pay-for-delete rarely; pay settled debts for moral and legal reasons, knowing score recovery may take time. Bankruptcy is a last-resort legal process with long reporting horizons—credit counseling agencies can model alternatives.",
        ],
        {
          bulletPoints: [
            "Secured card — refundable deposit backs credit limit for thin files",
            "Authorized user — inherits positive history if primary pays on time",
            "Pay in full — avoids interest; carrying balance not required to build credit",
            "Rehabilitation — accurate negatives age off; disputes are free via bureaus",
          ],
        }
      ),
      section(
        "credit-myths",
        "4.4 Myths, predatory products, and monitoring",
        [
          "Checking your own report is a soft inquiry and does not harm scores. Closing old cards can raise utilization and shorten history. Debit cards and prepaid cards do not build credit. 'Credit repair' firms cannot remove accurate negative information—dispute process is free DIY.",
          "Freeze and fraud alerts are free security tools. Paid monitoring is optional if you actively review reports. Before major borrowing, avoid new accounts and large balance swings that confuse underwriting.",
        ],
        {
          bulletPoints: [
            "Soft inquiry — your own credit check does not lower scores",
            "Closing cards — can hurt utilization and average age of accounts",
            "Credit repair scams — cannot delete accurate negative data",
            "Security freeze — free at each bureau; blocks new account openings",
          ],
        }
      ),
    ],
    "How lenders evaluate trustworthiness—and how you improve it"
  ),
  chapter(
    "debt",
    5,
    "Debt: productive leverage and destructive traps",
    [
      section(
        "debt-taxonomy",
        "5.1 Secured, unsecured, revolving, and installment debt",
        [
          "Secured debt (mortgages, auto loans) pledges collateral; default enables repossession or foreclosure. Unsecured debt (most cards, personal loans) relies on creditworthiness and legal collection. Installment loans amortize principal over a term; revolving credit re-borrows up to a limit.",
          "Interest may be fixed or variable. Promotional 0% APR periods reset to high go-to rates if balances remain. Prepayment penalties are rare on consumer products but read contracts for personal loans and subprime auto.",
        ],
        {
          bulletPoints: [
            "Secured — collateral backs the loan (home, vehicle)",
            "Unsecured — lender relies on creditworthiness and collection law",
            "Installment — fixed payments retire principal over a term",
            "Revolving — reuse up to limit; minimum payments prolong cost",
          ],
        }
      ),
      section(
        "apr-apy-cost",
        "5.2 APR, amortization, and true cost",
        [
          "Annual Percentage Rate (APR) on loans includes interest and certain fees, enabling comparison. Credit cards quote APR but assess daily periodic interest on average daily balance if not paid in full. Minimum payments mostly service interest—stretching repayment for years.",
          "Amortization schedules front-load interest on mortgages early years; extra principal payments save total interest dramatically. On $300,000 at 6.5% for 30 years, tens of thousands hinge on small extra principal each month.",
        ],
        {
          bulletPoints: [
            "APR — annualized borrowing cost including certain fees on installment credit",
            "Daily periodic rate — card APR ÷ 365 applied to average daily balance",
            "Amortization — early payments mostly interest; extra principal saves total cost",
            "Minimum payment trap — revolving balance can persist for years at high APR",
          ],
          laws: [
            {
              name: "Truth in Lending Act (TILA / Regulation Z)",
              summary:
                "Requires standardized APR disclosures and key terms for consumer credit so borrowers can compare offers.",
            },
          ],
          citations: [
            {
              source: "CFPB — Credit cards",
              url: "https://www.consumerfinance.gov/consumer-tools/credit-cards/",
              note: "Federal guidance on card APR, billing, and consumer rights",
            },
          ],
        }
      ),
      section(
        "good-vs-bad",
        "5.3 When debt is a tool versus a trap",
        [
          "Education and mortgages historically increased human and physical capital when borrowed conservatively relative to expected income and home value. High-interest revolving debt for depreciating consumption—vacations, gadgets, dining—rarely builds wealth. The test: does the financed asset raise net worth or income after all costs?",
          "Debt snowball (smallest balance first) versus avalanche (highest APR first) debates psychology versus math. Avalanche minimizes interest; snowball maximizes early wins. Either beats minimum-only payments.",
        ],
        {
          bulletPoints: [
            "Snowball — motivational quick wins on small balances",
            "Avalanche — mathematically minimizes interest paid",
            "Consolidation — simplifies payments; does not fix overspending without behavior change",
            "Refinance — replace debt with lower rate; watch fees and term extension",
          ],
        }
      ),
      section(
        "student-mortgage-auto",
        "5.4 Student, mortgage, and auto borrowing essentials",
        [
          "Federal student loans offer income-driven repayment, deferment, and forgiveness programs private loans lack—exhaust federal options before private. Borrow only program cost minus grants; understand starting salary distributions for your field.",
          "Mortgages require down payment, reserves, credit, and debt-to-income within guidelines (conventional, FHA, VA programs differ). Total housing cost—including taxes, insurance, maintenance—should not destabilize other goals. Auto loans should align with vehicle depreciation; long terms on used cars create negative equity risk.",
        ]
      ),
      section(
        "default-collections",
        "5.5 Default, collections, and bankruptcy overview",
        [
          "Default triggers fees, credit damage, garnishment where legal, and loss of collateral. Communicate with lenders early—hardship programs exist. Statutes of limitations on collection suits vary by state and debt type; paying old debts restarts clocks in some jurisdictions—seek qualified legal advice before partial payments on ancient defaults.",
          "Chapter 7 liquidation and Chapter 13 repayment plans are federal bankruptcy paths with credit consequences and filing costs. Nonprofit credit counseling (NFCC members) offers budgeting help and debt management plans that may reduce interest without court.",
        ],
        {
          bulletPoints: [
            "Default — missed payments trigger fees, collections, and credit damage",
            "Validation — collectors must substantiate debt; dispute in writing",
            "Statute of limitations — state-specific; legal advice before paying old debts",
            "Bankruptcy — federal Chapter 7/13 with long credit reporting horizons",
          ],
          laws: [
            {
              name: "Fair Debt Collection Practices Act (FDCPA)",
              summary:
                "Limits how third-party collectors contact consumers, misrepresent debts, and threaten actions they cannot legally take.",
            },
          ],
        }
      ),
    ],
    "Borrowing with eyes open: costs, structures, and exit ramps"
  ),
  chapter(
    "saving-emergency",
    6,
    "Saving, emergency funds, and liquidity ladders",
    [
      section(
        "why-save",
        "6.1 Precautionary saving and goal-based saving",
        [
          "Saving transfers consumption from high-income periods to low-income or high-expense periods. Precautionary saving responds to uncertainty (job loss, medical shocks). Goal-based saving targets known future costs—education, relocation, home down payment.",
          "Without liquid savings, households cycle through expensive debt after shocks, never recovering fully. Saving is not deprivation; it is insurance you self-fund.",
        ],
        {
          bulletPoints: [
            "Precautionary saving — buffer against unknown shocks",
            "Goal-based saving — named targets with amounts and dates",
            "Liquidity — ability to access cash within days without penalty",
            "Debt spiral — shocks without savings often force high-interest borrowing",
          ],
        }
      ),
      section(
        "emergency-fund-size",
        "6.2 Emergency fund sizing and placement",
        [
          "Conventional guidance suggests three to six months of essential expenses in cash or cash-like instruments. Single earners, commission income, or recession-vulnerable industries may need more; stable dual-income households with low fixed costs may hold less if other buffers exist.",
          "Keep emergency money separate from checking to reduce accidental spend, but accessible within days—not locked in long-term investments. Series I savings bonds and CDs with manageable penalties can supplement for inflation-aware savers who understand liquidity tradeoffs.",
        ],
        {
          bulletPoints: [
            "Three to six months — rule of thumb on essential expenses, not gross income",
            "Separate account — reduces accidental spending of the buffer",
            "Cash-like — high-yield savings, Treasury bills, not volatile equities",
            "I bonds — inflation-linked federal savings; redemption rules apply",
          ],
          citations: [
            {
              source: "FDIC — Deposit insurance",
              url: "https://www.fdic.gov/resources/deposit-insurance/",
              note: "Insurance limits and coverage rules for bank deposit emergency funds",
            },
          ],
        }
      ),
      section(
        "sinking-funds",
        "6.3 Sinking funds and liquidity ladder",
        [
          "Sinking funds accumulate for predictable non-monthly costs: tires, braces, property tax if not escrowed. A liquidity ladder tiers cash: checking buffer → high-yield savings → short-term Treasuries or CDs → only then long-term investments. Each rung trades yield for speed and certainty.",
          "Automate transfers on payday. Naming accounts ('Emergency,' 'Car Repair') increases psychological commitment versus a single ambiguous savings balance.",
        ],
        {
          bulletPoints: [
            "Sinking fund — dedicated pot for a known future expense",
            "Liquidity ladder — checking → HYSA → T-bills/CDs → long-term assets",
            "Annualize periodic bills — divide yearly cost by 12 for monthly funding",
            "Named accounts — behavioral cue to protect purpose-specific balances",
          ],
        }
      ),
      section(
        "behavioral-tactics",
        "6.4 Behavioral tactics that make saving stick",
        [
          "Defaults beat willpower: payroll split to savings, round-up apps, and annual raise redirection increase balances invisibly. Visualizing goals with target dates converts abstract dollars into months of rent covered. Celebrate milestones without spending the fund—rewards should not undermine the buffer you built.",
          "After filling an emergency fund, redirect cash flow to employer retirement match, high-interest debt payoff, and then brokerage investing—sequencing optimizes risk-adjusted household stability.",
        ],
        {
          bulletPoints: [
            "Pay yourself first — automate savings on payday",
            "Raise redirection — send part of each raise to savings before lifestyle adjusts",
            "Milestone rewards — celebrate without drawing down the emergency fund",
            "Sequencing — emergency fund → employer match → high APR debt → investing",
          ],
        }
      ),
      section(
        "yield-safety-disclosure",
        "6.5 Yield, FDIC coverage, and savings disclosures",
        [
          "Not all 'savings' products are equivalent. High-yield savings accounts at FDIC-insured banks pay competitive APY with daily liquidity subject to transfer limits. Money market mutual funds in brokerage accounts are investments, not deposits—they can break the buck in stress though reforms reduced risk. Compare APY, fees, transfer speed, and whether balances are deposit-insured before moving emergency funds.",
          "Truth in Savings rules require banks to disclose APY calculation methods, compounding frequency, fees that reduce yield, and minimum balances. Promotional 'teaser' rates expire—note the standard ongoing APY. Tiered balances may earn different rates on slices above thresholds.",
          "Chasing an extra 0.25% APY by moving banks monthly costs time and error risk; pick a reputable insured institution with sustainable rates and strong authentication. Pair yield with fraud hygiene: unique passwords, MFA, and alerts on outbound transfers.",
        ],
        {
          bulletPoints: [
            "FDIC insurance — per depositor, per insured bank, up to statutory limits",
            "APY vs interest rate — APY reflects compounding; compare like for like",
            "Brokerage cash sweep — not the same as insured deposit accounts; read disclosures",
            "Teaser rates — revert to standard APY; calendar renewal reminders",
          ],
          laws: [
            {
              name: "Truth in Savings Act (Regulation DD)",
              summary:
                "Mandates uniform APY and fee disclosures on deposit accounts so consumers can compare savings products.",
            },
          ],
          citations: [
            {
              source: "FDIC — BankFind and insurance education",
              url: "https://www.fdic.gov/resources/deposit-insurance/bank-find/",
              note: "Verify institution FDIC membership before placing emergency savings",
            },
          ],
        }
      ),
    ],
    "Liquidity first: buffers that prevent financial cascades"
  ),
  chapter(
    "investing-intro",
    7,
    "Investing fundamentals for long-term wealth",
    [
      section(
        "investing-defined",
        "7.1 Investing versus speculating",
        [
          "Investing commits capital to assets expected to return cash flows or appreciation over years—business ownership (stocks), lending (bonds), real estate, or broad funds. Speculating bets on short-term price moves with inadequate fundamental justification. The distinction is horizon, diversification, and edge—retail speculators usually face professionals with better information and execution.",
          "Historical equity risk premiums compensated patient owners for volatility, but past performance does not guarantee future results. Bonds reduce portfolio volatility but face interest-rate and inflation risk. Cash preserves nominal value poorly when inflation runs hot.",
        ],
        {
          bulletPoints: [
            "Investing — long horizon, cash-flow or diversification rationale",
            "Speculating — short horizon, narrative or momentum without fundamentals",
            "Risk premium — higher expected return compensates for volatility, not guaranteed",
            "Inflation risk — cash and nominal bonds lose real value when prices rise fast",
          ],
          citations: [
            {
              source: "SEC — Investor.gov introduction to investing",
              url: "https://www.investor.gov/introduction-investing",
              note: "Federal investor education on markets, risk, and avoiding fraud",
            },
          ],
        }
      ),
      section(
        "risk-return-diversify",
        "7.2 Risk, return, and diversification",
        [
          "Standard deviation and drawdowns measure volatility. Correlation across assets determines diversification benefit—holding ten tech stocks is not diversification. Index funds hold hundreds or thousands of securities, capturing market returns at low expense ratios.",
          "Asset allocation—stocks/bonds/cash mix—drives most outcome variation for diversified investors. Younger investors with stable human capital can accept higher equity allocations; near-retirees emphasize capital preservation and income.",
        ],
        {
          bulletPoints: [
            "Diversification — spread idiosyncratic risk; cannot eliminate market risk",
            "Expense ratio — recurring fund fee; lower is usually better for index strategies",
            "Dollar-cost averaging — invest fixed amounts on schedule; reduces timing anxiety",
            "Rebalancing — sell winners/buy laggards to maintain target allocation",
          ],
        }
      ),
      section(
        "accounts-vehicles",
        "7.3 Tax-advantaged accounts and brokerage basics",
        [
          "Employer 401(k)/403(b) plans often include match—immediate return before investment performance. Traditional accounts defer tax; Roth accounts fund with after-tax dollars and qualified withdrawals are tax-free. IRAs supplement when employer plans lack match or low-cost options. HSAs triple-tax-advantaged for medical savers who can pay current expenses cash.",
          "Taxable brokerage accounts offer flexibility after maxing advantaged space. Know contribution limits, income phase-outs, and required minimum distributions (RMDs) on traditional accounts—IRS publications update annually.",
        ],
        {
          citations: [
            {
              source: "IRS — Retirement plans",
              url: "https://www.irs.gov/retirement-plans",
            },
          ],
        }
      ),
      section(
        "index-funds-etfs",
        "7.4 Mutual funds, ETFs, and index discipline",
        [
          "Mutual funds price once daily; ETFs trade intraday like stocks. Both can track indexes (S&P 500, total market, international, bonds). Actively managed funds charge higher fees and, on average, underperform benchmarks after fees over long horizons—not because managers are incompetent, but because markets incorporate information quickly.",
          "Avoid concentration in employer stock, meme assets, and leveraged ETFs designed for daily trading horizons. Compound growth needs time and reinvested dividends.",
        ]
      ),
      section(
        "pitfalls-behavior",
        "7.5 Behavioral pitfalls and fraud awareness",
        [
          "Panic selling at bottoms and euphoric buying at tops destroy returns. Media noise and social proof drive chasing performance. Registered investment advisers have fiduciary duty when giving personalized advice; brokers follow suitability standards—know who you hire and how they are paid.",
          "Ponzi schemes promise impossible steady returns. Crypto and options are not required for wealth building. If you cannot explain an investment in two sentences, pause.",
        ]
      ),
    ],
    "Patient ownership of productive assets—not lottery tickets"
  ),
  chapter(
    "insurance-risk",
    8,
    "Insurance, risk transfer, and personal finance",
    [
      section(
        "risk-matrix",
        "8.1 Retain, reduce, transfer, avoid",
        [
          "Risk management frameworks classify responses: retain (self-insure with savings), reduce (seatbelts, smoke detectors), transfer (buy insurance), avoid (don't skydive for a living). Insurance pools premiums to pay the few large losses; it does not create wealth—it stabilizes cash flow after shocks.",
          "Insurable events are accidental, measurable, and non-catastrophic to the insurer collectively. Moral hazard and adverse selection explain underwriting and pricing.",
        ]
      ),
      section(
        "property-casualty",
        "8.2 Auto, renters, and homeowners essentials",
        [
          "Liability coverage protects assets and future wages from lawsuit after you injure others or damage property. Collision and comprehensive cover your vehicle subject to deductibles. Renters insurance is inexpensive and covers personal property and liability—landlords' policies do not cover your belongings.",
          "Homeowners policies exclude flood and earthquake—separate policies or government programs required in hazard zones. Replacement cost versus actual cash value matters for rebuilding after total loss.",
        ]
      ),
      section(
        "health-disability-life",
        "8.3 Health, disability, and life insurance in household planning",
        [
          "Health insurance mitigates catastrophic medical costs—understand deductibles, out-of-pocket maximums, networks, and coinsurance. High-deductible plans pair with HSAs when cash flow allows. Disability insurance replaces income when illness or injury prevents work—often overlooked despite human capital being a young worker's largest asset.",
          "Term life insurance covers income replacement for dependents for a set period; permanent policies mix insurance with investment and suit niche estate needs. Buy enough to clear debts and fund dependents' goals; term is usually sufficient and cheapest.",
        ],
        {
          bulletPoints: [
            "Deductible — amount you pay before plan sharing begins",
            "Out-of-pocket max — annual cap on your share of covered costs",
            "Disability income — replaces paychecks; own-occupation vs any-occupation definitions matter",
            "Term life — pure death benefit for a set years; usually cheapest for young families",
          ],
          laws: [
            {
              name: "Affordable Care Act (ACA)",
              summary:
                "Established marketplace coverage, essential health benefits, and protections such as prohibiting denials for pre-existing conditions in qualified plans.",
            },
          ],
          citations: [
            {
              source: "HealthCare.gov — Coverage and protections",
              url: "https://www.healthcare.gov/health-care-law/protections/",
              note: "Overview of ACA consumer protections and enrollment concepts",
            },
          ],
        }
      ),
      section(
        "deductibles-shopping",
        "8.4 Deductibles, umbrellas, and shopping coverage",
        [
          "Higher deductibles lower premiums if you can absorb the hit from savings. Umbrella liability adds million-dollar layers cheaply once auto/home limits are maximized. Shop at renewal; bundle discounts help but compare total price. Document home contents with video inventory.",
          "Insurance is not an investment—evaluate on protection value, not cash-value projections from agents motivated by commission.",
        ],
        {
          bulletPoints: [
            "Deductible tradeoff — higher deductible lowers premium if savings can absorb loss",
            "Umbrella policy — extra liability layer after underlying auto/home limits",
            "Renewal shop — compare total premium, not bundle discount alone",
            "Home inventory — video/serial numbers speed claims after theft or fire",
          ],
        }
      ),
      section(
        "employer-benefits-cobra",
        "8.5 Employer benefits, COBRA, and coverage continuity",
        [
          "Many workers receive health, dental, vision, life, and disability coverage through employer group plans subsidized by the firm. Open enrollment is the annual window to elect coverage, HSA contributions, and dependent status without a qualifying life event. Summary Plan Descriptions explain deductibles, networks, and appeal rights—read before assuming 'good insurance' from a low premium share.",
          "Job loss triggers special enrollment on ACA marketplaces and may qualify you for COBRA continuation of the former employer plan—typically at full premium plus administrative fee, expensive but useful for provider continuity or pending procedures. Compare COBRA total cost to marketplace subsidies based on projected annual income; Medicaid or CHIP may cover children in eligible states.",
          "Life and disability through work often lapse when employment ends; evaluate portable or individual policies before leaving if dependents rely on your income. Beneficiary forms on group life override informal wishes—update after marriage, divorce, or births.",
        ],
        {
          bulletPoints: [
            "Open enrollment — annual election period; qualifying events allow mid-year changes",
            "COBRA — temporary continuation of group health; usually full cost to employee",
            "Special enrollment — marketplace window after loss of employer coverage",
            "Portable coverage — individual disability/term life when group benefits end",
          ],
          laws: [
            {
              name: "Consolidated Omnibus Budget Reconciliation Act (COBRA)",
              summary:
                "Allows eligible employees and dependents to continue group health coverage for a limited period after qualifying events such as job loss.",
            },
          ],
          citations: [
            {
              source: "U.S. Department of Labor — COBRA continuation coverage",
              url: "https://www.dol.gov/general/topic/health-plans/cobra",
              note: "Federal overview of COBRA rights and employer notice obligations",
            },
          ],
        }
      ),
    ],
    "Transferring catastrophic risk while self-insuring small losses"
  ),
  chapter(
    "taxes-basics",
    9,
    "Taxes: how governments fund services and claim income",
    [
      section(
        "tax-types",
        "9.1 Income, payroll, sales, and property taxes",
        [
          "Federal income tax is progressive—marginal brackets apply to slices of taxable income, not every dollar at the top rate. Payroll taxes fund Social Security and Medicare (FICA). State and local income taxes vary; some states rely on sales tax instead. Property taxes fund schools and municipal services; renters indirectly pay through rent.",
          "Understanding marginal versus average tax rate prevents bracket myths—earning $1 into the next bracket does not raise tax on all prior income.",
        ],
        {
          bulletPoints: [
            "Marginal rate — tax on the next dollar of taxable income in its bracket",
            "Average rate — total tax ÷ taxable income; lower than marginal for progressivity",
            "FICA — payroll taxes for Social Security and Medicare on wages",
            "Sales and property — consumption and wealth-local taxes layered on income",
          ],
          citations: [
            {
              source: "IRS — Tax information for individuals",
              url: "https://www.irs.gov/individuals",
              note: "Official federal tax guidance, forms, and withholding resources",
            },
          ],
        }
      ),
      section(
        "w2-1099-withholding",
        "9.2 W-2 employees, withholding, and gig workers",
        [
          "Employers withhold income and FICA from paychecks; year-end W-2 reconciles. Adjust Form W-4 when life changes (marriage, dependents, side income) to avoid large refunds or balances due. Refunds are interest-free loans to Treasury; large balances due trigger penalties.",
          "Self-employed and gig workers pay quarterly estimated taxes and both employer and employee FICA on net profit—budget roughly 25–35% aside depending on state and deductions, verified with software or preparer.",
        ],
        {
          bulletPoints: [
            "Form W-4 — adjusts federal withholding from paychecks",
            "W-2 — annual wage and withholding statement from employers",
            "1099-NEC — nonemployee compensation reported to IRS and you",
            "Self-employment tax — Social Security and Medicare on net profit",
          ],
        }
      ),
      section(
        "deductions-credits",
        "9.3 Deductions, credits, and adjustments",
        [
          "Standard deduction simplifies filing for most; itemizing helps when mortgage interest, SALT (capped), and charity exceed standard. Credits (Child Tax Credit, EITC, education credits) reduce tax dollar-for-dollar and are more powerful than deductions. Above-the-line adjustments (traditional IRA, student loan interest within limits) reduce adjusted gross income.",
          "Tax software interviews capture most household situations; complex stock options, rentals, or businesses warrant CPA help.",
        ]
      ),
      section(
        "capital-gains",
        "9.4 Investment taxation basics",
        [
          "Interest and non-qualified dividends taxed as ordinary income. Qualified dividends and long-term capital gains receive preferential rates if holding periods met. Selling losers can offset gains (tax-loss harvesting) within rules. Wash-sale rules disallow deductions if you rebuy substantially identical securities within 30 days.",
          "Tax-advantaged accounts shelter growth; taxable accounts report annually on dividends and sales—track cost basis.",
        ]
      ),
      section(
        "filing-compliance",
        "9.5 Filing, records, and audit hygiene",
        [
          "Keep seven years of returns and supporting documents as a practical standard. IRS correspondence is not spam—respond by deadlines. Scammers impersonate IRS by phone; IRS initiates most contact by mail.",
          "Free File Alliance offers guided filing for qualifying incomes. Extension to file is not extension to pay—estimate tax due by April deadline.",
        ],
        {
          bulletPoints: [
            "Record retention — seven years is a practical standard for many documents",
            "IRS mail — legitimate notices arrive by postal mail first in most cases",
            "Extension to file — not an extension to pay; estimate tax to avoid penalties",
            "Free File — IRS-partnered software for qualifying income thresholds",
          ],
          citations: [
            {
              source: "IRS — Tax topics for individuals",
              url: "https://www.irs.gov/help/ita",
            },
          ],
        }
      ),
      section(
        "state-local-estimated",
        "9.6 State, local, and estimated tax mechanics",
        [
          "Federal withholding on a W-2 does not satisfy state and local obligations automatically. Nine states impose no broad-based income tax on wages (list changes—verify current law); others require annual returns, estimated payments, or employer withholding mirroring federal mechanics. City income taxes—common in Ohio municipalities, New York City, Philadelphia—add another layer requiring separate forms and rates.",
          "Estimated tax payments (IRS Form 1040-ES and state equivalents) are quarterly prepayments required when withholding will not cover liability—typical for self-employment, large capital gains, or two-earner households with insufficient W-4 adjustments. Underpayment penalties apply if safe-harbor thresholds are missed: generally paying 90% of current-year tax or 100% of prior-year tax (110% if prior AGI exceeded limits—verify annually).",
          "Remote work across state lines created nexus questions: some states tax wages where work is performed, others where employer is located. Document days worked by state; payroll may not align with true liability until you true-up on the return. Sales tax on online purchases is collected by many marketplaces, but use-tax reporting still applies in some states for untaxed purchases.",
        ],
        {
          bulletPoints: [
            "Multi-state filing — residency, sourcing, and reciprocity rules vary",
            "Quarterly estimates — due in April, June, September, January for federal",
            "Safe harbor — prior-year or percentage tests reduce underpayment penalties",
            "Remote work — track work location; payroll withholding may not match liability",
          ],
          citations: [
            {
              source: "IRS — Estimated taxes",
              url: "https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes",
              note: "Who must pay quarterly estimates and how to calculate them",
            },
          ],
        }
      ),
    ],
    "Tax literacy for employees, side hustlers, and investors"
  ),
  chapter(
    "scams-planning",
    10,
    "Fraud, scams, and lifelong financial planning",
    [
      section(
        "scam-typology",
        "10.1 Social engineering and financial fraud patterns",
        [
          "Romance scams, IRS impersonation, tech support, lottery, and investment fraud share psychology: urgency, secrecy, authority, and fear. No legitimate institution demands gift cards, crypto, or wire transfers for 'verification.' Slow down; call back on published numbers, not caller ID.",
          "Elder fraud exploits isolation and cognitive decline—family protocols and limited-power-of-attorney guardrails help. Report to FTC, FBI IC3, and local law enforcement; recovery is rare—prevention dominates.",
        ],
        {
          bulletPoints: [
            "Urgency and secrecy — classic manipulation tactics in payment fraud",
            "Gift cards and crypto — red flags; government and banks do not demand these",
            "Callback protocol — use published numbers, not numbers in texts or emails",
            "Reporting — FTC and IC3 complaints aid enforcement patterns",
          ],
          citations: [
            {
              source: "FTC — Consumer Advice on scams",
              url: "https://consumer.ftc.gov/scams",
              note: "Federal reporting and education on common financial fraud schemes",
            },
          ],
        }
      ),
      section(
        "identity-theft-response",
        "10.2 Identity theft response playbook",
        [
          "On discovery: contact affected institutions, change passwords, place fraud alerts or freezes, file identity theft affidavit (FTC IdentityTheft.gov), and monitor credit. Tax identity theft requires IRS Form 14039. Document time spent—some states allow restitution suits.",
          "Children's SSNs are valuable to thieves—freeze minor credit until needed.",
        ]
      ),
      section(
        "planning-horizons",
        "10.3 Goals, timelines, and net worth trajectory",
        [
          "Financial planning aligns cash flow, insurance, investing, and estate documents with life goals—education, homeownership, retirement date, legacy. Quantify goals in today's dollars then inflate or use real return assumptions. Monte Carlo and simple spreadsheet models test sensitivity to returns and spending.",
          "Plans are living documents reviewed annually and after marriage, birth, divorce, death, job change, or major legislation shifts.",
        ]
      ),
      section(
        "retirement-spending",
        "10.4 Retirement accumulation and decumulation",
        [
          "Accumulation phase maximizes savings rate, tax location, and low-cost diversification. Decumulation orders withdrawals across taxable, tax-deferred, and Roth buckets to manage brackets and Medicare IRMAA surcharges. Social Security claiming age trades monthly benefit for longevity risk—married couples need survivor strategies.",
          "Safe withdrawal research (4% rule lineage) is starting point, not guarantee—flexible spending rules adapt to market crashes.",
        ]
      ),
      section(
        "estate-basics",
        "10.5 Estate basics, beneficiaries, and professional help",
        [
          "Beneficiary designations on retirement accounts and life insurance supersede wills if contradictory—coordinate both. Wills govern probate assets; trusts may simplify complex families or privacy needs. Powers of attorney for finance and health care activate when incapacitated—without them, court guardianship may be required.",
          "Fee-only financial planners (CFP®), CPAs, and estate attorneys form a team for high-complexity households. Fiduciary, transparent compensation beats product-pushing commissions when advice is the product.",
        ],
        {
          bulletPoints: [
            "Beneficiary review — after every major life event",
            "Term life while dependents rely on your income",
            "Will/trust — state-specific; DIY kits risky for blended families",
            "Document vault — passwords, policies, contacts known to trusted person",
          ],
        }
      ),
    ],
    "Protecting yourself and steering decades of financial life"
  ),
];
