import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const BIZ_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Business Foundations",
  subtitle:
    "ForgEd textbook — value creation, strategy, operations, finance, people, and responsible growth",
  paragraphs: [
    "Business is how societies organize work to solve problems people will pay to have solved. A restaurant converts ingredients and labor into meals; a software firm converts code and support into productivity; a hospital converts clinical expertise into health outcomes. What unites these unlike activities is a chain of decisions: who to serve, what to offer, how to deliver it reliably, and how to capture enough value to continue operating.",
    "This ForgEd textbook is written for learners entering the workforce, considering entrepreneurship, or seeking literacy before specialized study. It is not legal, tax, or investment advice. Laws vary by jurisdiction; numbers in examples are illustrative. The goal is conceptual rigor you can apply in interviews, coursework, and early career roles — from reading a balance sheet to understanding why a company chose an LLC, how a CRM supports sales, or what ethical governance expects of leaders.",
    "Ten chapters move from why firms exist through structures, strategy, marketing, sales, operations, accounting, human behavior, entrepreneurship, and ethics with growth. Each chapter contains four or five sections with dense explanatory prose, occasional bullet summaries, and citations to widely taught frameworks and public sources. Read sequentially for the full narrative, or jump to a chapter when you need a refresher before a project or conversation with a mentor.",
  ],
};

