import type { TextbookIntro, TextbookChapter } from "@/lib/courses/textbook/types";
import { section, chapter } from "@/lib/courses/textbook/factory";

export const CYBER_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Cybersecurity Basics",
  subtitle:
    "ForgEd deep-dive — CIA triad, threats, controls, cryptography, incident response, and privacy-aware careers",
  paragraphs: [
    "Cybersecurity is the disciplined protection of information systems—hardware, software, data, and people—from unauthorized access, disruption, and harm. Every organization that connects to the internet faces a global threat landscape of criminals, hacktivists, insiders, and nation-state actors who exploit misconfigurations, stolen credentials, and unpatched vulnerabilities faster than defenders can respond without preparation.",
    "This ForgEd textbook presents ten chapters grounded in the security mindset and the classic confidentiality, integrity, and availability goals. You will study threats and adversaries, identity and access management, network and endpoint defenses, cryptography, social engineering, application and web security, incident response, and compliance frameworks that shape privacy and careers. The writing is formal and educational—definitions, history, mechanisms, and implications—not sensational news headlines.",
    "This material is general education, not legal advice. Laws such as GDPR and sector rules like HIPAA vary by jurisdiction and context; consult qualified counsel for compliance decisions. References to NIST publications and frameworks are instructional guides to structured risk management widely used in industry and government. Use the table of contents to study sequentially or to revisit topics before certifications, internships, or workplace security conversations.",
  ],
};

