export type {
  TextbookLaw,
  TextbookCitation,
  TextbookSection,
  TextbookChapter,
  TextbookIntro,
} from "@/lib/courses/textbook/types";
import type { TextbookChapter } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const COMM_TEXTBOOK_INTRO = {
  title: "Communication Skills",
  subtitle:
    "ForgEd deep-dive — theory, listening, rhetoric, collaboration, conflict, and professional presence",
  paragraphs: [
    "Communication is how organizations convert private knowledge into coordinated action. Every job interview, patient handoff, sales call, classroom discussion, and board meeting depends on someone encoding meaning, transmitting it through a channel, and decoding it without unacceptable loss. Skill is not charisma alone—it is disciplined attention to audience, structure, evidence, and feedback.",
    "This textbook treats communication as an academic and professional discipline: you will study models from Shannon and Weaver to contemporary framing research, practice listening behaviors that reduce misunderstanding, analyze verbal and nonverbal leakage, write emails that respect cognitive load, construct arguments with ethical persuasion, facilitate meetings that end with decisions, navigate conflict without collateral damage, and adapt messages across cultures and digital media.",
    "Assignments in ForgEd courses assume you will rehearse, record, and revise—not merely read. The content is general education for students, career changers, and working professionals. It does not replace organizational policy, clinical communication training, or legal advice about harassment and discrimination. Laws and platform norms evolve; pair these chapters with your employer's code of conduct and local regulations.",
  ],
};

