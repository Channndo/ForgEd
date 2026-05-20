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
          "Popular culture treats communication as a personality gift—'natural communicator' versus shy introvert. Research instead defines it as learned behaviors in a system: senders, messages, channels, receivers, feedback, and noise. Competence grows through deliberate practice, preparation, and after-action review, much like athletic skill. National Communication Association (NCA) learning outcomes treat listening, speaking, and media analysis as measurable competencies rather than fixed traits.",
          "Linear models (Shannon–Weaver) highlight encoding, transmission, and decoding—useful for engineering metaphors and diagnosing 'static.' Transactional models emphasize simultaneous sending and receiving: you are always a listener while speaking, interpreting facial feedback and adjusting mid-utterance. Relational models add layers of relationship history and power that shape what can be said safely in a given moment.",
          "Process thinking shifts evaluation from 'bad personality' to diagnosable failures: Was the channel too lean? Was feedback invited? Did noise drown the main claim? That shift is foundational for every later chapter in this textbook—from email architecture to conflict repair.",
        ],
        {
          citations: [
            {
              source:
                "National Communication Association, Communication Competencies (2012)",
              url: "https://www.natcom.org/",
              note: "Widely referenced learning outcomes for undergraduate communication programs.",
            },
          ],
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
          "Context also governs accountability: public statements may be archived; private coaching may be privileged or confidential depending on role and policy. Before speaking, ask which context you are in and which norms (legal, ethical, cultural) constrain the message.",
        ],
        {
          bulletPoints: [
            "Interpersonal — dyadic, high feedback, relationship salient",
            "Group — roles, norms, shared history shape participation",
            "Organizational — hierarchy, policy, and jargon filter meaning",
            "Public — heterogeneous audience, less repair opportunity",
          ],
          citations: [
            {
              source: "DeVito, J. A., The Interpersonal Communication Book (Pearson)",
              note: "Standard introductory framework for context and field of experience.",
            },
          ],
        }
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
          "Professional codes—journalism ethics, APA guidance on deceptive communication in research, healthcare informed consent—translate abstract principles into role-specific duties. When organizational pressure conflicts with ethics, document concerns and escalate through proper channels rather than silent complicity.",
        ],
        {
          citations: [
            {
              source:
                "American Psychological Association, Ethical Principles of Psychologists and Code of Conduct (2017)",
              url: "https://www.apa.org/ethics/code",
              note: "Informed consent and honesty standards applicable to research and organizational communication.",
            },
          ],
        }
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
          "Organizational culture can reward performative listening—nodding while checking Slack—especially when leaders model divided attention. Barriers are therefore individual and systemic; fixing them requires norms (cameras optional, phones away for critical topics) as well as personal discipline.",
        ],
        {
          bulletPoints: [
            "Pseudo-listening — appearing attentive while mentally elsewhere",
            "Selective listening — filtering for agreement or threat",
            "Rehearsal — composing reply instead of receiving message",
            "Environmental noise — tech, layout, and notification design",
          ],
          citations: [
            {
              source: "Brownell, J., Listening: Attitudes, Principles, and Skills (Routledge)",
              note: "Empirical and pedagogical synthesis of listening barriers in professional settings.",
            },
          ],
        }
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
          "Socratic and motivational interviewing traditions use questions to surface contradictions gently rather than to trap. The ethical line is intent: inquiry should expand understanding, not manufacture consent for a predetermined decision.",
        ],
        {
          bulletPoints: [
            "Closed — yes/no or factual confirmation",
            "Open — invites narrative and context",
            "Probing — follows thread without accusation",
            "Leading — embeds assumption; high bias risk",
          ],
        }
      ),
      section(
        "feedback-loops",
        "2.4 Feedback, confirmation, and repair",
        [
          "Perception checking tests interpretations: 'When you sighed, I wondered if you disagreed—did I read that right?' Repair moves fix misunderstandings early ('Let me rewind—I misspoke'). Without repair, conversations accumulate silent errors until conflict erupts over wrong premises.",
          "Written communication needs explicit confirmation ('Reply YES if scope includes migration'). Assume ambiguity in async media; do not treat silence as agreement.",
          "Feedback loops close when both parties can paraphrase the decision the same way. In teams, document agreements in shared systems so oral repair is not lost when participants rotate or leave.",
        ],
        {
          bulletPoints: [
            "Perception check — test interpretation before reacting",
            "Repair — rewind and correct early misstatements",
            "Explicit confirm — async media needs written closure",
            "Decision log — shared record prevents silent drift",
          ],
        }
      ),
      section(
        "empathic-dialogue",
        "2.5 Empathic dialogue and conversational repair in teams",
        [
          "Empathic dialogue does not require agreement; it requires accurate reception of another person's experience before advocacy. Carl Rogers emphasized unconditional positive regard and reflective responses that reduce defensiveness so problem-solving can begin. In organizational settings, empathy is a performance skill—managers who skip it see repeated resistance to otherwise rational change plans.",
          "Team repair rituals—after-action reviews, blameless postmortems, and structured retrospectives—institutionalize listening. They separate intent from impact ('I did not mean to dismiss you' versus 'The impact was that I stopped contributing'). That distinction prevents debates about motives from blocking fixes to behavior.",
          "High-stakes contexts—performance conversations, client escalations, peer feedback—benefit from pre-briefed questions and note-taking permission. Listening under time pressure defaults to solution-jumping; scheduling adequate duration signals that understanding is part of the work, not a delay before the real work.",
        ],
        {
          bulletPoints: [
            "Reflect content and feeling before advising",
            "Separate intent from impact in debriefs",
            "Blameless postmortem — learn without punishing admission",
            "Schedule time — empathy fails when rushed",
          ],
          citations: [
            {
              source: "Rogers, C. R., On Becoming a Person (1961)",
              note: "Foundational humanistic listening and empathic response framework.",
            },
            {
              source:
                "National Communication Association, Listening Competency Profile",
              note: "Discipline-specific listening outcomes for education and assessment.",
            },
          ],
        }
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
          "Plain language principles from federal plain-writing initiatives apply in business and education: short sentences, active voice, and logical order reduce misread rates for diverse audiences including non-native speakers and screen-reader users.",
        ],
        {
          bulletPoints: [
            "Concrete — dates, owners, measurable outcomes",
            "Active voice — names who does what",
            "One idea per sentence — high-stakes instructions",
            "Define acronyms — first use in mixed groups",
          ],
          citations: [
            {
              source: "U.S. Plain Writing Act of 2010",
              url: "https://www.plainlanguage.gov/",
              note: "Federal plain-language standards widely adapted in professional writing.",
            },
          ],
        }
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
          "Workplace writing often collaborates across tools—draft in docs, paste into email, track versions in wikis. Establish who owns final send authority to prevent contradictory messages from multiple authors.",
        ],
        {
          bulletPoints: [
            "Outline — purpose, audience, call-to-action first",
            "Draft — generate without perfectionism",
            "Revise — structure and tone before mechanics",
            "Proofread — spelling and links last",
          ],
        }
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
          "Consumer Financial Protection Bureau (CFPB) plain-language guidance for financial disclosures illustrates how regulated industries pair clarity with compliance—analogous discipline applies when HR or legal requires specific phrasing in employee communications.",
        ],
        {
          bulletPoints: [
            "Buffer–message–redirect — negative news structure",
            "No sarcasm — tone does not transmit in text",
            "Cooling-off — draft angry, revise factual",
            "Match formality — norm of recipient and role",
          ],
          citations: [
            {
              source:
                "Consumer Financial Protection Bureau, Plain Language Writing Act compliance resources",
              url: "https://www.consumerfinance.gov/",
              note: "Federal model for clear consumer-facing communication.",
            },
          ],
        }
      ),
      section(
        "docs-collab",
        "4.4 Memos, docs, and collaborative writing",
        [
          "Longer artifacts need headings, executive summary, and version control. Commenting norms in Google Docs or Word—suggest mode, resolve threads, @mentions with role clarity—prevent duplicate work. Style guides (AP, Chicago, in-house) settle punctuation wars so teams focus on substance.",
          "Accessibility matters: descriptive link text, alt text on images, headings for screen readers. Plain language benefits everyone, including non-native speakers and mobile readers.",
          "Collaborative writing benefits from a single 'voice owner' who harmonizes tone before external send—especially for customer-facing memos where inconsistent tense or terminology signals disorganization.",
        ]
      ),
      section(
        "email-compliance",
        "4.5 Regulatory awareness for workplace email and messaging",
        [
          "Commercial email in the United States falls under the CAN-SPAM Act, which requires truthful header information, non-deceptive subject lines, identification as an advertisement when applicable, a valid physical postal address, and a functioning opt-out mechanism honored within ten business days. Workplace learners should distinguish internal operational mail from marketing mail—blurring the line can create compliance exposure when bulk messages promote products or fundraising.",
          "The EU General Data Protection Regulation (GDPR) and UK GDPR affect multinational teams when personal data appears in email—names, contact details, performance notes, or customer identifiers. Minimize data in bodies and attachments, use role-based access, define retention, and avoid forwarding chains that leak personal data across jurisdictions. Privacy impact assessments may be required before new communication tools store employee or customer content in third-party clouds.",
          "Harassment, threats, and discrimination can occur in writing as in speech; employers may monitor business systems under policy and law. Educational awareness: Title VII of the Civil Rights Act of 1964 prohibits workplace harassment based on protected characteristics—email evidence is discoverable in investigations. When in doubt, escalate through HR rather than debating tone in endless reply-all threads.",
        ],
        {
          laws: [
            {
              name: "CAN-SPAM Act",
              year: "2003",
              summary:
                "U.S. law governing commercial email: accurate headers, opt-out, physical address, and timely honoring of unsubscribe requests.",
            },
            {
              name: "General Data Protection Regulation (GDPR)",
              year: "2016 (EU); UK GDPR post-Brexit",
              summary:
                "Limits processing of personal data; affects email content, retention, cross-border transfers, and vendor tooling.",
            },
            {
              name: "Title VII of the Civil Rights Act",
              year: "1964",
              summary:
                "Prohibits employment discrimination and harassment; written workplace communications can be evidence in claims.",
            },
          ],
          bulletPoints: [
            "CAN-SPAM — commercial mail: truth, opt-out, address",
            "GDPR — minimize personal data; know retention and vendors",
            "Title VII — harassment in writing is still harassment",
            "Policy — read employer monitoring and acceptable-use rules",
          ],
          citations: [
            {
              source: "Federal Trade Commission, CAN-SPAM Act compliance guide",
              url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business",
              note: "Official U.S. guidance on commercial email requirements.",
            },
            {
              source: "European Commission, GDPR overview",
              url: "https://gdpr.eu/",
              note: "Cross-border data protection implications for workplace messaging.",
            },
          ],
        }
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
          "Aristotle's Rhetoric remains the academic anchor for analyzing how speakers adapt to audience character, emotion, and proof types. Contemporary business communication courses still map pitches and memos to ethos–pathos–logos balance rather than style alone.",
        ],
        {
          bulletPoints: [
            "Ethos — credibility, trust, goodwill",
            "Pathos — emotion and values (used ethically)",
            "Logos — evidence, logic, data",
            "Kairos — timing and situational fit",
          ],
          citations: [
            {
              source: "Aristotle, Rhetoric (trans. various; ca. 4th c. BCE)",
              note: "Canonical treatment of ethos, pathos, logos, and audience adaptation.",
            },
          ],
        }
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
          "Framing is not neutral: the same metrics can support investment or austerity depending on reference points. Ethical influence discloses whose interests a frame serves and invites scrutiny of alternatives.",
        ],
        {
          bulletPoints: [
            "Loss framing — mobilizes when stakes feel threatened",
            "Gain framing — motivates aspiration and growth goals",
            "Narrative arc — scene, conflict, resolution for memory",
            "Social proof — disclose relationships; avoid astroturfing",
          ],
          citations: [
            {
              source: "Kahneman, D., & Tversky, A., Prospect theory (1979)",
              note: "Foundational behavioral economics behind loss/gain framing.",
            },
          ],
        }
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
          "Harvard Business Review and executive-education case libraries emphasize audience-first sequencing: executives want recommendation before methodology; technical peers may require methods before conclusion. Violating expected order erodes credibility regardless of slide polish.",
        ],
        {
          bulletPoints: [
            "Audience map — role, knowledge, attitude, constraints",
            "Purpose sentence — one outcome after the talk",
            "Objection embedding — answer silent skeptics early",
            "Genre fit — inform, persuade, or ceremonial",
          ],
          citations: [
            {
              source: "Harvard Business Review, How to Give a Killer Presentation (2013)",
              url: "https://hbr.org/",
              note: "Widely cited practitioner framework for executive-facing talks.",
            },
          ],
        }
      ),
      section(
        "structure-story",
        "6.2 Structure, storytelling, and signposting",
        [
          "Introduction establishes relevance and roadmap. Body chunks ideas in threes when possible—cognitive ease. Signposts ('First risk,' 'Turning to metrics') reorient drifting attention. Conclusion restates action, not mere 'thank you.'",
          "Data slides: one insight per slide, large labels, minimal grid ink. Story slides: scene, conflict, data resolution. Mix modes to prevent statistic fatigue.",
          "Monroe's Motivated Sequence—attention, need, satisfaction, visualization, action—offers a classical persuasive scaffold still taught in communication curricula and campaign planning. Even informative talks borrow its attention step to justify why listeners should care now.",
        ],
        {
          bulletPoints: [
            "Roadmap — preview sections in introduction",
            "Rule of three — chunk ideas for cognitive ease",
            "Signposts — verbal transitions between sections",
            "Action close — restate decision or next step",
          ],
        }
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
          "Web Content Accessibility Guidelines (WCAG) principles—contrast ratios, captions, readable fonts—apply to slide decks distributed digitally. Accessibility is an ethical and often legal expectation for public-sector and education audiences.",
        ]
      ),
      section(
        "remote-inclusive-speaking",
        "6.5 Remote delivery, accessibility, and inclusive presentation design",
        [
          "Hybrid and remote presentations amplify inequality when only in-room participants see whiteboards or hear side jokes. Inclusive practice treats remote attendees as primary: shared slides everyone can read, chat monitored by a co-host, and cameras optional with no penalty for audio-only participation. Recording policies should be disclosed up front because retention affects privacy under GDPR-style regimes.",
          "Cognitive load rises when listeners split attention across chat, slides, and speaker video. Reduce clutter: fewer words per slide, more frequent summaries, and structured interaction every three to five minutes. Duarte and Reynolds visualization research recommends one idea per slide and generous whitespace—rules that matter more on laptop screens than in ballrooms.",
          "Inclusive design includes captioning, speaker identification in chat, color palettes safe for common color-vision deficiencies, and content warnings when discussing trauma or violence in training contexts. Presenters who name their accessibility accommodations ('I will describe charts verbally') model norms for peers and reports.",
        ],
        {
          bulletPoints: [
            "Remote-first — design for smallest screen and worst audio",
            "Co-host — monitor chat while speaker presents",
            "WCAG-aware slides — contrast, captions, alt text",
            "Disclose recording — privacy and policy alignment",
          ],
          citations: [
            {
              source: "Duarte, N., slide:ology (O'Reilly)",
              note: "Professional slide design standards for clarity and emphasis.",
            },
            {
              source: "W3C Web Content Accessibility Guidelines (WCAG) 2.2",
              url: "https://www.w3.org/WAI/WCAG22/quickref/",
              note: "Technical reference for accessible digital presentation materials.",
            },
          ],
        }
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
          "Microsoft and Atlassian workplace research popularized 'no-meeting' blocks and async status docs—evidence that reducing synchronous load can raise deep-work output when teams adopt written norms for decisions and accountability.",
        ],
        {
          bulletPoints: [
            "Cost formula — salaries × time × headcount",
            "Async default — status without synchronous tax",
            "Decline professionally — missing decision or expertise",
            "Audit recurring — cancel or shorten standing meetings",
          ],
          citations: [
            {
              source: "Harvard Business Review, Stop the Meeting Madness (2017)",
              url: "https://hbr.org/",
              note: "Executive summary of meeting overload and redesign practices.",
            },
          ],
        }
      ),
      section(
        "agenda-roles",
        "7.2 Agendas, roles, and norms",
        [
          "Agendas circulated 24+ hours ahead with desired outcomes, time boxes, and pre-reads. Roles: facilitator (process), scribe (decisions/actions), timekeeper, decision owner. Norms: laptops down for focus topics, one conversation at a time, disagree without denigrating.",
          "Decision logs prevent relitigation—who decided what, when, with what evidence. Link notes in shared wiki, not buried email.",
          "Robert's Rules of Order and simpler consensual methods (Fist-to-Five, dot voting) differ in formality; pick a decision method matching stakes and culture, then announce it before debate begins.",
        ],
        {
          bulletPoints: [
            "Outcome-based agenda — decision or deliverable per block",
            "Roles — facilitator, scribe, timekeeper, owner",
            "Pre-read — 24+ hours for complex topics",
            "Decision log — who, what, when, evidence",
          ],
        }
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
          "Thomas-Kilmann conflict mode inventory maps avoiding, competing, accommodating, compromising, and collaborating—no mode is universally best; effectiveness depends on stakes, time, and relationship continuity. Teams that label conflict type ('This is task, not personal') reduce unnecessary relationship damage.",
        ],
        {
          bulletPoints: [
            "Task conflict — ideas; can improve decisions",
            "Process conflict — roles and methods",
            "Relationship conflict — personal; highest trust risk",
            "Mode fit — collaborate when partners recur",
          ],
          citations: [
            {
              source: "Thomas, K. W., & Kilmann, R. H., Conflict Mode Instrument (1974)",
              note: "Standard framework for conflict handling styles in management education.",
            },
          ],
        }
      ),
      section(
        "de-escalation",
        "8.2 De-escalation and nonviolent communication",
        [
          "Lower arousal first: private setting, lower voice, slower pace. Nonviolent Communication (Rosenberg) templates observation ('When meetings start late'), feeling ('I feel disrespected'), need ('I need predictability'), request ('Can we start at 9:00?'). Avoid 'you always' absolutes that trigger defensiveness.",
          "Reflect opponent's story until they feel heard—only then introduce your frame. People do not care how much you know until they feel understood.",
          "Crisis communication research distinguishes de-escalation tactics (validation, choice offering, time-outs) from problem-solving while emotions remain flooded. Attempting logic during peak arousal often deepens entrenchment.",
        ],
        {
          citations: [
            {
              source: "Rosenberg, M. B., Nonviolent Communication (1999)",
              note: "Observation–feeling–need–request model widely taught in mediation training.",
            },
          ],
        }
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
          "Restorative practices in schools and workplaces—circle processes, facilitated dialogue, written agreements—extend communication training into system design rather than individual charisma alone.",
        ]
      ),
      section(
        "harassment-boundaries",
        "8.5 Harassment awareness, reporting, and communication boundaries",
        [
          "Educational communication courses must distinguish everyday conflict from conduct that may violate law and policy. Title VII of the Civil Rights Act of 1964, enforced by the U.S. Equal Employment Opportunity Commission (EEOC), prohibits harassment based on protected characteristics including race, color, religion, sex (including pregnancy, sexual orientation, and gender identity per current EEOC guidance), national origin, age, disability, and genetic information. Severe or pervasive hostile conduct—not every rude remark—can constitute unlawful harassment when tied to protected status.",
          "Sexual harassment includes quid pro quo demands and hostile environment patterns; written channels (email, chat, DMs) create discoverable records. Bystander communication skills—documenting, supporting targets, reporting through official channels—complement individual boundary-setting. Retaliation against reporters is prohibited; learners should know their organization's reporting paths and never promise confidentiality they cannot legally or procedurally keep.",
          "Communication training does not replace HR investigation, legal counsel, or law enforcement when threats or assault occur. When safety is immediate, contact security or emergency services first. For borderline jokes, slurs, or exclusionary language, prompt clarification and escalation per policy beats silent normalization that later becomes evidence of institutional tolerance.",
        ],
        {
          laws: [
            {
              name: "Title VII of the Civil Rights Act",
              year: "1964",
              summary:
                "Federal U.S. employment discrimination law; hostile environment and quid pro quo harassment concepts enforced by EEOC.",
            },
            {
              name: "EEOC Enforcement Guidance on Harassment",
              year: "2024 (updated guidance)",
              summary:
                "Agency guidance on unlawful harassment, remote work, and digital communications as potential evidence.",
            },
          ],
          bulletPoints: [
            "Protected characteristics — know EEOC and local equivalents",
            "Hostile environment — severe or pervasive standard",
            "Document — dates, witnesses, exact words when safe",
            "Report — use official channels; retaliation prohibited",
          ],
          citations: [
            {
              source: "U.S. Equal Employment Opportunity Commission, Harassment",
              url: "https://www.eeoc.gov/harassment",
              note: "Federal definitions, examples, and employee rights overview.",
            },
            {
              source:
                "Society for Human Resource Management, Workplace Harassment prevention resources",
              note: "Practitioner-aligned policy and training frameworks for employers.",
            },
          ],
        }
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
          "Cultural intelligence (CQ) models add cognitive, motivational, and behavioral components—knowing about cultures is insufficient without adapting style and checking impact. Inclusive teams treat cultural knowledge as hypothesis to test, not script to perform.",
        ],
        {
          citations: [
            {
              source: "House et al., GLOBE Study of 62 Societies (2004)",
              note: "Large-scale leadership and culture dimensional research used in cross-cultural management courses.",
            },
            {
              source: "Ang, S., et al., Cultural intelligence framework (2007)",
              note: "CQ as measurable capability for multicultural effectiveness.",
            },
          ],
        }
      ),
      section(
        "high-low-context",
        "9.2 High-context versus low-context styles",
        [
          "Low-context cultures (many Northern European and U.S. professional defaults) encode meaning explicitly in words. High-context cultures rely on shared history, hierarchy, and nonverbal subtext—direct refusal may be rare, replaced by indirect cues newcomers miss.",
          "Bridging requires explicit checking ('Is a soft maybe actually a no?') and patience; neither style is superior—mismatch causes offense both directions.",
          "Edward T. Hall's context continuum explains why email from low-context writers can read as blunt to high-context readers, and why high-context nuance may be misread as evasive in low-context review cultures.",
        ],
        {
          bulletPoints: [
            "Low-context — meaning chiefly in explicit words",
            "High-context — shared history and subtext carry meaning",
            "Check interpretations — ask before assuming refusal or agreement",
            "Email risk — lean channel amplifies bluntness",
          ],
          citations: [
            {
              source: "Hall, E. T., Beyond Culture (1976)",
              note: "High- and low-context communication framework used in intercultural training.",
            },
          ],
        }
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
          "National Association of Colleges and Employers (NACE) competencies emphasize career management communication—networking, interviewing, and professional correspondence—as distinct skills from technical mastery.",
        ],
        {
          bulletPoints: [
            "Value proposition — headline states problem you solve",
            "Evidence — projects and metrics over adjectives",
            "Privacy — assume public sharing of 'private' posts",
            "Consistency — align resume, LinkedIn, and portfolio",
          ],
          citations: [
            {
              source:
                "National Association of Colleges and Employers, Career readiness competencies",
              url: "https://www.naceweb.org/",
              note: "Career communication expectations for graduates and early professionals.",
            },
          ],
        }
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
          "Center for Creative Leadership and organizational psychology research link specific feedback to learning; vague praise ('great job') does not reinforce repeatable behaviors and can feel patronizing to high performers.",
        ],
        {
          bulletPoints: [
            "SBI — Situation, Behavior, Impact",
            "Behavior-focused — observable actions, not identity labels",
            "Timely — close to event while memory fresh",
            "Receive — clarify, thank, then decide changes",
          ],
        }
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