export const CYBER_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "security-mindset-cia",
    1,
    "The security mindset and the CIA triad",
    [
      section(
        "security-mindset",
        "1.1 Thinking like a defender and an adversary",
        [
          "The security mindset assumes failure is possible and asks how an opponent would abuse the system. Unlike pure software engineering optimism—ship features, fix bugs later—security engineering designs for malice, misconfiguration, and accident simultaneously. Defenders think in layers: if one control fails, others contain damage. Adversaries think in paths: the cheapest route to valuable data or leverage.",
          "Kerckhoffs's principle (1883), adapted to modern systems, states that security should not rely on secrecy of the design alone; algorithms and protocols may be public while keys remain secret. 'Security through obscurity'—hiding implementation details as the primary defense—fails once attackers reverse engineer or insiders disclose. Open review, responsible disclosure, and patch cadence matter.",
          "Risk management balances likelihood and impact of threats against cost of controls. Perfect security is unattainable; organizations prioritize assets, threat actors, and acceptable residual risk. Documentation—policies, standards, procedures—translates principles into repeatable operations auditors and regulators can assess.",
        ]
      ),
      section(
        "cia-triad",
        "1.2 Confidentiality, integrity, and availability",
        [
          "Confidentiality ensures information is accessible only to authorized parties. Breaches expose personal data, trade secrets, and credentials. Controls include encryption, access control lists, need-to-know policies, and data loss prevention monitoring exfiltration channels.",
          "Integrity ensures data and systems are accurate and unaltered except by authorized processes. Tampering can falsify financial records, inject malware, or deface websites. Hash functions, digital signatures, version control, and integrity monitoring detect unauthorized modification.",
          "Availability ensures timely, reliable access to services and data. Denial-of-service attacks, ransomware encryption, and data center outages disrupt operations. Redundancy, backups, capacity planning, and incident response restore service levels defined in business continuity plans.",
        ],
        {
          bulletPoints: [
          "Confidentiality: encryption, access controls, classification labels",
          "Integrity: hashing, signing, change management, file integrity monitoring",
          "Availability: clustering, failover, DDoS mitigation, disaster recovery",
          "Trade-offs: stricter confidentiality may complicate availability for support staff",
          "Accountability: logging who did what, when, supports investigations",
        ],
        }
      ),
      section(
        "assets-threats",
        "1.3 Assets, threats, vulnerabilities, and controls",
        [
          "An asset is anything of value—customer database, domain controller, CEO laptop, brand reputation. Threats are events that may harm assets: phishing, malware, insider theft, natural disaster. Vulnerabilities are weaknesses threats exploit: unpatched CVE, weak password policy, open S3 bucket. Risk combines threat capability, vulnerability exposure, and asset impact.",
          "Controls are safeguards: preventive (firewall), detective (SIEM alert), corrective (restore from backup), compensating (manual approval when automation fails). Defense in depth stacks controls so single failures do not collapse security. Least privilege limits accounts to minimum permissions required.",
          "The attack surface is the sum of entry points—ports, APIs, vendor portals, physical doors. Shrinking surface area through segmentation, disabling unused services, and zero-trust architecture reduces opportunistic compromise.",
        ]
      ),
      section(
        "governance-risk",
        "1.4 Governance, risk, and compliance overview",
        [
          "Security governance assigns roles: board oversight, CISO leadership, system owners accountable for their environments. Risk registers track identified risks, owners, treatments, and residual scores. Third-party risk management evaluates vendors who process data on your behalf.",
          "Frameworks provide common language. The NIST Cybersecurity Framework organizes activities into Identify, Protect, Detect, Respond, and Recover functions. ISO/IEC 27001 specifies an information security management system auditable by certification bodies. COBIT aligns IT with enterprise goals. None replace thinking; they structure repeatable improvement.",
          "Compliance maps controls to legal obligations—sector-specific rules for health, finance, and critical infrastructure. Violations bring fines, contractual breach, and loss of customer trust. Security and compliance overlap but differ: compliant checklists can still be breached if operations drift.",
        ],
        {
          laws: [
            {
              name: "NIST Cybersecurity Framework (CSF)",
              year: "2014 (updated 2.0, 2024)",
              summary:
                "Voluntary U.S. framework for managing cybersecurity risk across Identify, Protect, Detect, Respond, Recover.",
            },
          ],
          citations: [
            {
              source: "National Institute of Standards and Technology, Cybersecurity Framework",
              url: "https://www.nist.gov/cyberframework",
              note: "Core reference for organizing security programs in many enterprises.",
            },
          ],
        }
      ),
      section(
        "careers-literacy",
        "1.5 Security literacy for every role",
        [
          "Not every employee becomes a penetration tester, but everyone influences security: developers write safe code, HR guards personnel files, finance resists invoice fraud. Phishing simulations and annual training reduce human error—the dominant factor in many incidents.",
          "Career paths include security operations center analysts, incident responders, architects, GRC (governance, risk, compliance) specialists, and researchers. Certifications such as Security+, CISSP, and OSCP signal baseline knowledge but must pair with hands-on labs and ethical conduct.",
          "Chapter 10 expands compliance, privacy, and careers. Subsequent chapters deepen technical domains introduced here. The foundation is mindset plus CIA: know what you protect, from whom, and how you will detect and recover when controls fail.",
        ],
        {
          bulletPoints: [
          "See something, say something: report suspicious email and devices promptly",
          "Password managers and MFA protect personal and corporate accounts",
          "Physical security: tailgating, unlocked screens, and device theft matter",
          "Shadow IT: unapproved cloud apps may bypass corporate controls",
          "Ethics: authorized testing only; unauthorized access is illegal",
        ],
        }
      ),
    ],
    "Foundations every defender shares"
  ),
  chapter(
    "threat-landscape",
    2,
    "The threat landscape and adversaries",
    [
      section(
        "adversary-types",
        "2.1 Who attacks and why",
        [
          "Cyber adversaries range from opportunistic criminals seeking ransom payments to organized groups running business-like affiliate programs. Nation-state actors pursue espionage, intellectual property, and strategic disruption with patience and custom malware. Hacktivists target perceived injustice; insiders abuse legitimate access for profit or revenge.",
          "Motivation shapes tactics. Financial actors favor ransomware and business email compromise. Espionage actors favor stealth, long dwell time, and data exfiltration. Destructive actors may deploy wipers after espionage completes. Understanding intent helps defenders prioritize detection and response playbooks.",
          "The cybercrime ecosystem includes initial access brokers selling footholds, ransomware-as-a-service affiliates, and cryptocurrency laundering. Law enforcement takedowns disrupt infrastructure temporarily; operators rebrand and return. Defense assumes persistent, adaptive opponents.",
        ]
      ),
      section(
        "attack-vectors",
        "2.2 Common attack vectors and kill chains",
        [
          "Attack vectors are paths into systems: phishing email, malicious attachments, drive-by downloads, exposed RDP, stolen API keys, supply chain compromise of trusted software updates. Lockheed Martin's Cyber Kill Chain models stages from reconnaissance through actions on objectives; MITRE ATT&CK catalogs techniques observed in the wild with defensive mitigations.",
          "Reconnaissance gathers emails, technology stacks, and personnel from public sources and dark web breach dumps. Weaponization couples exploits with payloads. Delivery transmits lures; exploitation executes code; installation persists; command and control channels exfiltrate data; actions achieve goals such as encryption for ransom.",
          "Mapping controls to kill chain stages reveals gaps—excellent email filtering but weak endpoint detection, for example. Purple team exercises simulate attacks to validate coverage.",
        ],
        {
          bulletPoints: [
          "Phishing: deceptive messages stealing credentials or delivering malware",
          "Malware: viruses, worms, trojans, ransomware, rootkits",
          "Exploit: code targeting specific vulnerability (CVE)",
          "Lateral movement: pivot from compromised host to others on network",
          "Exfiltration: steal data via DNS tunneling, cloud storage, or encrypted channels",
        ],
        }
      ),
      section(
        "malware-ransomware",
        "2.3 Malware families and ransomware economics",
        [
          "Malware classification includes file infectors, macro documents, droppers that fetch second-stage payloads, and living-off-the-land binaries that abuse legitimate tools like PowerShell to evade signature detection. Polymorphic and metamorphic variants change appearance to dodge antivirus hashes.",
          "Ransomware encrypts files or entire volumes, demanding payment for decryption keys. Double extortion threatens publication of stolen data if ransom is unpaid. Victims face downtime, regulatory notification, and reputational harm even with backups if attackers exfiltrated sensitive records.",
          "Defense combines offline backups, network segmentation, prompt patching, endpoint detection and response, and email filtering. Payment decisions involve law enforcement, legal counsel, and sanctions risks; recovery without paying is preferred when viable.",
        ]
      ),
      section(
        "supply-chain",
        "2.4 Supply chain, zero-days, and critical infrastructure",
        [
          "Supply chain attacks compromise vendors to reach many customers—signed software updates, IT management tools, or open-source package typosquatting. SolarWinds-style incidents demonstrated nation-state patience and broad blast radius. Software bill of materials (SBOM) and dependency scanning reduce unknown component risk.",
          "Zero-day vulnerabilities are unknown to the vendor and unpatched; exploit brokers sell them for high prices. Defenders rely on behavior detection, micro-segmentation, and least privilege because signature patches do not yet exist. Responsible disclosure coordinates researchers and vendors to ship fixes.",
          "Critical infrastructure—energy, water, healthcare, transportation—faces safety consequences beyond data theft. Regulations and sector ISACs share threat intelligence. Convergence of IT and operational technology increases attack surface on industrial control systems.",
        ],
        {
          citations: [
          {
            source: "MITRE ATT&CK Enterprise Matrix",
            url: "https://attack.mitre.org/matrices/enterprise/",
            note: "Knowledge base of adversary tactics and techniques linked to mitigations.",
          },
          {
            source: "CISA, Known Exploited Vulnerabilities Catalog",
            url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
            note: "U.S. government catalog of CVEs under active exploitation requiring prioritized patching.",
          },
        ],
        }
      ),
      section(
        "threat-intel",
        "2.5 Threat intelligence and information sharing",
        [
          "Threat intelligence transforms observables—IP addresses, file hashes, domains—into context about campaigns and actors. Strategic intelligence informs executive risk decisions; tactical intelligence feeds SIEM detection rules; operational intelligence supports incident triage. Sharing via ISACs and government advisories improves collective defense.",
          "Indicators must be tied to analytics to avoid alert fatigue; ephemeral infrastructure rotates quickly. Intelligence-driven hunting proactively searches environments for subtle signs missed by automated rules.",
          "Students should read vendor reports critically—marketing bias exists—and primary sources such as CISA alerts. Chapter 9 connects intelligence to incident response workflows.",
        ],
        {
          bulletPoints: [
          "IOC: indicator of compromise (hash, IP, domain, registry key)",
          "TTP: tactics, techniques, and procedures describing behavior",
          "ISAC: sector information sharing and analysis center",
          "STIX/TAXII: structured formats for exchanging threat data",
          "Hunting: hypothesis-driven search beyond alert-driven SOC work",
        ],
        }
      ),
    ],
    "Adversaries, vectors, and shared defense intelligence"
  ),
  chapter(
    "auth-identity",
    3,
    "Authentication, identity, and access management",
    [
      section(
        "identity-basics",
        "3.1 Identity, accounts, and directory services",
        [
          "Identity management establishes who a subject is in digital systems. Human users, service accounts, devices, and applications each receive identifiers—often email or SAM account names—stored in directories such as Microsoft Active Directory or cloud identity providers like Okta and Azure AD. Groups and roles aggregate permissions for scalable administration.",
          "Identity lifecycle covers provisioning on hire, changes during role transfers, and deprovisioning on termination—delayed offboarding is a frequent insider risk. Attribute stores carry department, manager, and clearance labels used by policy engines. Federation links identities across organizations via SAML or OIDC assertions.",
          "Strong identity hygiene disables stale accounts, enforces unique IDs, and audits privileged groups quarterly. Service accounts require owners and rotation schedules; shared break-glass accounts demand logging and rare use.",
        ]
      ),
      section(
        "authentication-factors",
        "3.2 Authentication factors and password policy",
        [
          "Authentication verifies claimed identity. Factors include something you know (password), something you have (security key, OTP device), something you are (biometric), and context signals (location, device health). Multi-factor authentication (MFA) combines categories to resist phishing and credential stuffing.",
          "Password policies historically emphasized rotation and complexity, encouraging predictable patterns. Modern guidance from NIST SP 800-63B favors long passphrases, breach password screening, and MFA over frequent mandatory rotation. Password managers generate unique secrets per site, reducing reuse damage when one vendor leaks hashes.",
          "Biometrics convenience trades with revocation difficulty—you cannot change fingerprints like passwords. Liveness detection mitigates photo spoofing in facial recognition. Storage of biometric templates demands encryption and legal review in several regions.",
        ],
        {
          bulletPoints: [
          "MFA: at least two factor categories for high-risk accounts",
          "Phishing-resistant MFA: FIDO2/WebAuthn security keys",
          "Credential stuffing: automated login using leaked password pairs",
          "Single sign-on (SSO): one authentication event, multiple applications",
          "Passwordless: magic links or keys reducing password attack surface",
        ],
        }
      ),
      section(
        "authorization-models",
        "3.3 Authorization models and least privilege",
        [
          "Authorization decides what an authenticated subject may do. Discretionary access control lets owners set permissions; mandatory access control assigns labels (classified levels) system-wide; role-based access control maps job roles to permission sets; attribute-based access control evaluates policies on user, resource, and environment attributes dynamically.",
          "Least privilege grants minimum rights needed for tasks, reducing blast radius of compromised accounts. Just-in-time elevation grants admin rights temporarily with approval workflows. Segregation of duties separates conflicting powers—no single person approves and pays invoices.",
          "Access reviews periodically recertify group memberships; orphaned permissions accumulate as projects end. Privileged access management vaults admin credentials, records session video, and rotates secrets automatically.",
        ]
      ),
      section(
        "zero-trust",
        "3.4 Zero trust and continuous verification",
        [
          "Traditional perimeter security assumed trust inside the corporate network. Zero trust principles—never trust, always verify—authenticate and authorize every connection regardless of location. Micro-segmentation limits east-west movement; device posture checks block unhealthy endpoints from sensitive apps.",
          "Policy engines combine identity, device compliance, location, and risk scores to grant conditional access—step-up MFA for risky sign-ins, block legacy protocols. Software-defined perimeters replace broad VPN access with application-specific tunnels.",
          "Implementation is incremental: inventory assets, strengthen identity, instrument telemetry, then shrink implicit trust zones. Legacy applications may require compensating controls until refactored.",
        ],
        {
          citations: [
          {
            source: "NIST Special Publication 800-63B, Digital Identity Guidelines (Authentication)",
            url: "https://pages.nist.gov/800-63-3/sp800-63b.html",
            note: "Influential guidance on passwords, MFA, and identity proofing.",
          },
        ],
        }
      ),
      section(
        "iam-operations",
        "3.5 IAM operations and common failures",
        [
          "Misconfigured cloud IAM—overly broad S3 policies, public storage buckets—is a leading breach cause. Infrastructure-as-code review and automated policy scanners catch drift. API keys embedded in repositories leak via public GitHub scans; secret scanning and rotation are essential.",
          "Account takeover via SIM swapping defeats SMS-based MFA; prefer app-based OTP or hardware keys for administrators. Session management should issue short-lived tokens, bind sessions to devices where feasible, and logout globally on compromise.",
          "Chapter 4 extends network controls; Chapter 8 addresses application session security. Identity remains the control plane of modern security—protect it accordingly.",
        ],
        {
          bulletPoints: [
          "Conditional access: policies reacting to risk signals at login",
          "PAM: vault and monitor privileged credentials",
          "IAM misconfiguration: top cloud incident root cause category",
          "Secrets management: HashiCorp Vault, cloud KMS, not code repos",
          "Offboarding: disable accounts and revoke tokens same day",
        ],
        }
      ),
    ],
    "Who you are, what you may access, and how trust is verified"
  ),
  chapter(
    "network-security",
    4,
    "Network security architecture",
    [
      section(
        "network-fundamentals",
        "4.1 Packets, protocols, and segmentation",
        [
          "Networks move data via layered protocols: Ethernet frames, IP routing, TCP/UDP transport, and application protocols such as HTTP, DNS, and SMB. Attackers abuse protocol design—IP spoofing, ARP poisoning, DNS cache poisoning—when controls are absent. Defenders map data flows to apply segmentation and monitoring.",
          "Network segmentation divides environments into zones—DMZ, internal corporate, production, management—connected by firewalls enforcing allow lists. VLANs and software-defined networking provide logical separation on shared hardware. Flat networks let ransomware spread unchecked.",
          "Network diagrams and asset inventories age quickly; automated discovery helps. Cloud virtual private clouds, security groups, and subnets replace physical wires but require equally rigorous rule management.",
        ]
      ),
      section(
        "firewalls-perimeters",
        "4.2 Firewalls, proxies, and perimeter evolution",
        [
          "Stateful firewalls track connection state, permitting return traffic for outbound-initiated sessions while blocking unsolicited inbound connections. Next-generation firewalls add application identification, intrusion prevention signatures, and TLS inspection—though inspection breaks end-to-end encryption trust unless carefully implemented.",
          "Proxies—forward and reverse—terminate connections, enabling caching, filtering, and anonymity. Secure web gateways inspect outbound web traffic for malware and data loss. Email gateways filter spam and malicious attachments before delivery.",
          "Perimeters blur with remote work and SaaS; egress filtering matters as much as ingress. Allowing arbitrary outbound connections lets malware phone home and exfiltrate data.",
        ],
        {
          bulletPoints: [
          "DMZ: semi-trusted zone for public-facing servers",
          "ACL: access control list on router or firewall",
          "NAT: network address translation hides internal addressing",
          "TLS inspection: corporate proxy decrypts traffic for scanning (policy/legal implications)",
          "Egress filtering: restrict outbound destinations and ports",
        ],
        }
      ),
      section(
        "vpn-remote",
        "4.3 VPN, remote access, and Wi-Fi security",
        [
          "Virtual private networks tunnel traffic across untrusted networks, encrypting payloads between endpoints. IPsec and SSL VPNs differ in deployment; split tunneling routes only corporate traffic through the VPN while other browsing exits locally—convenient but risky if policies are unclear.",
          "Zero-trust network access replaces broad VPN with per-application connectivity authenticated via identity provider. Misconfigured VPN appliances themselves become breach entry points; patch cadence is critical.",
          "Wireless security uses WPA3 where possible, disables legacy WEP, segments guest networks without route to internal assets, and protects management interfaces. Evil twin access points mimic legitimate SSIDs to capture credentials.",
        ]
      ),
      section(
        "ids-monitoring",
        "4.4 Intrusion detection, NDR, and logging",
        [
          "Intrusion detection systems signature-match known attacks; intrusion prevention systems block inline. Network detection and response uses behavioral analytics and machine learning on metadata—DNS queries, beaconing intervals, unusual volumes—to find novel threats. Full packet capture aids forensic depth at storage cost.",
          "NetFlow and IPFIX summarize conversations for baseline anomaly detection. DNS logging reveals command-and-control domains. TLS 1.3 encrypts more metadata, pushing visibility to endpoints.",
          "Centralized logging via SIEM correlates firewall, proxy, identity, and endpoint events. Detection rules require tuning to balance false positives against missed incidents.",
        ],
        {
          citations: [
          {
            source: "NIST Special Publication 800-41, Guidelines on Firewalls and Firewall Policy",
            url: "https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final",
            note: "Reference for firewall types, policies, and deployment considerations.",
          },
        ],
        }
      ),
      section(
        "cloud-network",
        "4.5 Cloud networking and hybrid environments",
        [
          "Cloud providers offer security groups as virtual firewalls, private endpoints avoiding public internet paths, and transit gateways connecting hybrid data centers. Misopened storage and databases remain common; automated compliance scanners flag public exposure.",
          "Hybrid cloud links on-premises Active Directory with cloud identity; latency and split-brain DNS cause outages attackers may exploit during chaos. Disaster recovery spans regions with replicated networking and tested failover runbooks.",
          "Chapter 5 addresses endpoints executing on these networks; Chapter 8 covers application-layer controls above transport.",
        ],
        {
          bulletPoints: [
          "Security group: stateful rules attached to cloud instances",
          "Private link: access SaaS without public internet traversal",
          "Hybrid: consistent identity and logging across on-prem and cloud",
          "DDoS: volumetric attacks mitigated by scrubbing centers and rate limits",
          "Network baseline: know normal to spot anomalies",
        ],
        }
      ),
    ],
    "Segmentation, monitoring, and cloud connectivity"
  ),
  chapter(
    "endpoint-security",
    5,
    "Endpoint and device security",
    [
      section(
        "endpoint-threats",
        "5.1 Endpoints as primary targets",
        [
          "Endpoints—laptops, desktops, servers, mobile phones—execute user actions and store local data. Compromise grants attackers credentials in memory, access tokens in browsers, and staging grounds for lateral movement. BYOD blends personal and corporate risk unless containerized.",
          "Attack techniques include malicious macros, exploit kits, pass-the-hash using captured NTLM credentials, and theft of browser cookies bypassing MFA session binding. Ransomware encrypts from endpoints spreading via SMB.",
          "Hardening reduces attack surface: disable unnecessary services, apply baselines, enforce full-disk encryption, and require screen locks. Asset management inventories owners and patch status.",
        ]
      ),
      section(
        "edr-xdr",
        "5.2 EDR, XDR, and antivirus evolution",
        [
          "Antivirus relied on signatures of known malware; polymorphic threats limited effectiveness. Endpoint detection and response continuously collects telemetry—process creation, registry edits, network connections—and applies behavioral analytics to detect chains indicative of attack. Extended detection and response correlates endpoint, email, identity, and cloud signals.",
          "Response actions isolate hosts from the network, kill processes, and quarantine files. Analysts investigate timelines in centralized consoles. False positives require tuning; false negatives drive purple team validation.",
          "Application allow listing permits only approved binaries on high-assurance systems. Memory protections—DEP, ASLR—raise exploit cost. Macro blocking and markup stripping reduce office document risk.",
        ],
        {
          bulletPoints: [
          "EDR: continuous endpoint telemetry and detection",
          "XDR: cross-domain correlation and response",
          "IOC matching: hash and behavior hits on endpoints",
          "Isolation: contain compromised machine during investigation",
          "Baseline: standard secure image (golden image) for provisioning",
        ],
        }
      ),
      section(
        "patch-vuln",
        "5.3 Patching, vulnerability management, and configuration",
        [
          "Vulnerability scanners identify missing patches and misconfigurations. Risk-based prioritization focuses on internet-facing systems and actively exploited CVEs. Patch windows balance uptime with exposure; emergency patches bypass normal change advisory board timelines when critical.",
          "Configuration management enforces CIS benchmarks or vendor security guides—disabling SMBv1, requiring LDAP signing, hardening PowerShell logging. Drift detection alerts when manual changes weaken posture.",
          "Mobile device management deploys profiles, enforces encryption, and wipes lost devices remotely. Jailbroken phones may be blocked from corporate email.",
        ]
      ),
      section(
        "server-workload",
        "5.4 Servers, containers, and workload protection",
        [
          "Servers host databases, applications, and domain controllers—high-value targets. Role separation isolates domain controllers from internet browsing. Jump hosts bastion administrative access with session recording.",
          "Containers package applications with dependencies; image scanning finds vulnerable libraries before deployment. Kubernetes RBAC, network policies, and secrets stored in vaults—not environment variables in images—reduce cluster compromise impact.",
          "Cloud workload protection platforms monitor virtual machines and containers uniformly. Immutable infrastructure replaces compromised servers rather than cleaning in place when feasible.",
        ],
        {
          citations: [
          {
            source: "Center for Internet Security (CIS) Benchmarks",
            url: "https://www.cisecurity.org/cis-benchmarks",
            note: "Community-hardened configuration guides widely adopted for servers and endpoints.",
          },
        ],
        }
      ),
      section(
        "physical-removable",
        "5.5 Physical security and removable media",
        [
          "Physical access bypasses many logical controls—cold boot attacks on encryption, USB implant devices, and theft of laptops from vehicles. Clean desk policies and cable locks reduce opportunistic loss. Data centers enforce badges, biometrics, and mantraps.",
          "Removable media policies block unauthorized USB storage or encrypt approved drives. Air-gapped networks isolate critical systems at cost of operational friction.",
          "Endpoint security succeeds when paired with identity, network segmentation, and user training from Chapter 7. Incidents often begin on endpoints; detection speed determines damage.",
        ],
        {
          bulletPoints: [
          "Full-disk encryption: BitLocker, FileVault, LUKS",
          "USB control: block or allow-list devices",
          "Golden image: automate provisioning for consistency",
          "Local admin rights: minimize on workstations",
          "Forensics: preserve endpoint disk image before remediation",
        ],
        }
      ),
    ],
    "Laptops, servers, and workloads under attack"
  ),
  chapter(
    "cryptography",
    6,
    "Cryptography for confidentiality and integrity",
    [
      section(
        "crypto-concepts",
        "6.1 Goals and terminology",
        [
          "Cryptography provides mathematical tools for confidentiality (encryption), integrity (hashing, MACs), authentication (digital signatures), and key exchange. Kerckhoffs's principle applies: algorithms are public; keys must remain secret. Cryptanalysis studies breaking systems; modern standards resist known attacks when implemented correctly.",
          "Plaintext is original data; ciphertext is encrypted output. Symmetric algorithms use one key for encrypt and decrypt; asymmetric (public-key) uses key pairs—public key encrypts or verifies, private key decrypts or signs. Hybrid TLS handshakes combine both for performance.",
          "Security depends on key length, mode of operation, random number quality, and implementation avoiding side channels—timing leaks, cache attacks. Use vetted libraries; never invent ciphers.",
        ]
      ),
      section(
        "symmetric-asymmetric",
        "6.2 Symmetric ciphers and public-key cryptography",
        [
          "AES (Advanced Encryption Standard) is the dominant symmetric cipher with 128/192/256-bit keys in modes such as GCM providing authenticated encryption—confidentiality and integrity together. Poor choices like ECB mode leak patterns in data.",
          "RSA and elliptic curve cryptography (ECC) underpin TLS certificates and key exchange. Diffie-Hellman and ECDH establish shared secrets over insecure channels. Post-quantum cryptography research prepares replacements threatened by future quantum computers breaking current public-key schemes.",
          "Hash functions SHA-256 and SHA-3 map arbitrary input to fixed digests; collision resistance prevents forging documents. Password storage uses slow algorithms—bcrypt, scrypt, Argon2—with unique salts per user.",
        ],
        {
          bulletPoints: [
          "AES-GCM: preferred authenticated symmetric encryption mode",
          "RSA/ECC: public-key encryption and digital signatures",
          "Salt: random value per password before hashing",
          "KDF: key derivation function stretching secrets",
          "Quantum threat: harvest-now-decrypt-later motivates planning",
        ],
        }
      ),
      section(
        "pki-tls",
        "6.3 PKI, certificates, and TLS",
        [
          "Public key infrastructure binds public keys to identities via X.509 certificates signed by certificate authorities. Browsers trust hundreds of CAs; mis-issued or compromised CAs enable man-in-the-middle attacks. Certificate transparency logs audit issuance.",
          "TLS secures web and API traffic: handshake negotiates cipher suites, authenticates server (and optionally client) certificates, establishes session keys. TLS 1.3 removes weak options and speeds handshakes. HSTS headers force HTTPS; misconfiguration leaves downgrade paths.",
          "Internal PKI issues certificates for microservices and VPNs. Rotation before expiry prevents outages. Private keys live in hardware security modules or cloud KMS with access policies.",
        ]
      ),
      section(
        "applications-crypto",
        "6.4 Applications: signing, email, disk encryption",
        [
          "Digital signatures prove origin and integrity of code and documents—software publishers sign binaries; S/MIME and PGP secure email though adoption varies. Encrypting data at rest on disks and databases complements TLS in transit.",
          "Key management defines generation, distribution, storage, rotation, and destruction. Dual control for master keys reduces insider risk. Backup of keys is necessary to avoid permanent data loss; escrow debates balance recovery versus abuse.",
          "Cryptographic failures in applications—hard-coded keys, weak randomness, outdated protocols—appear in OWASP Top 10 categories. Developers must follow library documentation and disable legacy SSL.",
        ],
        {
          citations: [
          {
            source: "NIST Special Publication 800-175B, Guideline for Using Cryptographic Standards",
            url: "https://csrc.nist.gov/publications/detail/sp/800-175b/final",
            note: "Guidance on selecting and using approved cryptographic algorithms.",
          },
        ],
        }
      ),
      section(
        "crypto-failures",
        "6.5 Common failures and operational practice",
        [
          "Rolling custom crypto, reusing nonces in GCM, and insufficient entropy break systems silently. Certificate expiry outages are operational, not theoretical—automate monitoring. Downgrade attacks force weak ciphers unless strictly disabled.",
          "Law enforcement and privacy debates around encryption backdoors illustrate policy tension: strong encryption protects commerce and activists; investigators seek access with warrants. Technical reality—backdoors weaken security for everyone—is central to informed debate.",
          "Students should practice TLS inspection labs, cert parsing with OpenSSL, and password hash verification in controlled environments. Cryptography enables trust at scale when implemented and operated correctly.",
        ],
        {
          bulletPoints: [
          "Never roll your own crypto; use standard libraries",
          "Certificate expiry monitoring: automated alerts 30 days ahead",
          "Disable SSLv3, TLS 1.0/1.1 on servers",
          "HSM/KMS: protect private keys from application memory theft",
          "Encrypt backups and test restoration regularly",
        ],
        }
      ),
    ],
    "Math, protocols, and trustworthy communication"
  ),
  chapter(
    "social-engineering",
    7,
    "Social engineering and human factors",
    [
      section(
        "psychology-persuasion",
        "7.1 Psychology of persuasion and manipulation",
        [
          "Social engineering exploits human cognition rather than software flaws. Attackers leverage authority, urgency, scarcity, familiarity, and reciprocity to bypass rational evaluation. Pretexting invents scenarios—IT support calls, vendor invoices—to elicit secrets. Spear phishing tailors lures using OSINT from LinkedIn and press releases.",
          "Kevin Mitnick's historical demonstrations showed that convincing dialogue often succeeds faster than exploit development. Defenders counter with culture, clear reporting channels, and praise for skepticism—not blame for mistakes when users report quickly.",
          "Security awareness training must be continuous and realistic; annual checkbox videos fail. Simulated phishing with immediate education improves behavior metrics without shaming individuals publicly.",
        ]
      ),
      section(
        "phishing-bec",
        "7.2 Phishing, vishing, smishing, and business email compromise",
        [
          "Email phishing links to credential harvesting sites mimicking Microsoft or banking login pages. Attachment malware may be password-protected zip files evading scanners. Vishing (voice) and smishing (SMS) escalate during tax season and package delivery peaks.",
          "Business email compromise impersonates executives requesting wire transfers or gift card purchases. Deepfake audio and video add believability to urgent payment requests. Finance teams need out-of-band verification callbacks to known numbers, not reply-to addresses.",
          "Technical controls—SPF, DKIM, DMARC—reduce spoofing of domains you own but not look-alike domains. External email banners warn users; URL rewriting and attachment sandboxing add layers.",
        ],
        {
          bulletPoints: [
          "Spear phishing: targeted messages using personal context",
          "Whaling: phishing aimed at executives",
          "BEC: fraud via compromised or impersonated business email",
          "DMARC: policy for handling failing authentication messages",
          "Report button: easy path to security operations center",
        ],
        }
      ),
      section(
        "physical-social",
        "7.3 Physical social engineering and insider threats",
        [
          "Tailgating follows authorized personnel through doors. Impersonation uniforms—fake technicians, delivery drivers—gain facility access. Dumpster diving recovers discarded documents; shoulder surfing observes screens and PINs.",
          "Insider threats include negligent employees mishandling data and malicious insiders exfiltrating IP before resignation. User behavior analytics baselines normal activity flagging large downloads at odd hours. Exit interviews and immediate access revocation reduce retaliation risk.",
          "Third-party contractors inherit access; vendor management must extend monitoring and offboarding discipline.",
        ]
      ),
      section(
        "culture-programs",
        "7.4 Building a security-aware culture",
        [
          "Leadership modeling—executives following MFA and reporting phish—signals priority. Metrics track report rates, simulation click rates, and time-to-report rather than punishing clicks. Security champions in departments translate policies into local practice.",
          "Usable security reduces risky workarounds: SSO, password managers, and clear VPN instructions. Friction without explanation breeds shadow IT.",
          "Integrate human factors with technical chapters: even perfect cryptography fails if users paste secrets into chat. Chapter 8 addresses developer responsibilities; Chapter 9 addresses response when users report incidents.",
        ],
        {
          citations: [
          {
            source: "SANS Security Awareness Report (annual)",
            url: "https://www.sans.org/security-awareness-training/resources/security-awareness-report",
            note: "Industry survey on awareness program practices and maturity benchmarks.",
          },
        ],
        }
      ),
      section(
        "deepfakes-future",
        "7.5 Deepfakes, AI lures, and emerging manipulation",
        [
          "Generative AI produces convincing phishing text, images, and voice clones at low cost. Defenders adopt AI-assisted detection, watermarking standards, and verification rituals for high-risk transactions. Media literacy education extends to video and audio skepticism.",
          "Regulation and platform policies evolve; organizations should update fraud playbooks and train finance and HR on new lures. Pair technical filtering with procedural controls—dual approval for payments above thresholds.",
          "Human factors remain permanent in security; technology shifts tactics but not the need for skeptical, supported users.",
        ],
        {
          bulletPoints: [
          "Verify out-of-band: call known numbers, not reply threads",
          "Gift card scams: hallmark of fraud, never legitimate vendor payment",
          "AI-generated lures: expect fewer spelling errors, more personalization",
          "Report quickly: rapid containment limits credential reuse",
          "No blame culture: encourage reporting over hiding mistakes",
        ],
        }
      ),
    ],
    "When attackers target people, not packets"
  ),
  chapter(
    "app-web-security",
    8,
    "Application and web security",
    [
      section(
        "sdlc-secure",
        "8.1 Secure software development lifecycle",
        [
          "Applications process the data attackers want. Secure SDLC embeds security requirements, threat modeling, secure coding standards, static and dynamic analysis, dependency scanning, and penetration testing before production. Shift-left finds flaws cheaper than post-breach remediation.",
          "Threat modeling diagrams data flows, trust boundaries, and STRIDE categories—spoofing, tampering, repudiation, information disclosure, denial of service, elevation of privilege—for each component. Abuse cases describe attacker stories beyond functional requirements.",
          "Developers learn OWASP Top 10 vulnerabilities and language-specific pitfalls. Code review checklists include authorization on every endpoint, not only authentication at login.",
        ]
      ),
      section(
        "web-vulns",
        "8.2 Web vulnerabilities and mitigations",
        [
          "Injection flaws—SQL, OS command, LDAP—occur when untrusted input concatenates into queries or commands. Parameterized queries and prepared statements separate code from data. Cross-site scripting (XSS) injects script into pages viewed by others; context-aware encoding and Content Security Policy mitigate.",
          "Broken authentication includes weak session IDs, missing logout, and credential stuffing. Secure cookies use HttpOnly, Secure, SameSite attributes. Cross-site request forgery tricks browsers into performing actions; anti-CSRF tokens and SameSite cookies defend.",
          "Security misconfiguration exposes debug endpoints, default credentials, and verbose errors. Sensitive data exposure from missing encryption and broken access control—IDOR letting users change URL IDs to access others' records—dominate bug bounty findings.",
        ],
        {
          bulletPoints: [
          "SQL injection: untrusted input alters database queries",
          "XSS: stored, reflected, DOM-based script injection",
          "CSRF: forged requests using victim's session",
          "IDOR: insecure direct object reference via predictable IDs",
          "SSRF: server tricked into requesting internal resources",
        ],
        }
      ),
      section(
        "api-cloud",
        "8.3 APIs, microservices, and cloud-native risks",
        [
          "REST and GraphQL APIs require authentication, rate limiting, input validation, and schema restrictions to prevent excessive data exposure. API keys in mobile apps are extractable; use short-lived tokens and backend-for-frontend patterns.",
          "Serverless functions scale quickly but misIAM grants public invoke rights. Secrets in environment variables leak via logs; use managed secret stores. Container image vulnerabilities propagate rapidly through CI/CD pipelines without scanning gates.",
          "Supply chain security signs artifacts, verifies dependencies, and monitors for typosquatting package names in public registries.",
        ]
      ),
      section(
        "testing-assurance",
        "8.4 Testing, bug bounty, and assurance",
        [
          "Static application security testing scans source for patterns; dynamic testing probes running apps; interactive testing combines both with runtime instrumentation. Penetration testers chain vulnerabilities into realistic exploit paths. Bug bounty programs crowdsource findings with responsible disclosure rules.",
          "Web application firewalls filter known attack strings but are not substitutes for fixing code. Capture-the-flag competitions build skills ethically.",
          "Compliance frameworks may require annual testing for certain data types; store reports with remediation tickets tracked to closure.",
        ],
        {
          citations: [
          {
            source: "OWASP Top Ten Web Application Security Risks",
            url: "https://owasp.org/www-project-top-ten/",
            note: "Widely used prioritization of critical web application vulnerability categories.",
          },
          {
            source: "OWASP Application Security Verification Standard (ASVS)",
            url: "https://owasp.org/www-project-application-security-verification-standard/",
            note: "Detailed security requirements checklist for application verification.",
          },
        ],
        }
      ),
      section(
        "devsecops",
        "8.5 DevSecOps and runtime protection",
        [
          "DevSecOps integrates security tools into CI/CD: fail builds on critical CVEs, sign containers, deploy infrastructure as code scanned by policy-as-code engines. Runtime application self-protection can block exploit payloads with performance trade-offs.",
          "Logging and tracing across microservices aid forensics; correlation IDs link user sessions to backend errors without logging passwords. Privacy regulations constrain log content—avoid personal data in debug traces.",
          "Application security closes the loop from Chapters 3–6: identity at the edge, crypto on the wire, hardened hosts underneath, and safe code at the top.",
        ],
        {
          bulletPoints: [
          "Threat model early: architecture drives risk",
          "Parameterized queries: default for database access",
          "Dependency scanning: Software Composition Analysis in CI",
          "Secrets: never commit; rotate on exposure",
          "Least privilege: application service accounts minimal rights",
        ],
        }
      ),
    ],
    "Building and breaking software responsibly"
  ),
  chapter(
    "incident-response",
    9,
    "Incident response and resilience",
    [
      section(
        "ir-lifecycle",
        "9.1 Incident response lifecycle",
        [
          "Incident response prepares organizations to detect, contain, eradicate, and recover from security events while preserving evidence and meeting legal duties. NIST SP 800-61 outlines preparation, detection and analysis, containment, eradication and recovery, and post-incident activity.",
          "Preparation includes policies, runbooks, trained teams, retainer contracts with forensic firms, and communication templates for executives, customers, and regulators. Tabletop exercises simulate ransomware and data breach scenarios revealing gaps before real crises.",
          "Severity classification routes events: low-risk malware on one host versus enterprise-wide ransomware. Escalation criteria define when to activate crisis management and external counsel.",
        ]
      ),
      section(
        "detection-triage",
        "9.2 Detection, triage, and forensics",
        [
          "SOC analysts investigate alerts from SIEM, EDR, and user reports. Triage confirms true positives, scopes affected assets, and identifies initial access vector. Forensic imaging preserves disk and memory before remediation destroys artifacts.",
          "Timeline reconstruction correlates logs across identity, proxy, email, and endpoint. Indicators publish to threat intel feeds and block lists. Chain of custody documents evidence handling for potential litigation.",
          "Communication balances transparency with accuracy—premature breach announcements confuse customers; delayed notification violates laws in many jurisdictions. Legal and PR partners coordinate messaging.",
        ],
        {
          bulletPoints: [
          "Containment: isolate hosts, disable accounts, block domains",
          "Eradication: remove malware, close vulnerabilities, reset credentials",
          "Recovery: restore from clean backups, validate integrity",
          "Lessons learned: post-incident review with action items",
          "Preserve evidence: image disks before wipe",
        ],
        }
      ),
      section(
        "ransomware-breach",
        "9.3 Ransomware and data breach response",
        [
          "Ransomware playbooks prioritize identifying strain, isolating networks, assessing backup integrity offline, and deciding law enforcement involvement. Paying ransom does not guarantee decryption and may fund sanctioned entities.",
          "Data breaches triggering notification laws require knowing what personal data was accessed, by whom, and risk of harm. Credit monitoring offers may follow. Regulators expect timelines—72 hours for GDPR personal data breaches to supervisory authority in many cases, with variations.",
          "Cyber insurance policies cover investigation costs, legal fees, and sometimes ransom—read exclusions for war clauses and failure to maintain stated controls.",
        ],
        {
          laws: [
          {
            name: "NIST SP 800-61 Rev. 2, Computer Security Incident Handling Guide",
            year: "2012",
            summary: "Foundational U.S. guidance for incident handling processes and teams.",
          },
        ],
        }
      ),
      section(
        "bc-dr",
        "9.4 Business continuity and disaster recovery",
        [
          "Business continuity maintains critical functions during disruption; disaster recovery restores IT systems to defined recovery time and point objectives. Backups must be encrypted, tested quarterly, and isolated from production networks ransomware cannot reach.",
          "High availability architectures—load balancers, multi-region databases—reduce outage duration. Crisis communication plans reach employees, customers, and partners through alternate channels if email is down.",
          "Resilience accepts that incidents will occur; speed and clarity of recovery differentiate mature organizations.",
        ],
        {
          citations: [
          {
            source: "CISA, StopRansomware Guidance and Resources",
            url: "https://www.cisa.gov/stopransomware",
            note: "U.S. government hub for ransomware prevention and response resources.",
          },
        ],
        }
      ),
      section(
        "metrics-improvement",
        "9.5 Metrics, legal coordination, and improvement",
        [
          "Mean time to detect and mean time to respond measure program effectiveness trending down as maturity rises. After-action reports assign owners and deadlines for control improvements—patching gaps, MFA rollout, segmentation projects.",
          "Legal holds pause log deletion when litigation is anticipated. Regulatory exams may follow for covered entities. Share anonymized lessons with ISAC peers to strengthen sector defense.",
          "Chapter 10 connects incidents to compliance reporting and career paths in IR teams. Practice runbooks make theory actionable when adrenaline is high.",
        ],
        {
          bulletPoints: [
          "Tabletop exercise: simulated incident without production impact",
          "Runbook: step-by-step actions per incident type",
          "MTTD/MTTR: detection and response time KPIs",
          "Backup test: prove restore works, not just backup job success",
          "Communication: internal war room and external status page",
        ],
        }
      ),
    ],
    "Detect, contain, recover, and learn"
  ),
  chapter(
    "compliance-privacy-careers",
    10,
    "Compliance, privacy, and cybersecurity careers",
    [
      section(
        "privacy-regulations",
        "10.1 Privacy principles and major regulations",
        [
          "Privacy concerns lawful, fair processing of personal data—identifiers, financial, health, location, online behavior. Principles include purpose limitation, data minimization, accuracy, storage limits, integrity and confidentiality, and accountability. Privacy is broader than security but depends on it.",
          "The EU General Data Protection Regulation (GDPR) applies to processing of EU residents' data, imposing lawful bases, data subject rights (access, erasure, portability), data protection impact assessments for high-risk processing, and breach notification duties. Penalties can reach four percent of global turnover. This textbook summarizes concepts for education; legal counsel interprets obligations.",
          "U.S. law is sectoral: HIPAA for covered health information, GLBA for financial institutions, FERPA for education records, state laws like CCPA/CPRA granting California consumers rights. Emerging comprehensive state privacy laws multiply compliance matrices for national businesses.",
        ],
        {
          laws: [
          {
            name: "GDPR (General Data Protection Regulation)",
            year: "2016 (enforceable 2018)",
            summary:
              "EU regulation on personal data processing, rights, and breach notification. Educational summary—not legal advice.",
          },
          {
            name: "HIPAA Security Rule",
            year: "2003",
            summary:
              "U.S. safeguards for electronic protected health information—administrative, physical, technical controls.",
          },
        ],
        bulletPoints: [
          "Data subject rights: access, rectification, erasure, restrict processing",
          "Lawful basis: consent, contract, legal obligation, legitimate interests (context-dependent)",
          "DPIA: assess high-risk processing before launch",
          "Processor agreements: contracts with vendors handling personal data",
          "Privacy by design: embed controls in systems from inception",
        ],
        }
      ),
      section(
        "compliance-frameworks",
        "10.2 Compliance frameworks and audits",
        [
          "SOC 2 reports attest service organization controls relevant to security, availability, confidentiality, processing integrity, and privacy—Type II over a period is stronger than point-in-time Type I. ISO 27001 certification demonstrates ISMS maturity internationally.",
          "PCI DSS governs payment card data environments with network segmentation, encryption, and testing requirements. FedRAMP authorizes cloud services for U.S. federal agencies with rigorous documentation.",
          "Audits evidence control operation; they do not guarantee absence of breaches. Continuous compliance monitoring automates configuration checks against baselines. Gap assessments roadmap investments for executives.",
        ],
        {
          citations: [
          {
            source: "European Data Protection Board, GDPR Guidelines",
            url: "https://edpb.europa.eu/our-work-tools/general-guidance/gdpr-guidelines-recommendations-best-practices_en",
            note: "Official guidance interpreting GDPR articles for organizations.",
          },
        ],
        }
      ),
      section(
        "governance-ethics",
        "10.3 Governance, ethics, and responsible disclosure",
        [
          "Security professionals handle sensitive data during investigations; ethics require confidentiality, proportionate access, and refusal to participate in illegal hacking. Bug bounty and coordinated vulnerability disclosure give vendors time to patch before public release.",
          "Export controls and computer fraud laws define authorized boundaries—penetration tests need written scope. Whistleblower protections vary; document concerns through proper channels.",
          "Diversity strengthens teams solving global problems; mentorship and professional associations (ISC2, ISACA, OWASP chapters) support networking.",
        ]
      ),
      section(
        "career-pathways",
        "10.4 Career pathways and continuing education",
        [
          "Entry roles include SOC analyst tier 1, IT support with security focus, and GRC analyst tracking controls. Mid-career paths branch into incident response, penetration testing, security architecture, cloud security, and privacy engineering. Leadership roles—CISO, director—require communication with boards on risk in business terms.",
          "Hands-on labs (TryHackMe, Hack The Box), capture-the-flag, and home labs build skills beyond exams. Soft skills—writing clear reports, translating risk to executives—differentiate senior practitioners.",
          "AI augments defenders through alert summarization and hunting hypotheses while also empowering attackers; continuous learning is mandatory. Pair this textbook with AI fundamentals for modern hybrid threats.",
        ],
        {
          bulletPoints: [
          "Security+: broad baseline certification",
          "CySA+/PenTest+: defensive and offensive mid-level paths",
          "CISSP: experienced practitioner management certification",
          "OSCP: hands-on penetration testing credential",
          "Privacy: CIPP/E or CIPP/US for privacy professionals",
        ],
        }
      ),
      section(
        "closing-citizen",
        "10.5 Synthesis: informed users and professionals",
        [
          "Cybersecurity protects the confidentiality, integrity, and availability of information upon which economies and democracies depend. No single product solves risk; layered controls, skilled people, and governed processes interlock. Incidents will occur; preparation determines whether they become catastrophes.",
          "Readers should articulate the CIA triad, describe phishing and MFA, explain why patching matters, outline incident response phases, and recognize when privacy law triggers breach notification—then seek specialist counsel for implementation.",
          "Whether you pursue a security career or another field, you remain part of the defensive ecosystem. Skepticism, reporting, and respect for others' data are civic duties in a connected world.",
        ],
        {
          laws: [
          {
            name: "NIST Privacy Framework",
            year: "2020",
            summary:
              "Voluntary tool improving privacy outcomes through Identify-Predict-Prevent-Detect-Respond functions.",
          },
        ],
        }
      ),
    ],
    "Law, policy, and building a security career"
  ),
];