export const COMM_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "communication-theory",
    1,
    "Communication theory and models",
    [
      section(
        "process-model",
        "1.1 Communication as a process, not a trait",
        [
          "Popular culture treats communication as a personality gift—'natural communicator' versus shy introvert. Research instead defines it as learned behaviors in a system: senders, messages, channels, receivers, feedback, and noise. Competence grows through deliberate practice, preparation, and after-action review, much like athletic skill.",
          "Linear models (Shannon–Weaver) highlight encoding, transmission, and decoding—useful for engineering metaphors and diagnosing 'static.' Transactional models emphasize simultaneous sending and receiving: you are always a listener while speaking, interpreting facial feedback and adjusting mid-utterance.",
        ],
        {
          bulletPoints: [
            "Encoding — translating thought into language, gesture, or media",
            "Channel — face-to-face, video, text, print; each has bandwidth limits",
            "Noise — semantic, psychological, environmental interference",
            "Feedback — verbal and nonverbal signals that confirm or confuse understanding",
          ],
        }
      ),
      section(
        "contexts",
        "1.2 Interpersonal, group, organizational, and public contexts",
        [
          "Dyadic conversation permits rapid clarification loops. Small groups add roles—leader, devil's advocate, quiet expert—and social loafing risk. Organizations layer formal hierarchy, jargon, and politics atop basic human cognition. Public communication addresses heterogeneous audiences with unequal background knowledge and competing values.",
          "Competence in one context does not automatically transfer. A brilliant dinner conversationalist may ramble in executive briefings; a concise email writer may dominate airtime in brainstorming. Identify your default context and stretch deliberately into others.",
        ]
      ),
      section(
        "meaning-construction",
        "1.3 Meaning, symbols, and constructivism",
        [
          "Words are arbitrary symbols; meaning lives in interpretation. Constructivism holds that people build understanding from experience, culture, and current goals—explaining why the same memo reads as urgent to one team and optional to another. Shared mental models accelerate work; divergent assumptions cause rework.",
          "Denotation is dictionary definition; connotation carries emotional charge ('cheap' versus 'affordable'). Framing sets which aspects of reality seem salient—loss versus gain, individual versus systemic causation. Ethical communicators make frames explicit when stakes are high.",
        ]
      ),
      section(
        "competence-ethics",
        "1.4 Competence, ethics, and credibility",
        [
          "Communicative competence combines effectiveness (achieving goals) and appropriateness (fitting norms). Ethical communication respects autonomy—honest evidence, informed consent in persuasion—and avoids coercion through deception, fear, or exploitation of power imbalances.",
          "Credibility (ethos) blends perceived expertise, trustworthiness, and goodwill. It accrues slowly and burns quickly: one factual error or broken promise can dominate memory. Digital persistence means offhand remarks in chat may resurface years later.",
        ]
      ),
      section(
        "media-richness",
        "1.5 Media richness and channel choice",
        [
          "Media richness theory ranks channels by capacity for immediate feedback, multiple cues, personalization, and language variety. Face-to-face is richest for ambiguous, emotional, or conflict-laden topics. Lean media (email, async docs) suit routine, precise, low-conflict information—if norms for response time are clear.",
          "Channel expansion (Slack, Teams, texting) does not remove tradeoffs. 'Quick question' messages often spawn threads that should have been five-minute calls. Match channel to ambiguity and relationship stakes, not convenience alone.",
        ],
        {
          citations: [
            {
              source: "Daft & Lengel — Organizational information requirements",
              note: "Foundational media richness research",
            },
          ],
        }
      ),
    ],
    "Foundational models that explain how messages succeed or fail"
  ),
  chapter(
    "active-listening",
    2,
    "Active listening and conversational intelligence",
    [
      section(
        "listening-barriers",
        "2.1 Why listening fails",
        [
          "Adults speak roughly 125–150 words per minute but can comprehend far faster—leaving cognitive surplus for internal monologue, rehearsing replies, or judging delivery. Pseudo-listening mimics attention while planning counterarguments. Selective listening filters for agreement; defensive listening hears threat in neutral statements.",
          "Environmental noise, notification pings, and multitasking degrade comprehension measurably. Video calls add latency and reduced nonverbal bandwidth, increasing interruption and talking-over.",
        ]
      ),
      section(
        "active-behaviors",
        "2.2 Active listening behaviors",
        [
          "Active listening is intentional participation: paraphrasing content, reflecting feelings, asking clarifying questions, and summarizing before advocating. Paraphrase content ('So the deadline moved to Friday') and reflect affect ('Sounds frustrating given the client call') to signal understanding before problem-solving.",
          "Minimal encouragers ('mm-hmm,' 'I see') sustain flow without seizing the floor. Silence, used deliberately, invites elaboration—especially after open questions.",
        ],
        {
          bulletPoints: [
            "Paraphrase — restate substance in your words",
            "Reflect — name emotion without diagnosing",
            "Clarify — ask specifics before advising",
            "Summarize — close loops before decisions",
            "Withhold judgment — understand first, evaluate second",
          ],
        }
      ),
      section(
        "questions-power",
        "2.3 Question types and inquiry depth",
        [
          "Closed questions confirm facts ('Did you submit the form?'). Open questions explore ('What blocked submission?'). Probing follows threads without interrogation tone. Leading questions embed assumptions and bias answers—avoid in coaching and interviews unless legally required.",
          "The power of questions is curating attention: what you ask people to narrate becomes what they remember as important. In performance reviews and patient intake alike, question order shapes disclosure.",
        ]
      ),
      section(
        "feedback-loops",
        "2.4 Feedback, confirmation, and repair",
        [
          "Perception checking tests interpretations: 'When you sighed, I wondered if you disagreed—did I read that right?' Repair moves fix misunderstandings early ('Let me rewind—I misspoke'). Without repair, conversations accumulate silent errors until conflict erupts over wrong premises.",
          "Written communication needs explicit confirmation ('Reply YES if scope includes migration'). Assume ambiguity in async media; do not treat silence as agreement.",
        ]
      ),
    ],
    "Listening as disciplined practice, not passive hearing"
  ),
  chapter(
    "verbal-nonverbal",
    3,
    "Verbal and nonverbal communication",
    [
      section(
        "verbal-clarity",
        "3.1 Clarity, concision, and concreteness",
        [
          "Verbal messages succeed when audience mental models update correctly. Use concrete nouns and verbs ('ship by March 15') over abstractions ('soon'). Define acronyms on first use in mixed audiences. One main idea per sentence in high-stakes instructions reduces parser errors in tired brains.",
          "Nominalizations ('implement optimization') hide actors and actions—prefer 'we will cut wait time.' Jargon signals in-group membership but excludes outsiders; calibrate to listener expertise.",
        ]
      ),
      section(
        "voice-paralanguage",
        "3.2 Paralanguage: rate, pitch, volume, pause",
        [
          "How you speak alters meaning as much as words. Fast rate can signal enthusiasm or anxiety; slow rate can signal gravity or condescension. Volume spikes may assert dominance or fear; monotone drains attention in long presentations.",
          "Strategic pause before key points increases retention; filler words ('um,' 'like') are normal but excessive density signals unpreparedness. Record rehearsals to hear patterns your body ignores live.",
        ]
      ),
      section(
        "nonverbal-cues",
        "3.3 Body language, eye contact, and gesture",
        [
          "Facial expressions leak affect—microexpressions brief but informative. Eye contact norms vary by culture; in U.S. professional settings, balanced contact signals attention without staring. Posture and orientation (leaning in, feet toward exit) signal engagement or withdrawal.",
          "Gestures illustrate spatial relationships and quantity; adaptors (fidgeting, self-touch) may indicate stress—not deception per se. Avoid myth that crossed arms always mean defensiveness; context dominates.",
        ]
      ),
      section(
        "congruence-leakage",
        "3.4 Congruence, leakage, and impression management",
        [
          "Congruence aligns words, tone, and face—children detect mismatch instantly ('fine' said angrily). Incongruence breeds distrust even when content is accurate. Skilled communicators align channels or explicitly name tension ('I have good news and a hard caveat').",
          "Impression management is inevitable; authenticity is not confession of every thought—it is alignment between stated values and behavior over time. Over-polished performance reads as sales; under-prepared informality reads as disrespect in formal contexts.",
        ]
      ),
      section(
        "proxemics-haptics",
        "3.5 Space, touch, and environment",
        [
          "Proxemics—intimate, personal, social, public distances—vary by relationship and culture. Office layout communicates power: head of table, glass walls, open plan noise. Touch in workplace follows strict consent and role norms; when uncertain, default to no touch beyond handshake norms your organization accepts.",
          "Environment shapes message: lighting, background clutter on video, room temperature. Arrive early to test AV; poor tech becomes the story and erases content.",
        ]
      ),
    ],
    "Aligning words, voice, and body so messages land intact"
  ),
  chapter(
    "written-email",
    4,
    "Written communication and professional email",
    [
      section(
        "writing-process",
        "4.1 Planning, drafting, and revising",
        [
          "Strong writing is rewriting. Separate generating from editing: outline purpose, audience, and call-to-action; draft without perfectionism; revise for structure and tone; proofread for mechanics last. Reading aloud catches awkward rhythm email scanners miss.",
          "Purpose types—inform, request, persuade, document—determine structure. If you cannot state the ask in one sentence, the draft is not ready.",
        ]
      ),
      section(
        "email-architecture",
        "4.2 Email architecture that respects attention",
        [
          "Subject lines are headlines—specific and scannable ('Approval needed: Q3 vendor contract by Thu 4/18'). Opening sentence states the ask or news; background follows for those who need it. Use short paragraphs, bullets, and bold sparingly for scan paths.",
          "One email, one primary topic when possible. Reply-all only when collective awareness justifies inbox cost. Quote prior text minimally; top-posting with context summary beats endless thread tails.",
        ],
        {
          bulletPoints: [
            "BLUF — bottom line up front (military briefing style)",
            "One action per message when feasible",
            "Deadline + timezone — remove ambiguity",
            "Attachment hygiene — name files descriptively; mention in body",
          ],
        }
      ),
      section(
        "tone-audience",
        "4.3 Tone, audience analysis, and diplomacy",
        [
          "Email lacks vocal tone; dry brevity reads as cold, excessive exclamation as unprofessional. Match formality to recipient norms—executives often prefer terse respect; cross-functional peers may appreciate warmth. Avoid sarcasm and irony; they fail cross-culturally and textually.",
          "Negative news benefits from buffer–message–redirect structure: acknowledge impact, state facts without blame language, offer next steps. Never flame-mail; draft angry, sleep, delete, rewrite factual.",
        ]
      ),
      section(
        "docs-collab",
        "4.4 Memos, docs, and collaborative writing",
        [
          "Longer artifacts need headings, executive summary, and version control. Commenting norms in Google Docs or Word—suggest mode, resolve threads, @mentions with role clarity—prevent duplicate work. Style guides (AP, Chicago, in-house) settle punctuation wars so teams focus on substance.",
          "Accessibility matters: descriptive link text, alt text on images, headings for screen readers. Plain language benefits everyone, including non-native speakers and mobile readers.",
        ]
      ),
    ],
    "Writing that survives busy inboxes and distant time zones"
  ),
  chapter(
    "persuasion-rhetoric",
    5,
    "Persuasion, rhetoric, and ethical influence",
    [
      section(
        "rhetorical-foundations",
        "5.1 Ethos, pathos, logos, and kairos",
        [
          "Classical rhetoric names four resources: credibility (ethos), emotion (pathos), reason (logos), and timeliness (kairos). Modern marketing amplifies pathos; engineering cultures overweight logos. Balanced appeals match audience values—healthcare administrators may need ROI and patient safety in the same paragraph.",
          "Kairos asks whether the moment is ripe: proposing budget during surplus versus freeze changes reception more than slide design.",
        ]
      ),
      section(
        "argument-structure",
        "5.2 Claims, evidence, and warrants",
        [
          "Toulmin-style argumentation: claim ('We should adopt tool X'), evidence (data, expert testimony), warrant (unstated bridge linking evidence to claim). Weak warrants cause rejection despite true evidence—surface them explicitly ('Because our churn correlates with onboarding time, reducing onboarding hours should cut churn').",
          "Fallacies—ad hominem attacks, false dichotomy, hasty generalization—persuade briefly but collapse under scrutiny and damage long-term trust.",
        ],
        {
          bulletPoints: [
            "Straw man — misrepresenting opposing view",
            "Slippery slope — assuming extreme outcomes without proof",
            "Appeal to authority — expert outside domain",
            "Cherry-picking data — ignoring contradictory periods",
          ],
        }
      ),
      section(
        "framing-narrative",
        "5.3 Framing, narrative, and social proof",
        [
          "Prospect theory shows losses loom larger than equivalent gains—framing retention as 'avoid losing $2M ARR' may mobilize executives where 'gain efficiency' stalls. Narrative structure (protagonist, obstacle, resolution) makes data memorable; case studies outperform abstract bullets in sales and change management.",
          "Social proof (peer adoption, testimonials) reduces perceived risk. Use ethically—real customers, disclosed relationships, representative stories not outliers.",
        ]
      ),
      section(
        "negotiation-influence",
        "5.4 Negotiation and principled influence",
        [
          "Interest-based negotiation (Fisher & Ury) separates people from problem, focuses interests not positions, invents options for mutual gain, and uses objective criteria. Hardball tactics (ultimatums, fake deadlines) may win skirmishes and lose relationships.",
          "Cialdini's influence principles—reciprocity, commitment, liking, authority, scarcity, consensus—explain shortcuts brains take. Ethical use aligns with genuine value; manipulation breeds backlash and regulatory attention.",
        ]
      ),
      section(
        "ethics-persuasion",
        "5.5 Ethics: autonomy, deception, and coercion",
        [
          "Persuasion respects audience agency when they can scrutinize claims and refuse without retaliation. Withholding material facts, astroturfing reviews, or manufacturing scarcity are coercive dark patterns. Organizational codes and FTC rules constrain advertising claims; professional licenses add duties.",
          "Ask: Would I defend this message publicly? Would I accept it directed at my family? If not, revise or withdraw.",
        ]
      ),
    ],
    "Influence through reason and respect—not manipulation"
  ),
  chapter(
    "presentations",
    6,
    "Presentations and public speaking",
    [
      section(
        "audience-purpose",
        "6.1 Audience analysis and presentation purpose",
        [
          "Start with audience: role, knowledge, attitudes, constraints (time, language, politics). Informative talks transfer understanding; persuasive seek decision; ceremonial build affiliation. One-sentence purpose ('After 20 minutes, approvers will authorize pilot funding') keeps slides and stories aligned.",
          "Anticipate objections and embed answers—silent skeptics rarely ask clarifying questions in large rooms.",
        ]
      ),
      section(
        "structure-story",
        "6.2 Structure, storytelling, and signposting",
        [
          "Introduction establishes relevance and roadmap. Body chunks ideas in threes when possible—cognitive ease. Signposts ('First risk,' 'Turning to metrics') reorient drifting attention. Conclusion restates action, not mere 'thank you.'",
          "Data slides: one insight per slide, large labels, minimal grid ink. Story slides: scene, conflict, data resolution. Mix modes to prevent statistic fatigue.",
        ]
      ),
      section(
        "delivery-presence",
        "6.3 Delivery, presence, and anxiety management",
        [
          "Physiological arousal before speaking is normal—reframe as energy. Preparation reduces uncertainty: script opening and closing, rehearse transitions, visit room early. Grounding techniques (slow exhale, feet planted) beat memorizing every gesture.",
          "Eye contact distributed in wedges; avoid laser-lock on one friendly face. Movement with purpose; stillness before key points adds weight.",
        ]
      ),
      section(
        "visuals-qa",
        "6.4 Visual design, tech rehearsal, and Q&A",
        [
          "Contrast and font size for back-row readability; never read slides verbatim. Backup PDF on USB and cloud; assume projector failure. Q&A: repeat questions for room; bridge back to evidence; admit unknowns with follow-up commitment.",
          "Virtual presentations demand stronger audio, camera at eye level, and explicit engagement prompts (polls, chat tasks) every few minutes to fight multitasking.",
        ]
      ),
    ],
    "Designing and delivering talks that move rooms and cameras"
  ),
  chapter(
    "meetings-facilitation",
    7,
    "Meetings, facilitation, and collaborative dialogue",
    [
      section(
        "meeting-economics",
        "7.1 The cost of meetings and when not to meet",
        [
          "Meeting cost equals salaries × duration × attendees—plus context-switch loss. Default async for status updates; meet for ambiguity, relationship repair, real-time negotiation, or joint creation. Decline with professionalism when agenda lacks your decision or expertise.",
          "Calendar hygiene: start on time, end early when done, no recurring meetings without periodic audit ('Should this exist?').",
        ]
      ),
      section(
        "agenda-roles",
        "7.2 Agendas, roles, and norms",
        [
          "Agendas circulated 24+ hours ahead with desired outcomes, time boxes, and pre-reads. Roles: facilitator (process), scribe (decisions/actions), timekeeper, decision owner. Norms: laptops down for focus topics, one conversation at a time, disagree without denigrating.",
          "Decision logs prevent relitigation—who decided what, when, with what evidence. Link notes in shared wiki, not buried email.",
        ]
      ),
      section(
        "facilitation-techniques",
        "7.3 Facilitation techniques and inclusion",
        [
          "Round-robins surface quiet expertise; brainstorming defers critique until quantity pass. Dot voting prioritizes options quickly. Parking lot captures tangents without killing flow. Facilitators stay neutral on content when possible—if they have stake, co-facilitate.",
          "Remote inclusion: call on names evenly, use chat for parallel input, captioning for hearing access, rotate time zones pain fairly.",
        ],
        {
          bulletPoints: [
            "Brainstorm — diverge then converge",
            "Dot vote — limited tokens per person",
            "Parking lot — off-topic list for later",
            "Action item — owner + date + definition of done",
          ],
        }
      ),
      section(
        "difficult-dynamics",
        "7.4 Dominators, silence, and conflict in meetings",
        [
          "Interrupt domination with structure ('We need three perspectives we have not heard'). Pair silent experts pre-meet for ally support. If conflict escalates, name process ('Let's table legal debate, return to success criteria').",
          "After heated meetings, facilitator checks in privately with affected parties—repair prevents grudges that poison later collaboration.",
        ]
      ),
      section(
        "async-sync-hybrid",
        "7.5 Hybrid and async-first collaboration",
        [
          "Hybrid rooms fail when remote participants see side conversations only. Single camera on speaker, large chat monitor, or policy 'remote-first' (everyone on own laptop) levels field. Async video updates (Loom) plus comment threads replace low-value standups when teams span time zones.",
          "Document decisions where work happens (Notion, Jira) so Slack scrollback is not the system of record.",
        ]
      ),
    ],
    "Making gatherings purposeful—or replacing them wisely"
  ),
  chapter(
    "conflict",
    8,
    "Conflict communication and resolution",
    [
      section(
        "conflict-types",
        "8.1 Task, process, and relationship conflict",
        [
          "Task conflict debates ideas and can improve decisions if respectful. Process conflict fights over roles and methods—manageable with clarity. Relationship conflict personalizes disagreement and corrodes trust—address promptly or remove participants from joint work temporarily.",
          "Conflict avoidance postpones explosions; competitive escalation wins battles and loses alliances. Collaboration seeks integrative solutions but costs time—appropriate for recurring partners.",
        ]
      ),
      section(
        "de-escalation",
        "8.2 De-escalation and nonviolent communication",
        [
          "Lower arousal first: private setting, lower voice, slower pace. Nonviolent Communication (Rosenberg) templates observation ('When meetings start late'), feeling ('I feel disrespected'), need ('I need predictability'), request ('Can we start at 9:00?'). Avoid 'you always' absolutes that trigger defensiveness.",
          "Reflect opponent's story until they feel heard—only then introduce your frame. People do not care how much you know until they feel understood.",
        ]
      ),
      section(
        "mediation-negotiation",
        "8.3 Mediation, apologies, and accountability",
        [
          "Third-party mediators reframe positions as interests and enforce turn-taking. Apologies require sincerity: acknowledge harm, accept responsibility, commit to change—without 'if you were offended' non-apologies. Accountability plans specify behaviors and check-in dates.",
          "HR and legal paths exist for harassment, discrimination, and safety threats—communication skills do not replace reporting obligations.",
        ]
      ),
      section(
        "organizational-systems",
        "8.4 Systems, culture, and post-conflict repair",
        [
          "Repeated conflict signals structural issues—unclear RACI, biased performance standards, resource starvation. Leaders model repair after their own mistakes; cultures that punish admission drive cover-ups.",
          "Post-resolution, joint projects with clear success metrics rebuild trust slowly. Monitor for relapse without surveillance tone.",
        ]
      ),
    ],
    "Turning disagreement into learning instead of collateral damage"
  ),
  chapter(
    "cross-cultural",
    9,
    "Cross-cultural and inclusive communication",
    [
      section(
        "culture-dimensions",
        "9.1 Culture as learned patterns, not stereotypes",
        [
          "Culture is shared norms, values, and communication rules learned through socialization—national, regional, organizational, generational. Dimensional research (e.g., Hofstede, GLOBE) compares power distance, individualism, uncertainty avoidance at population level; individuals vary widely within countries.",
          "Stereotyping ('Germans are direct') harms; cultural intelligence starts with curiosity and updates mental models per person.",
        ]
      ),
      section(
        "high-low-context",
        "9.2 High-context versus low-context styles",
        [
          "Low-context cultures (many Northern European and U.S. professional defaults) encode meaning explicitly in words. High-context cultures rely on shared history, hierarchy, and nonverbal subtext—direct refusal may be rare, replaced by indirect cues newcomers miss.",
          "Bridging requires explicit checking ('Is a soft maybe actually a no?') and patience; neither style is superior—mismatch causes offense both directions.",
        ]
      ),
      section(
        "language-inclusion",
        "9.3 Language, accent bias, and inclusive wording",
        [
          "Non-native speakers process nuance slower—pause, avoid idioms ('ballpark figure'), confirm understanding. Accent bias unfairly attributes intelligence or credibility; focus on content and written follow-ups.",
          "Inclusive language respects chosen names and pronouns; gendered defaults ('guys' for mixed groups) erode belonging. Person-first versus identity-first language varies by community—ask when unsure.",
        ]
      ),
      section(
        "global-teams",
        "9.4 Global teams, time zones, and holidays",
        [
          "Rotate meeting times so pain is shared. Acknowledge major holidays across calendars—not only local federal days. Written summaries after calls reduce misalignment when participants' first languages differ.",
          "Negotiation and humor are culture-laden; sarcasm and sports metaphors confuse. When stakes are high, use professional interpreters, not bilingual relatives.",
        ]
      ),
      section(
        "diversity-equity",
        "9.5 Diversity, equity, and communication allyship",
        [
          "Marginalized voices are interrupted more—allies amplify ('I want to hear Maya finish'). Credit ideas to originators when others repeat them. Microaggressions ('Where are you really from?') accumulate; respond with calm boundary or escalate per policy.",
          "DEI communication is not performative statements alone—measure inclusion via participation rates, promotion equity, and psychological safety surveys.",
        ]
      ),
    ],
    "Communicating across difference without erasing individuality"
  ),
  chapter(
    "digital-professionalism",
    10,
    "Digital professionalism and career communication",
    [
      section(
        "online-presence",
        "10.1 Professional online presence and personal brand",
        [
          "Employers and clients search names—curate LinkedIn, portfolio, and public GitHub intentionally. Headline and summary state value proposition, not only job title history. Recommendations and project artifacts beat adjective lists ('hard-working').",
          "Separate personal social from professional when possible; privacy settings are imperfect—assume screenshots.",
        ]
      ),
      section(
        "netiquette-security",
        "10.2 Netiquette, security, and platform norms",
        [
          "Slack/Teams norms: threads reduce channel noise; emoji reactions acknowledge without '+1' spam; urgent matters labeled explicitly. Do not share credentials or sensitive data in chat—use approved secure channels.",
          "Phishing awareness applies to workplace comms: verify odd CEO wire requests out-of-band. Report security incidents promptly—silence worsens breaches.",
        ]
      ),
      section(
        "interview-networking",
        "10.3 Interviews, networking, and elevator communication",
        [
          "STAR method structures behavioral answers (Situation, Task, Action, Result) with quantified outcomes. Informational interviews seek learning, not immediate job ask—prepare thoughtful questions about path and industry shifts.",
          "Elevator pitches are 30–60 second clarity drills: problem you solve, for whom, proof point—not life story. Follow up within 48 hours with specificity referencing conversation.",
        ],
        {
          bulletPoints: [
            "STAR — behavioral interview structure",
            "Informational interview — relationship before transaction",
            "Thank-you note — concise, reference unique detail",
            "Portfolio — show, don't tell, for creative and technical roles",
          ],
        }
      ),
      section(
        "feedback-performance",
        "10.4 Giving and receiving feedback digitally",
        [
          "Feedback should be timely, specific, and behavior-focused ('The report missed Q2 churn chart') not identity attacks ('You are careless'). SBI (Situation-Behavior-Impact) works in Slack and review tools. Receiving feedback: listen, clarify, thank, decide what to change—defensiveness shuts future honesty.",
          "Public praise, private criticism remains wise default; copy managers only when appropriate and disclosed.",
        ]
      ),
      section(
        "lifelong-communication",
        "10.5 Lifelong learning and communication ethics",
        [
          "Record presentations for self-review; join Toastmasters, debate, or theater for practice. Read widely—economics, psychology, fiction—to supply metaphors and empathy. Technology shifts (AI drafting, deepfakes) raise disclosure duties: label synthetic media when policies require.",
          "Careers advance on trust accumulated through reliable communication under stress. Protect that asset as deliberately as technical skills.",
        ]
      ),
    ],
    "Showing up competently where work increasingly lives—on screens"
  ),
];
