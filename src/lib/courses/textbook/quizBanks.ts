import type { QuizQuestion } from "@/lib/quizTypes";

function q(
  id: string,
  question: string,
  options: [string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3,
  explanation: string
): QuizQuestion {
  return { id, question, options, correctIndex, explanation };
}

const AI_QUIZ: QuizQuestion[] = [
  q("ai-ch01-01", "A practical definition of machine intelligence in this course emphasizes:", ["Guaranteed human consciousness", "Goal-directed competence via representation, inference, and learning", "Only symbolic logic without data", "Infinite memory on all devices"], 1, "Intelligence is operationalized through task performance and adaptive behavior, not only mimicry."),
  q("ai-ch02-01", "The 'AI winter' periods in history were driven largely by:", ["Unlimited GPU supply", "Hype outpacing results and reduced funding", "Elimination of all neural networks", "Government bans on software"], 1, "Repeated cycles of enthusiasm and disappointment shaped research priorities."),
  q("ai-ch03-01", "Supervised learning requires:", ["No labels at all", "Labeled examples mapping inputs to targets", "Only random actions in an environment", "Manual theorem proving only"], 1, "Labels let the model learn input-output mappings from data."),
  q("ai-ch04-01", "Backpropagation in neural networks is used to:", ["Delete training data", "Compute gradients to update weights", "Replace all need for data", "Guarantee zero error forever"], 1, "Gradients guide iterative improvement of network parameters."),
  q("ai-ch05-01", "Large language models are primarily trained to:", ["Control industrial robots directly", "Predict likely next tokens in sequences", "Replace all human laws", "Operate without any compute cost"], 1, "Next-token prediction on large corpora enables broad language behavior."),
  q("ai-ch06-01", "Few-shot prompting typically means:", ["Training billions of new weights per query", "Including exemplar input-output pairs in the prompt", "Removing all instructions", "Disabling the context window"], 1, "Examples in context steer format and reasoning style."),
  q("ai-ch07-01", "Convolutional neural networks are especially associated with:", ["Spreadsheet macros", "Image and spatial pattern recognition", "Only audio compression", "Paper filing systems"], 1, "Convolutions exploit local structure in pixels and grids."),
  q("ai-ch08-01", "Algorithmic bias in AI often originates from:", ["Perfectly balanced historical data only", "Skewed training data and proxy variables", "Too much transparency", "Mandatory fairness by default"], 1, "Data and design choices embed societal patterns models can amplify."),
  q("ai-ch09-01", "Human-in-the-loop systems are valuable because they:", ["Eliminate all need for oversight", "Combine model speed with human judgment on edge cases", "Guarantee models never err", "Remove accountability"], 1, "Humans catch errors and handle exceptions in high-stakes settings."),
  q("ai-ch10-01", "A key theme for responsible AI futures is:", ["Ignoring governance entirely", "Balancing capability with safety, literacy, and policy", "Banning all automation", "Treating models as infallible oracles"], 1, "Society must manage benefits and risks deliberately."),
];

const CYBER_QUIZ: QuizQuestion[] = [
  q("cyber-ch01-01", "The CIA triad stands for:", ["Credit, Insurance, Assets", "Confidentiality, Integrity, Availability", "Central, Internal, Admin", "Compliance, Identity, Audit only"], 1, "These three properties frame most security goals."),
  q("cyber-ch02-01", "A nation-state threat actor is best described as:", ["Always an insider employee", "Government-sponsored espionage or disruption", "Only a script kiddie", "A type of firewall"], 1, "State actors pursue strategic intelligence and influence."),
  q("cyber-ch03-01", "Multi-factor authentication improves security by:", ["Using one shared password for all users", "Requiring multiple independent proof factors", "Disabling logging", "Publishing credentials openly"], 1, "Separate factors reduce single-point credential failure."),
  q("cyber-ch04-01", "A firewall primarily controls:", ["Employee salaries", "Network traffic allowed or denied", "Monitor brightness", "Office seating charts"], 1, "Firewalls enforce policy on packets and flows."),
  q("cyber-ch05-01", "Endpoint hardening includes:", ["Leaving all ports open", "Patching, least privilege, and encryption", "Disabling backups", "Sharing admin passwords"], 1, "Endpoints are frequent entry points for attackers."),
  q("cyber-ch06-01", "Hash functions in security are used to:", ["Encrypt with reversible keys only", "Detect tampering and verify integrity", "Speed up phishing email", "Replace MFA"], 1, "Hashes fingerprint data; small changes alter output dramatically."),
  q("cyber-ch07-01", "Phishing attacks typically aim to:", ["Improve hardware cooling", "Trick users into revealing credentials or actions", "Patch servers automatically", "Increase encryption strength"], 1, "Social engineering exploits trust and urgency."),
  q("cyber-ch08-01", "SQL injection is prevented chiefly by:", ["Concatenating user input into queries", "Parameterized queries separating code and data", "Disabling HTTPS", "Using only GET requests"], 1, "Parameterization stops untrusted input from altering query logic."),
  q("cyber-ch09-01", "The first phase of incident response is often:", ["Public marketing", "Preparation and planning", "Immediate termination of all staff", "Deleting all logs"], 1, "Prepared teams contain damage faster."),
  q("cyber-ch10-01", "GDPR is primarily concerned with:", ["GPU clock speeds", "EU personal data protection rights", "Car emissions", "Only U.S. HIPAA entities"], 1, "GDPR governs processing of EU residents' personal data."),
];

const IT_QUIZ: QuizQuestion[] = [
  q("it-ch01-01", "The stored-program concept means:", ["Programs are hard-wired only once", "Instructions and data live in addressable memory", "Computers cannot use disks", "Networks are unnecessary"], 1, "Von Neumann architecture enables flexible software."),
  q("it-ch02-01", "RAM differs from storage because RAM is:", ["Non-volatile forever", "Volatile and fast for active work", "Only optical", "Always slower than tape"], 1, "RAM holds working data; storage persists when powered off."),
  q("it-ch03-01", "An operating system kernel manages:", ["Only printer ink levels", "Processes, memory, and hardware access", "Social media posts exclusively", "Cable TV channels"], 1, "The kernel mediates resources and isolation."),
  q("it-ch04-01", "NTFS and APFS are examples of:", ["Network cables", "File systems", "CPU brands", "Email protocols"], 1, "File systems organize how data is stored on media."),
  q("it-ch05-01", "DNS translates:", ["IP addresses to human-readable domain names (reverse) and names to IPs", "Only MAC addresses to colors", "Passwords to hashes only", "Files to paper"], 1, "DNS resolves names so users reach services."),
  q("it-ch06-01", "Cloud IaaS provides:", ["Only packaged SaaS apps with no infrastructure choice", "Virtualized compute, storage, and networking", "Physical-only servers you must house", "No internet access"], 1, "IaaS rents foundational infrastructure."),
  q("it-ch07-01", "Structured troubleshooting starts with:", ["Random part replacement", "Reproducing and defining the problem", "Ignoring user reports", "Deleting the OS first"], 1, "Clear problem statements guide efficient fixes."),
  q("it-ch08-01", "Least privilege for IT accounts means:", ["Everyone is domain admin", "Users get minimum access needed for their role", "Passwords are shared on whiteboards", "MFA is disabled"], 1, "Limiting rights reduces blast radius of compromise."),
  q("it-ch09-01", "Version control systems like Git help teams:", ["Erase all history", "Track changes and collaborate on code", "Block all networking", "Replace backups entirely"], 1, "VCS records who changed what and when."),
  q("it-ch10-01", "CompTIA A+ and Network+ are examples of:", ["Malware types", "Industry entry certifications", "Cable categories only", "Programming languages"], 1, "Certs signal baseline IT knowledge to employers."),
];

const AUTO_QUIZ: QuizQuestion[] = [
  q("auto-ch01-01", "A unibody vehicle structure:", ["Uses separate frame and body always", "Integrates body and frame for stiffness and weight", "Eliminates all safety systems", "Runs only on steam"], 1, "Unibody designs dominate modern passenger cars."),
  q("auto-ch02-01", "An internal combustion engine converts:", ["Electricity only to light", "Fuel chemical energy to mechanical work", "Wind directly to torque without pistons", "Water to gasoline"], 1, "Controlled burns drive pistons or rotors."),
  q("auto-ch03-01", "ABS helps drivers by:", ["Locking wheels fully under hard brake", "Preventing wheel lockup to maintain steerability", "Increasing stopping distance always", "Disabling brakes"], 1, "ABS modulates brake pressure rapidly."),
  q("auto-ch04-01", "The alternator's primary role is:", ["Cooling the cabin only", "Charging the battery while the engine runs", "Steering the vehicle", "Inflating tires"], 1, "Alternators supply electrical power during operation."),
  q("auto-ch05-01", "Oil change intervals depend on:", ["Only paint color", "Manufacturer specs, driving conditions, and oil type", "Tire brand alone", "Radio station"], 1, "Severe service and synthetic oils affect maintenance schedules."),
  q("auto-ch06-01", "Crumple zones in vehicles:", ["Make the cabin stiffer to hurt occupants", "Absorb crash energy away from occupants", "Disable seat belts", "Increase top speed only"], 1, "Controlled deformation reduces forces on people."),
  q("auto-ch07-01", "APR on an auto loan represents:", ["Annual paint rating", "Annual cost of borrowing expressed as a rate", "Air pressure in rear tires", "Anti-phishing rule"], 1, "APR helps compare finance offers."),
  q("auto-ch08-01", "Liability auto insurance covers:", ["Only your own car repairs always", "Harm you cause to others when at fault", "Engine tuning", "Fuel discounts"], 1, "Liability pays third-party bodily injury and property damage."),
  q("auto-ch09-01", "A BEV differs from a hybrid because a BEV:", ["Always has two fuel tanks for gasoline", "Runs on battery electric traction without tailpipe emissions", "Cannot recharge", "Requires engine oil changes for propulsion"], 1, "BEVs use stored electricity for motive power."),
  q("auto-ch10-01", "SAE Level 2 driver assistance requires:", ["No driver attention", "Continuous driver supervision of the environment", "No sensors", "Fully autonomous sleep mode"], 1, "Level 2 assists but does not replace the driver."),
];

const FIN_QUIZ: QuizQuestion[] = [
  q("fin-ch01-01", "Inflation measures:", ["Only stock prices", "General rise in prices reducing purchasing power", "Bank branch locations", "Credit card color"], 1, "Inflation erodes what each dollar buys over time."),
  q("fin-ch02-01", "A zero-based budget assigns:", ["All income to categories including savings", "Only leftover cash randomly", "No tracking of expenses", "Only debt payments"], 0, "Every dollar gets a job before the month begins."),
  q("fin-ch03-01", "FDIC insurance in the U.S. generally protects:", ["Stock market losses", "Bank deposits up to stated limits", "Cryptocurrency on all exchanges", "Lottery tickets"], 1, "FDIC backs qualifying deposits if a bank fails."),
  q("fin-ch04-01", "A higher credit score usually indicates:", ["Higher default risk", "Lower perceived lending risk", "No credit history", "Unlimited borrowing without cost"], 1, "Scores summarize repayment behavior for lenders."),
  q("fin-ch05-01", "The debt snowball method prioritizes:", ["Highest interest rate first always", "Smallest balances first for psychological wins", "Never paying debt", "Only mortgage debt"], 1, "Snowball pays smallest debts first to build momentum."),
  q("fin-ch06-01", "An emergency fund should typically cover:", ["Only entertainment", "Several months of essential expenses", "Vacation only", "Luxury car payments exclusively"], 1, "Liquidity buffers income shocks and surprises."),
  q("fin-ch07-01", "Diversification in investing means:", ["All money in one stock", "Spreading risk across assets and sectors", "Timing the market perfectly", "Avoiding all bonds"], 1, "Diversification reduces reliance on any single outcome."),
  q("fin-ch08-01", "A deductible in insurance is:", ["The insurer's profit margin", "Amount you pay before coverage applies", "Your credit score", "Annual salary"], 1, "Deductibles align incentives and filter small claims."),
  q("fin-ch09-01", "Marginal tax brackets mean:", ["All income taxed at the top rate", "Additional dollars taxed at higher rates only within bands", "No taxes on wages", "Flat 90% on every dollar"], 1, "Brackets apply progressively to income slices."),
  q("fin-ch10-01", "Romance scams often request:", ["Gift cards or wire transfers urgently", "Free financial education only", "Public audit reports", "Long written contracts first"], 0, "Scammers exploit urgency and untraceable payments."),
];

const COMM_QUIZ: QuizQuestion[] = [
  q("comm-ch01-01", "In the Shannon-Weaver model, 'noise' refers to:", ["Only loud music", "Anything that interferes with message reception", "The sender's job title", "Profit margins"], 1, "Noise distorts encoding, channel, or decoding."),
  q("comm-ch02-01", "Active listening includes:", ["Planning your reply while they talk", "Paraphrasing and confirming understanding", "Interrupting to win", "Checking phone constantly"], 1, "Reflection shows comprehension and builds trust."),
  q("comm-ch03-01", "Nonverbal communication can:", ["Contradict or reinforce spoken words", "Never affect meaning", "Replace all legal contracts alone", "Only occur in email"], 0, "Body language and tone carry significant meaning."),
  q("comm-ch04-01", "Professional email should usually:", ["Use clear subject lines and concise structure", "Avoid all greetings to seem busy", "Send attachments without context", "USE ALL CAPS FOR POLITENESS"], 0, "Clarity and respect improve workplace email."),
  q("comm-ch05-01", "Ethos in rhetoric is credibility based on:", ["Only loud volume", "Character, expertise, and trustworthiness", "Random statistics without source", "Fear alone"], 1, "Ethos persuades through perceived authority and integrity."),
  q("comm-ch06-01", "Presentation slides should generally:", ["Duplicate every spoken word verbatim", "Support key points visually without clutter", "Use ten fonts per slide", "Avoid any structure"], 1, "Slides are aids, not teleprompters."),
  q("comm-ch07-01", "A meeting facilitator's role is to:", ["Dominate all speaking time", "Guide agenda, participation, and decisions", "Skip documenting outcomes", "Ignore remote attendees"], 1, "Facilitation keeps meetings purposeful and inclusive."),
  q("comm-ch08-01", "Interest-based negotiation focuses on:", ["Winning at all costs", "Underlying needs behind positions", "Public insults", "Permanent silence"], 1, "Interests enable creative, durable agreements."),
  q("comm-ch09-01", "High-context cultures tend to:", ["Rely more on shared background and implicit cues", "Require zero relationship building", "Ban all nonverbal signals", "Use only bullet lists"], 0, "Context carries meaning beyond explicit words."),
  q("comm-ch10-01", "Digital professionalism includes:", ["Thoughtful tone, timing, and channel choice", "Reply-all rage on every thread", "Sharing confidential data in public chats", "Ignoring accessibility"], 0, "Online norms affect reputation and safety."),
];

const BIZ_QUIZ: QuizQuestion[] = [
  q("biz-ch01-01", "Value creation in business means:", ["Destroying customer trust", "Delivering benefits customers will pay for", "Avoiding all costs", "Ignoring stakeholders"], 1, "Sustainable firms solve problems worth paying for."),
  q("biz-ch02-01", "An LLC typically offers:", ["Unlimited personal liability always", "Limited liability with flexible taxation options", "No legal existence", "Mandatory public stock listing"], 1, "LLCs separate personal assets from business debts in many cases."),
  q("biz-ch03-01", "Porter's five forces analyze:", ["Only employee birthdays", "Industry competitive pressure", "Monitor resolution", "Coffee quality only"], 1, "Five forces shape profitability of an industry."),
  q("biz-ch04-01", "Market segmentation divides customers by:", ["Random lottery only", "Shared needs, behaviors, or traits", "CEO preference alone", "Office floor number"], 1, "Segments enable targeted offers and messaging."),
  q("biz-ch05-01", "CRM systems primarily help:", ["Replace all human contact", "Track customer interactions and pipeline", "Calculate payroll only", "Design buildings"], 1, "CRM organizes relationships and sales data."),
  q("biz-ch06-01", "Inventory turnover measures:", ["How fast stock sells and replenishes", "CEO age", "Office rent", "Logo colors"], 0, "Higher turnover often indicates efficient operations."),
  q("biz-ch07-01", "The accounting equation is:", ["Assets = Liabilities + Equity", "Revenue = Expenses only", "Cash = Debt", "Profit = Marketing"], 0, "This identity must always balance."),
  q("biz-ch08-01", "Organizational culture affects:", ["Only break room paint", "How people behave and decisions get made", "Nothing measurable", "Only IT tickets"], 1, "Culture shapes norms, retention, and performance."),
  q("biz-ch09-01", "A lean startup emphasizes:", ["Years of secret planning before any customer contact", "Build-measure-learn with validated learning", "Infinite funding without tests", "No prototypes"], 1, "Iteration reduces waste on untested assumptions."),
  q("biz-ch10-01", "Corporate governance addresses:", ["Only logo design", "Oversight, accountability, and stakeholder interests", "Snack selection", "Parking assignments"], 1, "Governance aligns management with owners and society."),
];

const TECH_QUIZ: QuizQuestion[] = [
  q("tech-ch01-01", "A smartphone is primarily a:", ["Single-purpose calculator only", "General-purpose mobile computer", "Non-programmable radio", "Paper notebook"], 1, "Smartphones run apps and connect to networks."),
  q("tech-ch02-01", "An operating system GUI provides:", ["Only command-line access", "Visual windows, icons, and pointers", "No user interaction", "Hardware manufacturing"], 1, "GUIs make devices approachable for most users."),
  q("tech-ch03-01", "Software updates often include:", ["Security patches and bug fixes", "Guaranteed slower devices always", "Deletion of all files", "Removal of the screen"], 0, "Updates close vulnerabilities and improve stability."),
  q("tech-ch04-01", "HTTPS adds:", ["Encryption and server authentication on the web", "Free unlimited storage", "Automatic grammar checks only", "Physical cable installation"], 0, "TLS protects data in transit from many attacks."),
  q("tech-ch05-01", "Phishing emails often use:", ["Urgent language and deceptive links", "Signed contracts only", "No call to action", "Verified government seals always real"], 0, "Urgency and mimicry trick users into acting."),
  q("tech-ch06-01", "Cloud storage sync allows:", ["Files accessible across signed-in devices", "Permanent offline-only use only", "No backups ever", "Sharing passwords publicly"], 0, "Sync keeps copies consistent when online."),
  q("tech-ch07-01", "Two-factor authentication uses:", ["Two different proof types", "The same password twice", "No second step", "Public posting of codes"], 0, "Separate factors reduce account takeover risk."),
  q("tech-ch08-01", "Screen readers help users who:", ["Have visual impairments access digital content", "Only play games", "Never use keyboards", "Disable all audio"], 0, "Assistive tech supports accessibility."),
  q("tech-ch09-01", "Restarting a device can fix issues by:", ["Clearing temporary glitches and reloading software", "Deleting all accounts permanently", "Increasing malware", "Removing the battery legally required always"], 0, "Reboots are a basic troubleshooting step."),
  q("tech-ch10-01", "Digital citizenship includes:", ["Responsible, ethical, and safe online behavior", "Sharing others' passwords", "Believing every viral post", "Ignoring privacy settings"], 0, "Citizenship covers rights, responsibilities, and literacy online."),
];

export const TEXTBOOK_QUIZ_BANKS: Record<string, QuizQuestion[]> = {
  "ai-fundamentals": AI_QUIZ,
  "cybersecurity-basics": CYBER_QUIZ,
  "it-fundamentals": IT_QUIZ,
  "automotive-basics": AUTO_QUIZ,
  "financial-literacy": FIN_QUIZ,
  "communication-skills": COMM_QUIZ,
  "business-foundations": BIZ_QUIZ,
  "technology-for-beginners": TECH_QUIZ,
};