export const BIZ_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "value-creation",
    1,
    "Value creation and the purpose of business",
    [
      section(
        "purpose",
        "1.1 What businesses do: create and capture value",
        [
          "Economists and management scholars distinguish value creation from value capture. Value creation occurs when a firm transforms inputs — labor, capital, materials, information — into outputs customers prefer to their alternatives at a price that covers cost. Value capture is the portion of that created surplus the firm retains after paying suppliers, employees, taxes, and financiers. A business that creates value but cannot capture enough of it fails; one that captures value without creating it erodes trust and eventually loses customers or regulatory permission to operate.",
          "Peter Drucker's enduring formulation holds that the purpose of a business is to create a customer. That is not a slogan against profit; profit is the scorecard that signals whether value creation is sustainable. Without customers who perceive benefit, there is no revenue. Without revenue exceeding expenses over time, there is no firm. Introductory business education therefore begins not with incorporation paperwork but with a clear theory of whose problem you solve and why your solution is worth more to them than the money you ask.",
          "Value is subjective at the margin: two buyers may pay different prices for the same product because their circumstances differ. Businesses respond by segmenting markets, versioning products, and bundling services. Understanding value creation trains you to ask, for any initiative, 'Who is better off because we did this, and can we measure it?'",
        ],
        {
          citations: [
            {
              source: "Peter F. Drucker, The Practice of Management (1954)",
              note: "Customer and purpose framing widely cited in management curricula.",
            },
          ],
        }
      ),
      section(
        "jobs-pains-gains",
        "1.2 Customer jobs, pains, and gains",
        [
          "The jobs-to-be-done perspective argues that customers 'hire' products to make progress in a specific circumstance. A commuter does not want a drill; they want a hole, or more precisely, a shelf mounted before guests arrive. Framing demand as jobs — functional, social, and emotional — clarifies why superficial feature lists fail. Pains are obstacles, risks, and undesired outcomes associated with current solutions. Gains are outcomes and benefits customers desire, including unexpected delights that differentiate offerings.",
          "Mapping jobs, pains, and gains before building features reduces waste. In business-to-business contexts, multiple stakeholders hold different jobs: a procurement officer cares about total cost of ownership; an end user cares about usability; an executive sponsor cares about strategic alignment. Value creation requires synthesizing these perspectives into a coherent offer rather than optimizing for a single loud voice.",
          "Empirical methods — interviews, ethnography, win/loss reviews, support ticket analysis — ground the map in evidence rather than assumptions. Quantitative surveys validate prevalence; qualitative depth explains why. Together they inform prioritization: which pains are severe and frequent enough to warrant investment.",
        ],
        {
          citations: [
            {
              source:
                "Anthony W. Ulwick, Jobs to Be Done (2016); Osterwalder & Pigneur, Value Proposition Design (2014)",
            },
          ],
        }
      ),
      section(
        "value-proposition",
        "1.3 Value propositions and differentiation",
        [
          "A value proposition is a concise statement of the benefits a target customer can expect relative to alternatives. Strong propositions specify segment, job, differentiated mechanism, and proof. 'Fastest project management for remote software teams under fifty people, with SOC 2 compliance' is testable; 'innovative platform' is not. Differentiation may rest on cost leadership, performance, reliability, customization, brand, or ecosystem lock-in — but must be credible and costly for rivals to imitate.",
          "Michael Porter warned that being 'stuck in the middle' — neither lowest cost nor clearly differentiated — invites margin compression. Operational effectiveness (doing similar things better) is necessary but not sufficient; strategic positioning requires trade-offs: which customers you will not serve, which features you will not add, which channels you will not use. Trade-offs protect margin and focus resources.",
          "Value propositions evolve as technology and regulation shift alternatives. Incumbents must renew propositions while managing legacy revenue; entrants attack underserved jobs with simpler offers. Dynamic markets reward organizations that instrument customer outcomes and iterate offers without abandoning core trade-offs that define their identity.",
        ],
        {
          citations: [
            {
              source: "Michael E. Porter, Competitive Strategy (1980)",
              url: "https://www.hbs.edu/faculty/Pages/item.aspx?num=195",
            },
          ],
        }
      ),
      section(
        "stakeholders",
        "1.4 Stakeholders beyond customers",
        [
          "Shareholder primacy — maximizing owner returns within law — dominated U.S. corporate discourse for decades, yet every business simultaneously affects employees, suppliers, communities, creditors, and regulators. Stakeholder theory argues that long-run value creation requires attending to relationships that sustain the enterprise. Employees who trust management reduce turnover cost; suppliers treated fairly improve resilience; communities that welcome facilities ease permitting; lenders who believe in governance extend credit on better terms.",
          "Trade-offs among stakeholders are real. Cutting wages may raise short-term profit but destroy capability. Overworking suppliers may lower unit cost but increase disruption risk. Transparent communication and metrics — safety incidents, voluntary turnover, supplier on-time performance, community investment — help boards balance interests without collapsing into vague 'do good' rhetoric unconnected to strategy.",
          "Public benefit corporations and B Corp certification formalize broader duties in some jurisdictions, but any learner should master the baseline: value creation is judged by whether the firm's essential stakeholders continue choosing to participate voluntarily in its ecosystem.",
        ]
      ),
      section(
        "measuring-value",
        "1.5 Measuring value: outcomes versus outputs",
        [
          "Outputs are what you produce — units shipped, tickets closed, hours billed. Outcomes are changes in customer state — downtime avoided, revenue increased, illness prevented. Mature management systems link activities to outcomes through leading and lagging indicators. A sales team may track calls (output) but must connect to qualified pipeline and closed-won revenue (outcomes). Confusing the two incentivizes busywork.",
          "Unit economics — revenue and variable cost per customer or transaction — tests whether value creation scales. Customer lifetime value (CLV) and customer acquisition cost (CAC) guide marketing and product investment. Payback period matters for cash-constrained startups. Even nonprofits use analogous logic: cost per beneficiary served versus measurable social outcome.",
          "Measurement discipline does not eliminate judgment. Externalities — pollution, misinformation, addictive design — may not appear in financial statements until regulation or reputation intervenes. Foundational literacy includes asking what outcomes are omitted from current dashboards and who bears them.",
        ]
      ),
    ],
    "Why firms exist and how they define value for customers and stakeholders"
  ),

  chapter(
    "structures-ownership",
    2,
    "Legal structures and ownership",
    [
      section(
        "sole-partnership",
        "2.1 Sole proprietorships and partnerships",
        [
          "A sole proprietorship is the default form when an individual starts selling goods or services without filing a separate entity. Setup is simple; the owner reports business income on personal tax returns in the United States. Liability is unlimited: personal assets may satisfy business debts and judgments. That risk motivates many operators to formalize entities once exposure grows.",
          "General partnerships involve two or more owners sharing management and profits unless a partnership agreement states otherwise. Partners typically owe fiduciary duties to one another and the partnership. Like sole proprietorships, general partnerships often expose personal assets unless limited liability partnership (LLP) statutes apply in licensed professions. Limited partnerships (LPs) include general partners who manage and limited partners who invest but do not control day-to-day operations, with liability bounded to investment for limited partners.",
          "Partnership agreements should address capital contributions, profit allocation, decision rights, dispute resolution, and exit — buy-sell triggers when a partner dies, retires, or breaches duties. Oral agreements invite expensive litigation; written clarity is cheaper than court.",
        ]
      ),
      section(
        "corp-llc",
        "2.2 Corporations and limited liability companies",
        [
          "A corporation is a legal person separate from shareholders. In the U.S., C corporations face entity-level income tax; shareholders also tax dividends, producing 'double taxation' unless profits stay retained. S corporation elections pass income through to shareholders subject to eligibility rules — citizen/resident shareholders, one class of stock, limits on count — preserving limited liability while avoiding entity-level federal income tax in many cases.",
          "Limited liability companies (LLCs) blend contractual flexibility with limited liability. Operating agreements define management — member-managed versus manager-managed — and economics. Most LLCs are taxed as partnerships or disregarded entities unless they elect corporate taxation. LLCs dominate small business formation because they adapt to varying investor and manager needs without mandatory corporate formalities in many states.",
          "Limited liability is not absolute. Owners who commingle funds, undercapitalize entities, commit fraud, or personally guarantee loans may face 'piercing the veil' claims. Courts examine whether the entity is a sham. Maintaining separate bank accounts, minutes for corporations, and arm's-length transactions preserves protection.",
        ],
        {
          citations: [
            {
              source: "Uniform Law Commission — Revised Uniform Limited Liability Company Act (RULLCA)",
              url: "https://www.uniformlaws.org/committees/limited-liability-company",
              note: "State LLC statutes vary; consult state secretary of state guidance.",
            },
          ],
        }
      ),
      section(
        "public-private",
        "2.3 Public versus private ownership",
        [
          "Private companies raise capital from founders, angels, venture capital, private equity, banks, and debt markets without trading shares on public exchanges. They face fewer continuous disclosure requirements but may have complex shareholder agreements — drag-along, tag-along, liquidation preferences — that shape exit outcomes.",
          "Public companies register securities with the U.S. Securities and Exchange Commission (SEC) and list on exchanges such as NYSE or NASDAQ. They must file periodic reports (10-K annual, 10-Q quarterly, 8-K material events), adhere to Sarbanes-Oxley internal control requirements for accelerated filers, and manage investor relations. Liquidity for shareholders increases; regulatory and litigation exposure rises.",
          "Going public via initial public offering (IPO) or direct listing is costly — underwriting fees, legal and accounting, ongoing compliance. Staying private longer has become common for venture-backed technology firms with abundant private capital, deferring public scrutiny until scale justifies the trade-off.",
        ],
        {
          citations: [
            {
              source: "U.S. Securities and Exchange Commission, Investor.gov — Public Companies",
              url: "https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/public-companies",
            },
          ],
        }
      ),
      section(
        "governance-roles",
        "2.4 Governance roles: boards, officers, and shareholders",
        [
          "Shareholders elect directors who set strategy and hire, evaluate, and if necessary remove the CEO. The board establishes committees — audit, compensation, nominating — staffed with independent directors where regulations and listing standards require. Officers (CEO, CFO, COO, etc.) run daily operations within authority delegated by the board and bylaws.",
          "Fiduciary duties of care and loyalty require directors to inform themselves and act in the corporation's best interest, not personal gain. Business judgment rule deference applies when decisions are informed and not conflicted. Conflicted transactions demand disclosure and often independent approval.",
          "In closely held firms, the same people may wear all hats; governance discipline still prevents disputes. Document major decisions, maintain cap tables, and respect minority rights where applicable. In public firms, proxy advisors and institutional investors increasingly vote on climate, diversity, and executive pay — expanding what 'governance' means in practice.",
        ]
      ),
      section(
        "choosing-structure",
        "2.5 Choosing a structure: a decision framework",
        [
          "Selection depends on liability exposure, number and type of owners, tax situation, fundraising plans, and administrative capacity. High personal liability professions may use PLLCs or professional corporations. Venture-backed startups often incorporate as Delaware C corps for standardized investor documents. Real estate ventures may use LLCs with distinct properties in separate entities to isolate risk.",
          "Tax advice is essential: an LLC taxed as an S corp may reduce self-employment tax for owner-employees with reasonable salary discipline. International owners face restrictions on S corps. State franchise taxes and annual report fees differ. The 'best' structure is contextual, not universal.",
          "Reorganization — converting LLC to corp, merging entities — is possible but not free. Early thoughtful choice reduces friction when raising institutional capital or selling the business. Lawyers and accountants should participate before significant contracts and equity grants accumulate.",
        ],
        {
          bulletPoints: [
            "Assess personal liability exposure from products, premises, and contracts",
            "Map expected owners, control rights, and exit horizon",
            "Model federal and state tax outcomes with a CPA",
            "Align entity with investor expectations if raising outside capital",
            "Maintain formalities that preserve limited liability",
          ],
        }
      ),
    ],
    "How ownership forms shape liability, tax, and control"
  ),

  chapter(
    "strategy",
    3,
    "Strategy and competitive advantage",
    [
      section(
        "mission-vision",
        "3.1 Mission, vision, and strategic intent",
        [
          "Mission statements explain why the organization exists today — whom it serves and how. Vision statements describe a credible aspirational future state years away. Strategic intent bridges the gap with measurable priorities. Vague missions ('be the best') fail to guide trade-offs; operational missions ('provide safe, affordable urban mobility in mid-sized U.S. cities') constrain choices productively.",
          "Strategy is as much about what you will not do as what you will. Resources are finite; saying yes to every segment dilutes focus. Leadership communicates intent repeatedly so middle managers can align budgets, hiring, and KPIs without constant escalation.",
          "External change — new technology, competitor entry, regulation — can invalidate prior intent. Strategic planning is therefore a cycle: analyze, choose, act, measure, learn. Annual plans without environmental scanning become ritual paperwork.",
        ]
      ),
      section(
        "five-forces",
        "3.2 Industry structure: Porter's five forces",
        [
          "Industry profitability is shaped by five forces: rivalry among existing competitors, threat of new entrants, bargaining power of suppliers, bargaining power of buyers, and threat of substitutes. Intense rivalry with many similar competitors and high fixed costs erodes margins. Strong buyers or suppliers extract value. Low entry barriers invite new competitors; patents, scale, network effects, and capital requirements raise barriers.",
          "Substitutes limit pricing power even without direct competitors — email substitutes for postal mail; video conferencing substitutes for some travel. Analyzing forces clarifies where profit pools sit in a value chain. Microprocessor design may be attractive while commodity assembly is not, or vice versa depending on era and geography.",
          "Five forces analysis is static snapshot; dynamics matter. Platform businesses may look competitive early then exhibit winner-take-most dynamics. Regulators may break up dominant firms, reshaping forces overnight. Use the framework to ask disciplined questions, not to predict with false precision.",
        ],
        {
          citations: [
            {
              source: "Michael E. Porter, How Competitive Forces Shape Strategy, Harvard Business Review (1979)",
            },
          ],
        }
      ),
      section(
        "competitive-advantage",
        "3.3 Competitive advantage and activities",
        [
          "Competitive advantage means performing activities differently or performing different activities than rivals to deliver more value or comparable value at lower cost. Activity systems — how marketing, operations, service, and procurement fit together — are harder to copy than single features. Southwest Airlines historically aligned low-cost activities end-to-end; copying one element without the system fails.",
          "Sustainable advantage requires isolating mechanisms: brand trust built over decades, proprietary data, regulatory licenses, scale economies, switching costs. Imitation pressures rise when patents expire or talent moves. Advantage decays unless renewed through innovation and operational improvement.",
          "Dynamic capabilities — sensing opportunities, seizing them, reconfiguring assets — explain how firms adapt when old advantages erode. Strategy literacy includes recognizing when to exploit current advantage versus explore new models that cannibalize today's cash cows.",
        ]
      ),
      section(
        "swot-planning",
        "3.4 SWOT and the strategic planning cycle",
        [
          "SWOT organizes internal strengths and weaknesses with external opportunities and threats. Its value is structured conversation, not the two-by-two itself. Strengths should be verifiable capabilities, not wishes. Weaknesses must include resource gaps competitors exploit. Opportunities and threats tie to trends — demographic shifts, trade policy, climate risk — with implications for action.",
          "Good planning links SWOT to choices: which opportunities fit strengths; which threats require mitigation investments; which weaknesses must be fixed before expansion. Objectives follow — SMART goals where appropriate — then initiatives with owners, budgets, and timelines. Balanced scorecards add financial, customer, internal process, and learning perspectives to avoid financial myopia.",
          "Scenario planning supplements SWOT when uncertainty is high. Teams articulate plausible futures — recession plus supply shock, rapid AI adoption — and stress-test strategies. Resilience emerges from options, not single-point forecasts.",
        ]
      ),
      section(
        "execution",
        "3.5 Strategy execution and alignment",
        [
          "Execution fails when strategy stays in slide decks. Translation requires cascading goals, clear accountability, and resource reallocation — people, capital, attention — toward priorities. OKRs (objectives and key results) connect qualitative ambition to measurable key results reviewed quarterly.",
          "Culture and incentives must reinforce strategy. Sales compensated on revenue alone may undermine premium positioning. Manufacturing rewarded only for output may sacrifice quality. Alignment audits ask: what behaviors does our compensation and promotion system actually reward?",
          "Communication is iterative. Frontline employees spot contradictions early — promised premium service with understaffed support. Leaders who listen and adjust build credibility. Strategy is a hypothesis tested in markets; execution is the experiment apparatus.",
        ]
      ),
    ],
    "Analyzing industries, choosing position, and aligning the organization"
  ),

  chapter(
    "marketing",
    4,
    "Marketing: understanding markets and communicating value",
    [
      section(
        "marketing-role",
        "4.1 Marketing as value communication and exchange facilitation",
        [
          "Marketing is the set of activities that create, communicate, deliver, and exchange offerings that have value for customers, clients, partners, and society at large — as defined by the American Marketing Association. It spans research, product design input, pricing, distribution, and promotion. Poor marketing can hide excellent products; excellent marketing cannot forever mask poor products.",
          "Exchange requires trust. Brands, warranties, reviews, and regulation reduce perceived risk. In digital markets, reputation travels faster — positive and negative. Marketing ethics therefore intersect with product truthfulness and customer data stewardship.",
          "Marketing and sales boundaries blur in small firms but differ in emphasis: marketing builds demand and preference; sales converts qualified interest into revenue. Alignment on ideal customer profile and messaging prevents funnel leakage.",
        ],
        {
          citations: [
            {
              source: "American Marketing Association, Definition of Marketing (approved 2017)",
              url: "https://www.ama.org/the-definition-of-marketing-what-is-marketing/",
            },
          ],
        }
      ),
      section(
        "stp",
        "4.2 Segmentation, targeting, and positioning",
        [
          "Segmentation divides heterogeneous markets into groups with similar needs, behaviors, or characteristics — demographic, geographic, psychographic, behavioral. Effective segments are measurable, substantial, accessible, differentiable, and actionable. Targeting selects segments the firm will pursue given its capabilities and competitive situation. Positioning occupies a distinct place in the target customer's mind relative to alternatives.",
          "Perceptual maps visualize positioning on key attributes — price versus quality, convenience versus selection. Repositioning incumbents is costly; entrants often win by occupying empty space. STP should be evidence-based: cohort retention, margin by segment, and willingness-to-pay research beat intuition.",
          "Mass marketing persists for true commodities; most differentiated offers require focus. Spreading too thin raises customer acquisition cost and dilutes brand meaning.",
        ]
      ),
      section(
        "brand",
        "4.3 Brand equity and consistency",
        [
          "A brand is more than a logo; it is the cumulative expectation formed by every touchpoint — product, support, packaging, social media, employer reputation. Brand equity is the commercial value of those associations: premium pricing power, loyalty, extension into adjacent categories. Consistency builds memory structures; chaos erodes trust.",
          "Brand architecture choices matter for portfolios: house of brands (P&G) versus branded house (Google sub-brands). Co-branding and licensing extend reach but attach risk if partners misbehave. Crisis communication plans protect equity when defects or scandals emerge.",
          "Measurement blends financial proxies — price premium, elasticity — with perceptual surveys and share of voice. Long-term brand investment conflicts with short-term quarterly pressure; literate managers articulate brand KPIs alongside quarterly sales.",
        ]
      ),
      section(
        "marketing-mix",
        "4.4 The marketing mix: product, price, place, promotion",
        [
          "The four Ps — product, price, place (distribution), promotion — remain a teaching backbone. Product decisions include features, quality level, design, warranties, and line breadth. Price includes list price, discounts, payment terms, and psychological framing. Place covers channels — direct, retail, marketplace, hybrid — and logistics that affect availability. Promotion spans advertising, public relations, personal selling, sales promotion, and content.",
          "Services marketing added people, process, and physical evidence — the expanded 7Ps — because intangibility, variability, and simultaneity of production/consumption change tactics. A consulting firm's process and staff appearance are as consequential as a manufacturer's package.",
          "Mix elements must be coherent. Premium product with discount-store distribution sends conflicting signals. Integrated campaigns align message, creative, and channel with STP choices.",
        ]
      ),
      section(
        "digital-marketing",
        "4.5 Digital marketing fundamentals and metrics",
        [
          "Digital channels — search, social, email, display, influencer partnerships — offer targeting and measurement but also auction-based cost inflation and privacy regulation. Search engine optimization (SEO) earns organic visibility; search engine marketing (SEM) buys paid placement. Attribution is contested: last-click models undervalue awareness channels; incrementality tests and media mix modeling regain rigor.",
          "Core metrics include impressions, click-through rate, conversion rate, cost per acquisition, and marketing qualified leads. Funnel analytics reveal drop-off stages. Consent-based email under laws such as CAN-SPAM and GDPR requires lawful basis and unsubscribe mechanics.",
          "Content marketing educates and builds trust before purchase intent peaks. Community management turns customers into advocates. Digital literacy includes recognizing bot traffic, ad fraud risk, and platform dependency when algorithms change reach overnight.",
        ],
        {
          citations: [
            {
              source: "FTC, CAN-SPAM Act compliance guide for business",
              url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business",
            },
          ],
        }
      ),
    ],
    "From market insight to brand, mix, and measurable campaigns"
  ),

  chapter(
    "sales-crm",
    5,
    "Sales, customer relationships, and CRM",
    [
      section(
        "sales-process",
        "5.1 The sales process and funnel",
        [
          "A sales funnel stages prospects from awareness to purchase: lead, marketing-qualified lead (MQL), sales-qualified lead (SQL), opportunity, proposal, negotiation, closed-won or closed-lost. Definitions must be operational — what evidence promotes a stage — or forecasting becomes fiction. Velocity metrics (time in stage) and conversion rates diagnose bottlenecks.",
          "Complex B2B sales involve multiple buyers — economic, technical, user, coach — and longer cycles. Methodologies such as SPIN (Situation, Problem, Implication, Need-payoff) structure discovery questions. Challenger Sale emphasizes teaching customers something new about their business. Method choice matters less than disciplined discovery, mutual qualification, and honest fit assessment.",
          "Pipeline hygiene prevents optimism bias: remove stale opportunities, document next steps, and separate hope from evidence. Sales managers coach behaviors — call quality, discovery depth — not only outcomes, which lag.",
        ]
      ),
      section(
        "b2b-b2c",
        "5.2 Business-to-business versus business-to-consumer selling",
        [
          "B2C often features shorter cycles, emotional triggers, brand advertising, and high transaction volume. Self-service e-commerce scales with merchandising and cart optimization. B2B features fewer deals, higher average contract value, formal procurement, security reviews, and implementation services. Relationship and trust weigh more; individual consumer whims matter less than organizational criteria.",
          "B2B contracts include statements of work, service-level agreements, limitation of liability, and renewal terms. Consumer sales face stricter advertising and refund regulations in many jurisdictions. Inside sales (remote) and field sales (on-site) hybrid models accelerated after 2020, changing travel economics and demo formats.",
          "Channel conflict arises when direct sales competes with distributors or resellers. Pricing consistency and partner enablement — training, leads, co-marketing — maintain healthy ecosystems.",
        ]
      ),
      section(
        "crm-systems",
        "5.3 CRM systems and the customer lifecycle",
        [
          "Customer relationship management (CRM) software centralizes contacts, accounts, opportunities, activities, and often marketing automation and service tickets. Salesforce, HubSpot, Microsoft Dynamics, and others differ by ecosystem and complexity. CRM value depends on adoption: if reps log calls inconsistently, forecasting and handoffs fail.",
          "Lifecycle stages extend beyond first purchase: onboarding, adoption, expansion (upsell/cross-sell), renewal, advocacy, and win-back. Customer success teams in subscription businesses monitor health scores — product usage, support sentiment, executive engagement — to prevent churn before renewal dates.",
          "Integration with product analytics, billing, and support platforms creates a single customer view. Data governance — duplicate records, field definitions — is unglamorous but essential. GDPR and state privacy laws may require deletion workflows and consent tracking.",
        ]
      ),
      section(
        "sales-ethics",
        "5.4 Ethics, compliance, and trust in selling",
        [
          "Unethical selling — misrepresentation, bait-and-switch, pressure on vulnerable buyers — invites regulatory action and brand damage. The FTC prosecutes deceptive practices; industry codes add duties for licensed professions. Truthful claims require substantiation, especially for health, financial, and environmental assertions.",
          "Conflicts of interest — accepting kickbacks, steering clients to affiliated products without disclosure — erode trust. Gifts and entertainment policies set thresholds. Anti-bribery laws such as the Foreign Corrupt Practices Act (FCPA) prohibit payments to foreign officials to obtain business.",
          "Ethical high performers qualify opportunities out when fit is poor, protecting long-term reputation. Customer trust lowers friction in renewals and references — hidden assets on the balance sheet of relationship capital.",
        ],
        {
          laws: [
            {
              name: "Foreign Corrupt Practices Act (FCPA)",
              year: "1977",
              summary:
                "Prohibits bribery of foreign officials; requires books-and-records controls for issuers.",
            },
          ],
        }
      ),
      section(
        "retention",
        "5.5 Retention, loyalty, and customer success economics",
        [
          "Acquiring a new customer often costs five to seven times more than retaining an existing one — a rule of thumb, not a law, but directionally true in many industries. Retention raises lifetime value and stabilizes forecasting. Net revenue retention above 100% in software means expansions exceed churn — a hallmark of product-market fit.",
          "Loyalty programs, proactive support, executive business reviews, and community events deepen ties. Churn analysis categorizes reasons — price, product gap, competitor, failure to launch — and feeds product roadmaps.",
          "Sales and success handoffs must be crisp: promises made during selling become implementation commitments. Breaking the relay guarantees early churn and reputational harm in reference-selling environments.",
        ]
      ),
    ],
    "Converting demand into revenue and sustaining customer relationships"
  ),

  chapter(
    "operations-supply-chain",
    6,
    "Operations management and supply chain",
    [
      section(
        "ops-purpose",
        "6.1 The purpose of operations management",
        [
          "Operations transforms inputs into outputs customers receive — manufacturing lines, restaurant kitchens, hospital wards, cloud data centers. Operations management designs and controls processes to meet quality, cost, speed, and flexibility targets. Poor operations destroy margin even when marketing excels; excellent operations enable scale.",
          "Capacity planning matches supply to demand forecasts. Too much capacity idles capital; too little forfeits sales and loyalty. Seasonality, promotions, and macro shocks complicate planning. Flexibility — overtime, temps, subcontracting, dual sourcing — trades cost for resilience.",
          "Process visibility — value stream mapping, bottlenecks, utilization — guides improvement. What gets measured gets managed, but wrong metrics (output without quality) distort behavior.",
        ]
      ),
      section(
        "quality-process",
        "6.2 Process design and quality management",
        [
          "Quality is conformance to requirements and fitness for use — per Crosby and Juran traditions. Total quality management (TQM) engages employees in continuous improvement. ISO 9001 provides a certifiable quality management system framework. Six Sigma reduces variation using statistical tools and DMAIC (Define, Measure, Analyze, Improve, Control).",
          "Defect costs multiply downstream: rework, returns, warranty, brand damage. Poka-yoke (mistake-proofing) and standard work reduce human error. Service quality adds moments of truth — each customer interaction shapes perception.",
          "Design for manufacturability and serviceability early avoids expensive retrofits. Concurrent engineering crosses functional silos.",
        ],
        {
          citations: [
            {
              source: "W. Edwards Deming, Out of the Crisis (1986); ISO 9001:2015 standard family",
            },
          ],
        }
      ),
      section(
        "inventory-logistics",
        "6.3 Inventory, logistics, and fulfillment",
        [
          "Inventory types include raw materials, work-in-process, and finished goods. Holding cost includes capital tied up, storage, insurance, obsolescence, and shrinkage. Economic order quantity models balance ordering and holding costs — simplified in textbooks, adapted in practice with uncertainty.",
          "Just-in-time (JIT) minimizes inventory by synchronizing deliveries with production — vulnerable to disruptions, as seen in pandemic-era shortages. Safety stock buffers uncertainty; service level targets guide how much. ABC analysis prioritizes control on high-value SKUs.",
          "Logistics covers transportation mode choice, warehousing, last-mile delivery, and reverse logistics for returns. Global supply chains add customs, currency, and geopolitical risk. Incoterms define buyer/seller responsibilities in international trade.",
        ]
      ),
      section(
        "lean-improvement",
        "6.4 Lean production and continuous improvement",
        [
          "Lean, derived from Toyota Production System principles, eliminates waste (muda): overproduction, waiting, transport, extra processing, inventory, motion, defects, unused talent. Flow and pull systems signal work when downstream needs it, not when upstream wants busy machines.",
          "Kaizen — small, continuous improvements — engages frontline workers. 5S (sort, set in order, shine, standardize, sustain) organizes workplaces. Visual management makes status obvious.",
          "Lean is not synonymous with understaffing or ignoring employee welfare. Respect for people underpins sustainable lean. Digital tools — IoT sensors, predictive maintenance — modernize lean without abandoning principles.",
        ]
      ),
      section(
        "supply-risk",
        "6.5 Supply chain risk and resilience",
        [
          "Concentration risk — single supplier, single region — amplifies shocks. Dual sourcing, nearshoring, and strategic stockpiles trade cost for resilience. Business continuity plans specify alternate suppliers and communication protocols.",
          "Sustainability and human rights expectations extend to tier-2 and tier-3 suppliers. Transparency laws in some jurisdictions require disclosure of forced labor risks. Reputational damage from supplier misconduct is swift.",
          "Technology — ERP systems, control towers, blockchain pilots for traceability — improves visibility but requires data discipline. Operations literacy means reading a supply chain map and asking where failure would hurt most.",
        ]
      ),
    ],
    "Designing processes, moving goods, and building resilient supply"
  ),

  chapter(
    "accounting-statements",
    7,
    "Accounting and financial statements",
    [
      section(
        "accounting-equation",
        "7.1 The accounting equation and double-entry basics",
        [
          "Financial accounting records transactions in currency terms to produce reports for external stakeholders — investors, creditors, regulators. The fundamental equation: Assets = Liabilities + Equity. Assets are resources with future economic benefit; liabilities are obligations; equity is residual claim after liabilities.",
          "Double-entry bookkeeping records every transaction with equal debits and credits, preserving the equation. Debits increase assets and expenses; credits increase liabilities, equity, and revenue — with normal balance conventions learners practice in introductory courses. The general ledger rolls up to financial statements.",
          "Accrual accounting recognizes revenue when earned and expenses when incurred, not only when cash moves. Matching principle pairs revenues with the expenses that generated them in the same period. Cash accounting, common in small tax contexts, is simpler but less informative for performance.",
        ],
        {
          citations: [
            {
              source:
                "Financial Accounting Standards Board (FASB), Conceptual Framework for Financial Reporting",
              url: "https://www.fasb.org/",
            },
          ],
        }
      ),
      section(
        "income-statement",
        "7.2 The income statement: performance over a period",
        [
          "The income statement (profit and loss) shows revenues, expenses, and profit over a quarter or year. Gross profit equals revenue minus cost of goods sold (COGS). Operating income subtracts operating expenses — sales, general & administrative, research and development. Net income includes interest and taxes after operating results.",
          "Non-GAAP adjustments — adjusted EBITDA, pro forma figures — appear in earnings releases but must not mislead per SEC Regulation G. Learners should reconcile non-GAAP to GAAP numbers and ask what is excluded and why.",
          "Margin analysis — gross, operating, net — compares efficiency across time and peers. Rising revenue with falling margins signals cost pressure or competitive discounting.",
        ]
      ),
      section(
        "balance-sheet",
        "7.3 The balance sheet: position at a point in time",
        [
          "The balance sheet snapshots assets, liabilities, and equity on a date. Current assets (cash, receivables, inventory) expect conversion within a year; noncurrent assets include property, plant, equipment, intangibles, and goodwill from acquisitions. Current liabilities include payables and short-term debt; long-term liabilities include bonds and lease obligations.",
          "Working capital (current assets minus current liabilities) indicates short-term liquidity health. Negative working capital can work in cash-rich retail models that collect before paying suppliers; persistent deficits elsewhere warn of stress.",
          "Equity sections show contributed capital, retained earnings, and sometimes other comprehensive income. Treasury stock reflects repurchased shares. Book value per share is equity divided by shares outstanding — distinct from market price driven by growth expectations.",
        ]
      ),
      section(
        "cash-flow",
        "7.4 The statement of cash flows",
        [
          "Profit does not equal cash. The cash flow statement reconciles net income to cash from operating, investing, and financing activities. Operating cash flow adjusts for non-cash charges (depreciation) and working capital changes — rising receivables consume cash even if revenue grew.",
          "Investing outflows fund capital expenditures and acquisitions; inflows come from asset sales. Financing includes debt issuance, repayment, dividends, and equity raises. Free cash flow — operating cash minus capex — funds dividends, buybacks, and debt reduction.",
          "Healthy companies can show negative net income with positive operating cash if depreciation is large, or positive net income with weak cash if inventory and receivables balloon. Always read all three core statements together.",
        ]
      ),
      section(
        "ratios",
        "7.5 Financial ratios for managerial literacy",
        [
          "Liquidity ratios — current ratio, quick ratio — assess short-term obligation coverage. Profitability ratios — return on assets, return on equity — measure efficiency of resource use. Leverage ratios — debt to equity, interest coverage — gauge solvency risk. Activity ratios — inventory turnover, days sales outstanding — operational cadence.",
          "Ratio benchmarks vary by industry. Retail runs different capital intensity than software. Trend analysis within a company often beats cross-industry comparisons without context.",
          "Managerial accounting — budgets, variance analysis, cost-volume-profit — supports internal decisions and complements external financial reporting. Full mastery requires practice problems; this chapter equips you to read a 10-K summary without intimidation.",
        ]
      ),
    ],
    "How accountants record economic reality and report performance"
  ),

  chapter(
    "hr-org-behavior",
    8,
    "Human resources and organizational behavior",
    [
      section(
        "talent",
        "8.1 Hiring, development, and talent management",
        [
          "Human resources (HR) spans workforce planning, recruiting, onboarding, compensation, benefits, performance management, learning, and separation. Strategic HR aligns headcount and capabilities with business strategy — hiring ahead of product launches, upskilling for digital transformation.",
          "Structured interviews and work samples predict job performance better than unstructured chats alone. Diversity of candidate slates reduces homogeneous hiring. Onboarding accelerates time-to-productivity and reduces early turnover.",
          "Development includes training, mentoring, and career paths. High-potential programs invest in future leaders but must avoid creating a two-tier culture if neglected employees disengage.",
        ]
      ),
      section(
        "motivation",
        "8.2 Motivation: needs, expectancy, and equity",
        [
          "Maslow's hierarchy — physiological, safety, belonging, esteem, self-actualization — reminds managers that unmet basics block higher engagement, though the strict ladder is debated. Herzberg's two-factor theory separates hygiene factors (pay, conditions) that prevent dissatisfaction from motivators (achievement, recognition) that drive satisfaction.",
          "Expectancy theory posits effort follows belief that effort yields performance, performance yields rewards, and rewards are valued. Vroom's model implies broken links — unclear standards, biased evaluation, unattractive rewards — collapse motivation. Equity theory highlights social comparison: perceived unfair pay relative to peers breeds resentment.",
          "Intrinsic motivation — autonomy, mastery, purpose — matters especially in knowledge work. Over-reliance on extrinsic carrots for complex creative tasks can backfire. Fair pay is a floor, not a ceiling, for engagement.",
        ]
      ),
      section(
        "teams-culture",
        "8.3 Teams, culture, and leadership",
        [
          "Organizational culture is shared assumptions, values, and artifacts — stories, rituals, office layout — that shape behavior. Strong cultures align with strategy; toxic cultures tolerate harassment or cutting corners. Leaders model norms more powerfully than posters.",
          "Teams pass through forming, storming, norming, performing stages (Tuckman). Psychological safety — ability to speak up without punishment — correlates with learning and innovation per Edmondson's research. Diverse teams outperform homogeneous ones on complex problems when inclusion prevents friction from becoming deadlock.",
          "Leadership styles vary: transformational (inspire change), transactional (clarify rewards), servant (support employees). Context matters — crisis may need directive leadership; research labs need autonomy. No single style wins everywhere.",
        ],
        {
          citations: [
            {
              source:
                "Amy C. Edmondson, The Fearless Organization (2018); Bruce W. Tuckman, developmental sequence in small groups (1965)",
            },
          ],
        }
      ),
      section(
        "employment-law",
        "8.4 Employment law overview (United States context)",
        [
          "U.S. employment is generally at-will unless contracted otherwise — either party may end employment with limited exceptions. Anti-discrimination laws (Title VII, ADA, ADEA, state analogs) prohibit bias on protected characteristics. Harassment creates hostile work environments employers must remedy. Wage and hour law (Fair Labor Standards Act) governs minimum wage, overtime eligibility, and child labor.",
          "Family and Medical Leave Act provides unpaid protected leave for qualifying reasons at covered employers. National Labor Relations Act protects concerted activity and union organizing. OSHA mandates safe workplaces. States add paid leave, pay transparency, and non-compete restrictions evolving rapidly.",
          "This survey is not legal advice. HR partners and counsel interpret specifics. Learners should know enough to escalate concerns — suspected discrimination, safety hazards, wage errors — through proper channels.",
        ],
        {
          laws: [
            {
              name: "Fair Labor Standards Act (FLSA)",
              year: "1938",
              summary: "Federal minimum wage, overtime, and recordkeeping for covered workers.",
            },
            {
              name: "Title VII, Civil Rights Act",
              year: "1964",
              summary: "Prohibits employment discrimination based on protected classes.",
            },
          ],
        }
      ),
      section(
        "dei",
        "8.5 Diversity, equity, inclusion, and belonging",
        [
          "Diversity is representation across dimensions — race, gender, age, disability, veteran status, cognitive style. Inclusion ensures diverse voices influence decisions. Equity addresses structural barriers — biased systems, not only individual bias. Belonging is the felt experience of acceptance.",
          "Business case evidence links diversity to innovation and market understanding when inclusion is real, not performative. Quotas alone without culture change breed resentment. Measurement includes representation, promotion rates, pay equity studies, and climate surveys.",
          "Allyship and accountable leadership reduce retaliation against those who report issues. DEI backlash appears when initiatives seem symbolic; tying DEI to customer outcomes, talent pipelines, and risk reduction sustains seriousness.",
        ]
      ),
    ],
    "People, motivation, culture, and lawful workplaces"
  ),

  chapter(
    "entrepreneurship",
    9,
    "Entrepreneurship and new venture creation",
    [
      section(
        "opportunity",
        "9.1 Opportunity recognition and ideation",
        [
          "Entrepreneurship is the pursuit of opportunity beyond resources currently controlled — a classic definition from Howard Stevenson. Opportunities arise from technological change, regulation, demographic shifts, inefficiencies, and customer frustration. Effectuation logic, conversely, starts with means at hand (who am I, what do I know, whom do I know) and iterates rather than waiting for a perfect plan.",
          "Ideation techniques include customer discovery interviews, journaling frustrations, importing models across geographies, and combinatorial innovation. Not every idea warrants a company; screening asks market size, urgency, willingness to pay, and founder fit.",
          "Corporate entrepreneurship (intrapreneurship) launches ventures inside existing firms with different resource and political dynamics — internal capital processes, risk of cannibalization, reward systems that punish failure.",
        ]
      ),
      section(
        "validation",
        "9.2 Business plans, models, and validation",
        [
          "Traditional business plans — executive summary, market analysis, operations, financial projections — still help when raising bank debt or SBA loans. Venture investors often prefer concise decks and evidence of traction over lengthy documents. Business model canvas maps nine building blocks on one page for hypothesis clarity.",
          "Validation beats stealth perfection. Minimum viable products (MVPs) test core assumptions with the smallest experiment — landing page demand tests, concierge services before automation, pilot contracts with friendly customers. Kill ideas quickly when assumptions fail.",
          "Financial projections should link assumptions — conversion rate, churn, average revenue per user — to outcomes. Sensitivity tables show which assumptions move valuation most. Sanity-check against comparable companies.",
        ],
        {
          citations: [
            {
              source:
                "Alexander Osterwalder & Yves Pigneur, Business Model Generation (2010); Eric Ries, The Lean Startup (2011)",
            },
          ],
        }
      ),
      section(
        "funding",
        "9.3 Funding sources and capital structure for startups",
        [
          "Bootstrapping funds operations from revenue and founder savings, preserving control but limiting speed. Friends and family rounds carry relationship risk and should use clear documentation. Angels invest personal capital early; accelerators provide cohort programs, mentorship, and small checks.",
          "Venture capital funds high-growth potential startups in exchange for preferred equity and governance rights — board seats, protective provisions. Venture debt supplements equity for SaaS with recurring revenue. Banks rarely lend pre-revenue without personal guarantees.",
          "Convertible notes and SAFEs (simple agreements for future equity) delay valuation until priced rounds. Cap tables track ownership; dilution math is essential before accepting money. Term sheets define economics and control — liquidation preferences, anti-dilution, pro rata rights.",
        ]
      ),
      section(
        "lean-startup",
        "9.4 Lean startup: build-measure-learn",
        [
          "The build-measure-learn loop turns ideas into products, measures customer response, and learns whether to pivot or persevere. Innovation accounting uses actionable metrics — cohort retention, not vanity downloads. Pivot types include customer segment, problem, solution, channel, and revenue model.",
          "Continuous deployment and A/B testing accelerate learning in software. Hardware and regulated products face longer cycles but can still prototype subsystems. Waste is building what nobody wants.",
          "Founder-market fit — domain insight, network, passion — predicts persistence through setbacks. Teams need complementary skills: technical, commercial, operational. Solo founders face bandwidth limits.",
        ]
      ),
      section(
        "scaling-failure",
        "9.5 Scaling, failure, and entrepreneurial ethics",
        [
          "Scaling requires processes — hiring managers, financial controls, customer support — that early chaos deferred. Premature scaling — hiring ahead of product-market fit — is a leading cause of startup death. Unit economics must work at small scale before national advertising blitzes.",
          "Failure is common; responsible failure includes paying vendors, communicating with employees, learning post-mortems. Bankruptcy chapters (7 liquidation, 11 reorganization) have legal processes entrepreneurs should understand before signing personal guarantees.",
          "Ethics encompass honest investor updates, non-misleading growth metrics, and product safety. Fraud — Theranos-style deception — destroys careers and trust in innovation ecosystems. Build reputations that survive one bad quarter.",
        ]
      ),
    ],
    "From opportunity to funded experiments and scalable companies"
  ),

  chapter(
    "ethics-governance-growth",
    10,
    "Ethics, governance, and sustainable growth",
    [
      section(
        "ethics-frameworks",
        "10.1 Business ethics: utilitarian, deontological, and virtue approaches",
        [
          "Utilitarian ethics weighs actions by aggregate welfare — greatest good for the greatest number — useful for policy trade-offs but slippery when quantifying harm. Deontological ethics judges actions by duties and rules — tell the truth, keep promises — regardless of outcomes in edge cases. Virtue ethics asks what a person of integrity would do, cultivating habits of honesty and courage.",
          "Corporate codes of conduct operationalize values: anti-harassment, gifts, insider trading, data privacy. Training plus enforcement — real discipline for violations — gives codes teeth. Whistleblower protections encourage reporting; retaliation undermines entire programs.",
          "Conflicts between stakeholder interests require transparent deliberation and documentation. Short-term fraud to hit earnings is never justified by utilitarian math when trust destruction is included.",
        ]
      ),
      section(
        "corporate-governance",
        "10.2 Corporate governance and accountability",
        [
          "Governance ensures agents (management) act in principals' (owners') interests with safeguards for other stakeholders. Independent boards, audit quality, internal control over financial reporting (SOX Section 404 for accelerated filers), and external auditor rotation reduce fraud risk. Proxy access and majority voting reforms vary.",
          "Executive compensation ties to performance metrics — revenue, EBITDA, total shareholder return — with clawbacks for restatements. Say-on-pay votes provide shareholder feedback. Pay ratio disclosures highlight inequality debates.",
          "Private company governance relies on investor rights in contracts. Family businesses add succession and nepotism challenges. Good governance is insurance against catastrophic failure, not bureaucracy for its own sake.",
        ],
        {
          laws: [
            {
              name: "Sarbanes-Oxley Act",
              year: "2002",
              summary:
                "Strengthened public company financial controls, CEO/CFO certifications, and auditor independence after Enron-era scandals.",
            },
          ],
        }
      ),
      section(
        "esg",
        "10.3 ESG, stakeholder capitalism, and long-term orientation",
        [
          "Environmental, social, and governance (ESG) investing evaluates firms on carbon footprint, labor practices, board diversity, and transparency alongside financials. Critics argue ESG scores are inconsistent; proponents argue material ESG factors affect returns — climate risk, labor unrest, regulatory fines.",
          "Stakeholder capitalism — Business Roundtable 2019 statement — reaffirmed duties beyond shareholders, though implementation varies. Carbon accounting, science-based targets, and circular economy design move from reporting to operations.",
          "Greenwashing — marketing environmental benefits without substance — invites FTC scrutiny and consumer backlash. Credible claims need data, third-party assurance where appropriate, and scope clarity (Scope 1, 2, 3 emissions).",
        ],
        {
          citations: [
            {
              source: "FTC Green Guides (environmental marketing claims)",
              url: "https://www.ftc.gov/news-events/topics/truth-advertising/green-guides",
            },
          ],
        }
      ),
      section(
        "growth-strategies",
        "10.4 Growth strategies: organic and inorganic",
        [
          "Organic growth expands through existing operations — new products, geographies, channels — preserving culture but requiring time. Market penetration increases share in current segments; product development creates adjacent offerings; diversification is riskiest when unrelated.",
          "Inorganic growth — mergers and acquisitions — accelerates scale, talent, and technology access but integration risk is high. Synergy estimates often disappoint. Due diligence covers financial, legal, IP, culture, and cybersecurity. Antitrust regulators may block combinations that harm competition.",
          "Strategic alliances and joint ventures share risk without full merger. Licensing exports IP for fees. Franchising scales brand with franchisee capital subject to quality control.",
        ]
      ),
      section(
        "sustainability",
        "10.5 Sustainable growth and responsible leadership",
        [
          "Sustainable growth balances revenue expansion with financial stability, talent development, and societal impact. Overleveraging for acquisitions or buybacks increases bankruptcy risk in downturns. Talent burnout from perpetual 'hustle' cultures reduces innovation over years.",
          "Long-term leaders invest in R&D, employee skills, supplier relationships, and community license to operate. Quarterly earnings pressure remains real; literate managers communicate why long-term investments matter and deliver milestones that build investor patience.",
          "Your career will intersect these themes — reporting a concern, choosing a supplier, pricing fairly, or leading a team. Business foundations end where judgment begins: with you, equipped to ask better questions and contribute to organizations that create value others can trust.",
        ]
      ),
    ],
    "Leading responsibly while growing enterprise value over time"
  ),
];
