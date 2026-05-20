import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const TECH_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Technology for Beginners",
  subtitle:
    "ForgEd textbook — devices, software, networks, accounts, safety, accessibility, and digital citizenship",
  paragraphs: [
    "Digital technology is no longer a separate specialty confined to IT departments. Banking, schooling, healthcare scheduling, job applications, and government services all assume you can use a smartphone or computer confidently, protect your accounts, and recognize common scams. This course builds that confidence from the ground up — not by memorizing jargon, but by understanding how pieces fit together so new interfaces feel familiar instead of frightening.",
    "You do not need a engineering degree to be digitally literate. You need clear mental models: what a device does, what an operating system controls, how apps receive updates, how the internet differs from Wi‑Fi, why cloud accounts matter, and what attackers typically exploit. When something breaks, structured troubleshooting beats random button pressing. When society debates AI or privacy law, informed citizens can participate without panic or blind trust.",
    "Ten chapters walk from hardware ecosystems through operating systems, applications, browsers, communication tools, cloud services, personal security, accessibility, troubleshooting, and staying current as technology changes. Sections use plain language with precise terms where precision helps. Citations point to reputable public resources — NIST, FTC, W3C, major platform documentation — for deeper reading. This is general education, not certification prep for network engineers.",
  ],
};

export const TECH_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "devices-ecosystem",
    1,
    "The device ecosystem: phones, computers, and peripherals",
    [
      section(
        "categories",
        "1.1 Categories of devices and what each is optimized for",
        [
          "Consumer technology clusters into smartphones, tablets, laptop and desktop computers, wearables, smart home gadgets, and specialized devices such as e-readers or gaming consoles. Smartphones prioritize portability, cellular connectivity, cameras, and all-day battery life; they run mobile operating systems (iOS, Android) with touch-first interfaces. Laptops balance portability with keyboard productivity for documents, spreadsheets, and multitasking. Desktops trade mobility for performance, repairability, and large displays favored for video editing, software development, and accessibility setups with multiple monitors.",
          "Tablets occupy a middle ground — excellent for reading, video, and stylus drawing, weaker for heavy typing unless paired with keyboards. Wearables (smartwatches, fitness bands) extend notifications and health sensing to the wrist with limited input surfaces. Understanding the category helps you choose the right tool: you would not rely on a watch to write a ten-page report, but it may remind you to stand or monitor heart rate during exercise.",
          "Peripherals — keyboards, mice, trackpads, printers, external drives, webcams, microphones, headsets — extend core devices. Universal Serial Bus (USB) and wireless standards (Bluetooth, Wi‑Fi) connect them. Compatibility depends on ports (USB-C, Lightning, HDMI) and drivers software installs to translate hardware signals into actions applications understand.",
        ],
        {
          bulletPoints: [
            "Match device category to primary task: phone for mobility, laptop for writing, desktop for heavy work",
            "Check port types (USB-C, HDMI) before buying cables or docks",
            "Peripherals need compatible drivers — verify OS support before purchase",
            "Tablets excel at consumption; pair with keyboard for light productivity",
            "Wearables complement phones; they rarely replace full computers",
          ],
        }
      ),
      section(
        "components",
        "1.2 Inside the box: processor, memory, storage, and battery",
        [
          "The central processing unit (CPU) executes instructions — opening apps, rendering web pages, encoding video. More cores and newer generations generally improve responsiveness, but everyday email and browsing do not require top-tier chips. Random access memory (RAM) holds data applications need quickly; insufficient RAM causes sluggish app switching as the system swaps data to slower storage.",
          "Storage retains files when power is off. Solid-state drives (SSDs) are faster and more shock-resistant than older spinning hard disk drives (HDDs). Cloud storage supplements local space but requires network access and account security. Batteries in portable devices degrade over charge cycles; heat accelerates wear. Battery health settings and replacement programs matter for multi-year use.",
          "Displays vary by resolution (pixel count), refresh rate (how often the screen redraws per second), and panel technology (LCD, OLED). Higher resolution sharpens text; OLED often improves contrast and dark-mode efficiency on phones. Accessibility features tie to display size and quality — larger text needs adequate pixels to remain crisp.",
        ],
        {
          bulletPoints: [
            "CPU and RAM drive responsiveness; storage type (SSD vs HDD) affects boot and file open speed",
            "Low storage triggers OS slowdowns — keep free space for updates and caches",
            "Battery health degrades with heat and age; check settings before blaming 'slowness'",
            "More megapixels ≠ better photos — sensor and software matter for everyday shots",
            "Plan backups before storage upgrades or device replacement",
          ],
          citations: [
            {
              source: "Apple Support, Maximizing Battery Life and Lifespan",
              url: "https://support.apple.com/en-us/HT204054",
            },
          ],
        }
      ),
      section(
        "mobile-desktop",
        "1.3 Mobile versus desktop: convergence and differences",
        [
          "Mobile and desktop ecosystems converged — you can edit documents on a phone and take calls from a laptop — but differences remain. Mobile apps often assume intermittent connectivity and touch gestures; desktop apps assume precise pointers, larger windows, and file system access. Notification models differ: phones interrupt more aggressively; desktops historically stayed calmer until messaging apps imported mobile urgency.",
          "Cross-device continuity features — Apple Handoff, Microsoft Phone Link, Google ecosystem sync — let you start tasks on one device and continue on another when signed into the same account. These conveniences depend on cloud accounts and encryption choices discussed later.",
          "When purchasing, consider total cost of ownership: cases, insurance, accessories, subscription software, and repair availability. Right-to-repair movements push manufacturers toward manuals and parts; some devices remain difficult to service without authorized shops.",
        ],
        {
          bulletPoints: [
            "Same account can link phone, tablet, and computer for handoff features",
            "Mobile apps assume touch; desktop apps assume keyboard, mouse, and larger windows",
            "Notification overload often starts on phone — tune per app on each platform",
            "Compare repair costs and parts availability before buying closed designs",
            "Factor subscriptions and cloud storage into multi-year ownership cost",
          ],
        }
      ),
      section(
        "networks-basics",
        "1.4 Connectivity: cellular, Wi‑Fi, and Bluetooth",
        [
          "Cellular networks (4G LTE, 5G) connect phones through carrier towers with SIM or eSIM profiles identifying your subscription. Data plans cap usage or throttle speeds after thresholds. Wi‑Fi connects devices within homes, offices, and public hotspots via routers linked to internet service providers (ISPs). Wi‑Fi does not replace cellular outdoors; it complements it indoors where cabling is cheaper than tower density.",
          "Bluetooth pairs nearby devices — headphones, keyboards, car systems — over short distances with lower power draw than Wi‑Fi. Pairing should be intentional to prevent unknown devices from connecting. Airplane mode disables radios during flight regulations; Wi‑Fi and Bluetooth can often be re-enabled separately in-flight when allowed.",
          "Understanding which network you use matters for security: public Wi‑Fi may be snooped; cellular is generally safer for sensitive transactions though not risk-free. Virtual private networks (VPNs) encrypt traffic on untrusted networks — covered in the security chapter.",
        ],
        {
          bulletPoints: [
            "Wi‑Fi is local; cellular uses carrier towers — know which you are on before sensitive tasks",
            "Pair Bluetooth only with devices you recognize; forget unknown pairings",
            "Airplane mode disables radios; re-enable Wi‑Fi/Bluetooth separately when allowed",
            "Public hotspots need HTTPS and caution — avoid banking on untrusted networks without VPN",
            "Router placement and band choice (2.4 vs 5 GHz) affect home speed and range",
          ],
          citations: [
            {
              source: "CISA, Securing Wireless Networks",
              url: "https://www.cisa.gov/news-events/news/securing-wireless-networks",
            },
          ],
        }
      ),
      section(
        "choosing-devices",
        "1.5 Choosing and maintaining your setup",
        [
          "Match device to tasks and budget: students need reliable video calls and document editing; photographers need storage and color-accurate screens; seniors may prioritize large text and support. Refurbished units from manufacturers or reputable sellers reduce cost with warranties if certified.",
          "Maintenance includes operating system updates, storage cleanup, backup verification, and physical care — cases, screen protectors, avoiding liquid damage. Restarting clears temporary glitches. Knowing serial numbers and account passwords before loss speeds recovery.",
          "Electronic waste is global challenge; recycle through manufacturer take-back or municipal e-waste events rather than landfill lithium batteries. Extending device life through repair is environmental and economic literacy.",
        ],
        {
          bulletPoints: [
            "List must-have tasks before shopping — avoid overspending on specs you will not use",
            "Certified refurbished units can cut cost if warranty and return policy are clear",
            "Record serial numbers and enable Find My / device tracking before loss or theft",
            "Schedule OS updates and test backups quarterly, not only when something breaks",
            "Recycle batteries and electronics through official programs, not household trash",
          ],
          laws: [
            {
              name: "Americans with Disabilities Act (ADA)",
              year: "1990",
              summary:
                "U.S. civil rights law requiring reasonable access in public life; digital services and interfaces increasingly evaluated for equitable use.",
            },
          ],
          citations: [
            {
              source: "U.S. EPA, Electronics Donation and Recycling",
              url: "https://www.epa.gov/recycle/electronics-donation-and-recycling",
            },
            {
              source: "FTC, Buying, Giving, and Selling Used Electronics",
              url: "https://consumer.ftc.gov/articles/buying-giving-and-selling-used-electronics",
            },
          ],
        }
      ),
    ],
    "Hardware families, components, and how devices connect"
  ),

  chapter(
    "os-interfaces",
    2,
    "Operating systems and user interfaces",
    [
      section(
        "os-role",
        "2.1 What an operating system does",
        [
          "An operating system (OS) manages hardware and provides services applications share — memory allocation, file systems, networking stacks, security permissions, and user interfaces. Without an OS, each program would need to talk to hardware directly, an impractical duplication of effort. Major consumer OS families include Microsoft Windows, Apple macOS and iOS/iPadOS, Google Android, ChromeOS, and Linux distributions (Ubuntu, Fedora) popular on servers and among enthusiasts.",
          "The kernel is the OS core scheduling CPU time and mediating hardware access. User-facing shells — graphical desktops, mobile home screens — sit above the kernel. When the OS crashes, applications stop; understanding that dependency explains why system updates matter even if you only use one app.",
          "Servers run OS variants tuned for uptime and remote administration; this course focuses on personal devices but the layering concept is identical.",
        ],
        {
          bulletPoints: [
            "The OS schedules CPU time, manages memory, and mediates hardware for all apps",
            "Kernel crashes affect every app — system updates patch kernel-level flaws",
            "Windows, macOS, iOS/iPadOS, Android, ChromeOS, and Linux share layered designs",
            "Settings and security controls live at the OS level, not inside each app alone",
            "Knowing your OS version helps when support or tutorials reference specific menus",
          ],
          citations: [
            {
              source: "Microsoft, Windows lifecycle and servicing",
              url: "https://learn.microsoft.com/en-us/lifecycle/products/",
            },
          ],
        }
      ),
      section(
        "gui-cli",
        "2.2 Graphical interfaces, windows, and command lines",
        [
          "Graphical user interfaces (GUIs) present icons, menus, windows, and pointers (mouse or touch). Window managers let you resize, minimize, and snap applications side by side for multitasking. Mobile GUIs use full-screen apps, gesture navigation, and notification shades pulling down from the top edge.",
          "Command-line interfaces (CLI) accept text commands — Windows PowerShell or Command Prompt, macOS/Linux Terminal — offering precise control for administrators and developers. Beginners benefit from knowing CLI exists for troubleshooting scripts IT provides, not memorizing every command on day one.",
          "Consistency across versions changes slowly; learning where settings live (network, display, accounts) transfers across apps because OS conventions repeat patterns.",
        ],
        {
          bulletPoints: [
            "GUIs use windows, icons, and pointers; mobile favors full-screen apps and gestures",
            "Terminal/CLI exists for power users and IT scripts — you do not need every command memorized",
            "Snap and virtual desktops help multitasking on laptops and desktops",
            "Search within Settings is faster than hunting every submenu manually",
            "Accessibility shortcuts (magnifier, narrator) live in the same settings areas",
          ],
        }
      ),
      section(
        "files-folders",
        "2.3 Files, folders, and permissions",
        [
          "Files store data — documents, images, programs — with names and extensions hinting type (.docx, .pdf, .jpg). Folders (directories) organize files hierarchically. Desktop metaphors show Desktop, Documents, Downloads; mobile OSs often hide raw file systems behind app sandboxes but Files apps increasingly expose storage.",
          "Permissions control who can read, write, or execute. Mobile apps request access to camera, contacts, or location; denying limits functionality but protects privacy. Windows User Account Control prompts when installers try system-level changes. Understanding permissions prevents granting unnecessary access to unknown apps.",
          "Trash/Recycle Bin holds deleted items temporarily; emptying frees space irreversibly unless backups exist. Version history (OneDrive, macOS Time Machine) recovers prior edits when enabled.",
        ],
        {
          bulletPoints: [
            "File extensions (.pdf, .docx) hint which app opens a file",
            "Deny app permissions you do not need — camera, contacts, location",
            "Downloads folder clutters quickly; sort by date and archive old installers",
            "Empty Trash only after confirming backups cover important deleted items",
            "Shared family PCs benefit from separate user profiles and sign-in accounts",
          ],
        }
      ),
      section(
        "accounts-settings",
        "2.4 System settings and local versus cloud accounts",
        [
          "Settings apps centralize display brightness, sound, network, Bluetooth, privacy, and accessibility. Search within settings speeds finding obscure toggles. Profiles on shared family tablets keep children’s content separate from parents’.",
          "Signing into a device with Apple ID, Google Account, or Microsoft account enables sync — contacts, photos, passwords — across hardware. Local-only accounts work offline but forfeit cross-device continuity. Corporate devices may be managed by mobile device management (MDM) policies restricting installs and enforcing encryption.",
          "Factory reset wipes personal data before selling hardware; back up first. MDM-enrolled employer devices may brick remotely if stolen — know policy before personal use on work machines.",
        ],
        {
          bulletPoints: [
            "Cloud accounts (Apple ID, Google, Microsoft) enable sync across devices you own",
            "Local-only accounts work offline but skip cross-device continuity",
            "Work MDM may block app installs — read employer policy before personal logins",
            "Factory reset is required before selling or donating hardware",
            "Keep recovery phone and email current before you are locked out",
          ],
          laws: [
            {
              name: "Computer Fraud and Abuse Act (CFAA)",
              year: "1986",
              summary:
                "U.S. federal law criminalizing unauthorized access to computers; using work or school devices against policy can have legal and employment consequences.",
            },
          ],
        }
      ),
      section(
        "updates-os",
        "2.5 OS updates and lifecycle",
        [
          "OS vendors ship security patches and feature updates. Automatic updates are recommended for consumers; deferral windows exist for businesses testing compatibility. End-of-support dates (e.g., older Windows versions) mean no security fixes — upgrading or replacing hardware becomes necessary.",
          "Major upgrades (Android version bumps, macOS annual releases) may slow older hardware; reading release notes clarifies removed features. Beta programs exist for enthusiasts but risk instability.",
          "Virtualization — running Windows inside macOS via Parallels, or Linux in VirtualBox — lets advanced users test without dual-booting. Beginners need only awareness that multiple OS environments can coexist on capable PCs.",
        ],
        {
          bulletPoints: [
            "Enable automatic security updates on personal devices when possible",
            "Note end-of-support dates — unsupported OS versions no longer receive patches",
            "Major upgrades may slow older hardware; read release notes before installing day one",
            "Restart after updates if apps behave oddly — pending reboots delay patches",
            "Avoid beta OS builds on primary devices you rely on for work or school",
          ],
          citations: [
            {
              source: "NIST, Security Tips for Non-Technical Users (patching)",
              url: "https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/updates-and-patches",
            },
          ],
        }
      ),
    ],
    "How system software shapes everything you see and click"
  ),

  chapter(
    "apps-updates",
    3,
    "Applications, app stores, and updates",
    [
      section(
        "what-is-app",
        "3.1 What applications are and how they differ from websites",
        [
          "Applications (apps) are software performing tasks — word processing, maps, banking, games. Native apps install from stores and use device APIs deeply (camera, notifications). Web apps run in browsers with no install, updating server-side instantly but sometimes limited offline. Progressive web apps (PWAs) blur the line, offering home-screen icons and offline caches.",
          "App stores — Apple App Store, Google Play, Microsoft Store — review submissions, distribute updates, and handle payments taking commission. Sideloading (installing from outside stores) is possible on some platforms with security warnings. Enterprise apps distribute internally via managed channels.",
          "Malware often masquerades as apps; stick to official stores or vendor websites linked from trusted sources.",
        ],
        {
          bulletPoints: [
            "Native apps install from stores; web apps run in browsers with instant server updates",
            "PWAs can add home-screen icons and limited offline use without a full store install",
            "Sideloading increases malware risk — prefer official stores or vendor download pages",
            "Enterprise apps may arrive through work portals, not public stores",
            "Read store reviews and developer identity before installing financial or health apps",
          ],
        }
      ),
      section(
        "install-manage",
        "3.2 Installing, updating, and uninstalling",
        [
          "Install flows request permissions; read prompts instead of tapping through blindly. Updates patch vulnerabilities and bugs; enable auto-update where available. Changelogs describe fixes; large version jumps may redesign interfaces — patience during learning curves.",
          "Uninstall removes app binaries; data may persist unless you delete account inside app first. Subscription apps continue billing through store accounts until canceled in store subscription settings, not only by deleting icon.",
          "Storage management tools show which apps consume space; offload unused apps on iOS while keeping documents. Android clearing cache fixes some glitches without deleting data.",
        ],
        {
          bulletPoints: [
            "Read permission prompts during install — do not tap through blindly",
            "Turn on auto-update for security patches; skim changelogs after major versions",
            "Cancel subscriptions in the store account, not only by deleting the app icon",
            "Uninstall unused apps quarterly to reduce attack surface and clutter",
            "Clear cache for glitches before assuming hardware failure",
          ],
          citations: [
            {
              source: "Google Play Help, Manage your apps",
              url: "https://support.google.com/googleplay/answer/113418",
            },
          ],
        }
      ),
      section(
        "subscriptions",
        "3.3 Subscriptions, in-app purchases, and digital economics",
        [
          "Software-as-a-service shifted many products from one-time purchase to monthly fees — music streaming, office suites, cloud storage. Track recurring charges in store subscription panels to avoid surprise renewals. Free tiers monetize via ads or limited features; read privacy policies when data is the price.",
          "In-app purchases fund mobile games and extras; parental controls restrict child spending. Receipt email archives help dispute unauthorized charges promptly with store support.",
          "Open-source applications (LibreOffice, Firefox) are free to use with community development; support may be forum-based rather than phone hotlines. Choosing tools balances cost, features, privacy, and support needs.",
        ],
        {
          bulletPoints: [
            "Review subscription lists monthly in App Store / Google Play / Microsoft account",
            "Free tiers often fund themselves with ads or data — read privacy policies",
            "Parental controls can block child in-app purchases and require approval",
            "Keep receipt emails to dispute unauthorized renewals quickly",
            "Compare open-source vs paid suites on privacy, support, and file compatibility needs",
          ],
          laws: [
            {
              name: "Children's Online Privacy Protection Act (COPPA)",
              year: "1998",
              summary:
                "U.S. rule limiting collection of personal data from children under 13; app stores and kids' apps must provide parental consent flows.",
            },
          ],
        }
      ),
      section(
        "productivity",
        "3.4 Productivity suites and file compatibility",
        [
          "Microsoft 365, Google Workspace, and Apple iWork cover documents, spreadsheets, and presentations with cloud collaboration. Real-time co-editing shows cursors of teammates; version history rescues mistakes. Export to PDF for sharing final versions that should not be edited.",
          "File compatibility issues arise — fonts missing, formulas breaking — when moving between suites. Use standard formats (.docx, .xlsx) and test before deadlines. Offline modes sync changes when connectivity returns; conflict resolution may ask which copy to keep.",
          "Templates accelerate resumes, invoices, and lesson plans. Keyboard shortcuts (save, undo, find) work across many apps; learning a handful saves hours yearly.",
        ],
        {
          bulletPoints: [
            "Export finals to PDF when recipients should not edit your version",
            "Test cross-suite files before deadlines — fonts and formulas often break",
            "Use real-time co-editing for teams; confirm who owns the canonical copy",
            "Learn save, undo, and find shortcuts — they transfer across many apps",
            "Offline edits sync later — resolve conflict prompts instead of ignoring them",
          ],
        }
      ),
      section(
        "app-hygiene",
        "3.5 Application hygiene and least privilege",
        [
          "Review installed apps quarterly; remove unused ones reducing attack surface. Check permission lists — does a flashlight app need contacts? Revoke excess access in OS privacy settings. Log out of banking and shopping apps on shared devices.",
          "Enterprise productivity may include Slack, Teams, Zoom — workplace communication tools with retention policies. Assume workplace messages may be archived per policy even if interface feels casual.",
          "Backup critical files outside any single app’s silo. Cloud sync is convenient; local or second-cloud backup protects against account lockout or ransomware.",
        ],
        {
          bulletPoints: [
            "Audit installed apps and permissions every few months",
            "Revoke access that apps no longer need (contacts, microphone, location)",
            "Log out of banking and shopping apps on shared or library devices",
            "Assume workplace chat may be archived — follow employer acceptable-use policy",
            "Keep a second backup besides one cloud sync folder",
          ],
          citations: [
            {
              source: "NIST, Mobile Device Security",
              url: "https://www.nist.gov/itl/applied-cybersecurity/nist-cybersecurity-white-papers/mobile-device-security",
            },
          ],
        }
      ),
    ],
    "Software you install, how it updates, and how to manage it wisely"
  ),

  chapter(
    "internet-browsers",
    4,
    "The internet, browsers, and search",
    [
      section(
        "internet-vs-wifi",
        "4.1 The internet versus your home network",
        [
          "The internet is a global network of networks using standardized protocols — notably TCP/IP — to route packets between billions of devices. Your home Wi‑Fi is a local network connecting phones, laptops, and smart TVs to a router. The router performs network address translation (NAT), sharing one public IP address from your ISP among many home devices.",
          "Domain Name System (DNS) translates human-readable names (example.com) into IP addresses browsers need. ISP-provided DNS works; privacy-focused alternatives (Cloudflare 1.1.1.1, Quad9) filter malware or logging differently. DNS changes affect all devices using that router setting.",
          "Bandwidth measures data rate (megabits per second); latency measures delay (milliseconds). Video calls need stable latency; large downloads need bandwidth. Speed tests diagnose but do not guarantee quality inside every app.",
        ],
        {
          bulletPoints: [
            "Internet is global; home Wi‑Fi is only your local network to the router",
            "DNS translates names to addresses — router or device DNS affects all browsing",
            "Latency matters for calls; bandwidth matters for large downloads",
            "One public IP from your ISP is shared among home devices via NAT",
            "Speed tests measure the link, not every app’s servers worldwide",
          ],
        }
      ),
      section(
        "browsers",
        "4.2 Web browsers: rendering pages and storing state",
        [
          "Browsers — Chrome, Firefox, Safari, Edge — fetch HTML, CSS, and JavaScript, render pages, execute scripts, and store cookies, cache, and history. Multiple browsers can coexist; choose one primary for sync consistency. Private/incognito modes limit local history but do not anonymize you to websites or ISPs.",
          "Extensions add ad blocking, password management, or grammar checking; install only reputable extensions with clear privacy policies. Malicious extensions have been distributed even through stores briefly.",
          "HTTPS (padlock icon) encrypts traffic between browser and server, preventing casual eavesdropping on networks. It does not prove a site is honest — phishing sites also use HTTPS. Evaluate site trust separately.",
        ],
        {
          bulletPoints: [
            "Pick one primary browser for sync; keep a second installed for troubleshooting",
            "Incognito hides local history but not your identity from sites or ISP",
            "Install few extensions; remove any you do not recognize or use",
            "HTTPS encrypts transit; still verify the site is legitimate before entering passwords",
            "Clear cache when one site glitches but others work fine",
          ],
          citations: [
            {
              source: "Mozilla Developer Network, How the web works",
              url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works",
            },
            {
              source: "W3C, Web Security Guidelines",
              url: "https://www.w3.org/Security/",
            },
          ],
        }
      ),
      section(
        "search-literacy",
        "4.3 Search literacy and evaluating online information",
        [
          "Search engines rank pages using relevance and quality signals; sponsored results appear first labeled as ads. Craft specific queries with quotes for exact phrases. Use site: filters (site:edu climate) to narrow domains. Reverse image search helps verify photo provenance.",
          "Misinformation spreads via emotional headlines and fabricated screenshots. Lateral reading — opening other tabs about the source — beats reading only the article. Check publication date, author credentials, and whether primary sources support claims.",
          "Wikipedia is a useful starting point with citations to dig deeper, not a sole authority for medical or legal decisions. Library and government (.gov) resources often provide vetted beginner explanations.",
        ],
        {
          bulletPoints: [
            "Use specific queries and quote exact phrases when search results are noisy",
            "Lateral reading: open tabs about the source, not only the article you found",
            "Sponsored results are ads — scroll to organic results for comparison",
            "Check dates and author credentials on health, legal, and financial claims",
            "Use site:edu or site:gov filters for introductory academic and government material",
          ],
        }
      ),
      section(
        "cookies-tracking",
        "4.4 Cookies, tracking, and browser privacy controls",
        [
          "Cookies are small files sites store on your device for login sessions, preferences, and tracking. Third-party cookies embedded in ads followed users across sites; browsers now block or phase them out, pushing advertisers toward other identifiers. Clear cookies when sites behave oddly after settings changes.",
          "Tracking protection, fingerprint resistance, and Do Not Track (limited enforcement) reduce profiling. Global Privacy Control signals opt-out preferences in some jurisdictions. Read privacy policies for services you rely on — lengthy but searchable for data sale terms.",
          "Advertisers use legitimate interest claims in GDPR contexts; users may reject non-essential cookies on EU-facing sites. U.S. state laws (California CPRA, others) expand rights similarly over time.",
        ],
        {
          bulletPoints: [
            "First-party cookies remember logins; third-party cookies fueled cross-site tracking",
            "Use browser tracking protection and review site cookie banners deliberately",
            "Global Privacy Control signals opt-out where sites honor it",
            "Clear cookies when logins break after password or settings changes",
            "Read privacy policies for services you use daily — search within long documents",
          ],
          laws: [
            {
              name: "General Data Protection Regulation (GDPR)",
              year: "2016",
              summary:
                "EU law granting users access, deletion, portability, and limits on non-essential tracking; many global sites offer cookie choices because of it.",
            },
          ],
        }
      ),
      section(
        "safe-browsing",
        "4.5 Safe browsing habits",
        [
          "Look for misspelled domains (amaz0n.com), urgent threats ('account suspended in one hour'), and requests for passwords via email links. Type financial URLs manually or use bookmarks. Enable two-factor authentication on email — compromise there unlocks password resets everywhere.",
          "Download files only from vendor sites or app stores. PDFs and Office macros can carry malware; preview cautiously. Keep browsers updated; exploits target old versions.",
          "Parental controls and safe search filters reduce exposure for children; open conversation complements technology filters.",
        ],
        {
          bulletPoints: [
            "Bookmark banks and government sites — type URLs or use bookmarks, not email links",
            "Enable MFA on email first; inbox access resets passwords elsewhere",
            "Padlock means encrypted transit, not that the business is trustworthy",
            "Update browsers promptly; exploits target outdated versions",
            "Teach children to tell a trusted adult about scary or urgent online messages",
          ],
          citations: [
            {
              source: "CISA, Avoiding Social Engineering and Phishing Attacks",
              url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks",
            },
            {
              source: "FTC, How to Recognize and Avoid Phishing Scams",
              url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams",
            },
          ],
        }
      ),
    ],
    "How the global network works in browsers you use daily"
  ),

  chapter(
    "email-messaging",
    5,
    "Email, messaging, and online communication",
    [
      section(
        "email-basics",
        "5.1 Email architecture and etiquette",
        [
          "Email uses standardized protocols: SMTP sends, IMAP syncs folders across devices, POP3 downloads (legacy). Your address lives on a provider’s servers (Gmail, Outlook, Yahoo) or employer Exchange servers. Messages include headers (From, To, Subject, Date) invisible in normal view but useful for diagnosing spam.",
          "Professional etiquette: clear subject lines, concise body, respectful tone, proofreading, and mindful reply-all. Attachments should be expected size; large files use cloud links. Phishing often spoofs display names while actual sender addresses differ — inspect details.",
          "Spam filters learn from reported junk; false positives happen. Check spam folder for missing legitimate mail before blaming senders.",
        ],
        {
          bulletPoints: [
            "Inspect actual sender address, not only the display name, for suspicious mail",
            "Use clear subject lines and proofread before reply-all to large groups",
            "Large attachments slow delivery — use cloud links with permission controls",
            "Report phishing to your provider and IT; do not click embedded login links",
            "Check spam/junk before assuming a sender failed to deliver",
          ],
          citations: [
            {
              source: "CISA, Avoiding Social Engineering and Phishing Attacks",
              url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks",
            },
          ],
        }
      ),
      section(
        "messaging-apps",
        "5.2 Instant messaging and chat applications",
        [
          "Messaging apps — SMS/text, iMessage, WhatsApp, Signal, Telegram, Slack, Teams — differ by encryption, business model, and platform lock-in. SMS lacks modern encryption; green versus blue bubble debates on iPhones reflect protocol differences. Signal provides end-to-end encryption with minimal data collection by design.",
          "Group chats explode notification volume; mute thoughtfully and set expectations for response time. Workplace tools archive messages for compliance; do not treat them as private diaries.",
          "Voice and video calls over internet (VoIP) depend on bandwidth and latency; wired connections stabilize meetings. Headsets reduce echo; muting when not speaking is courtesy.",
        ],
        {
          bulletPoints: [
            "SMS is not end-to-end encrypted; dedicated apps vary by design and policy",
            "Mute noisy group chats and set realistic response-time expectations",
            "Workplace Slack/Teams messages may be retained — follow employer rules",
            "Use wired Ethernet for important video calls when Wi‑Fi is unstable",
            "Prefer apps with clear encryption claims when discussing sensitive topics",
          ],
        }
      ),
      section(
        "encryption-privacy",
        "5.3 Encryption concepts for everyday users",
        [
          "Encryption scrambles content so only intended recipients read it. Transport encryption (HTTPS, TLS on email between servers) protects in transit. End-to-end encryption (E2EE) means even the service provider cannot read message bodies — Signal, WhatsApp E2EE by default between users.",
          "If you forget a password on E2EE backup without recovery key, data may be unrecoverable — trade-off of stronger privacy. Cloud backups of messages may reintroduce provider access depending on settings.",
          "Public Wi‑Fi risks are mitigated by HTTPS and VPNs; highest-risk actions remain entering passwords on fake sites, not necessarily someone reading your coffee shop packets for modern apps.",
        ],
        {
          bulletPoints: [
            "HTTPS protects data in transit between your device and a website",
            "End-to-end encryption means even the provider cannot read message bodies",
            "Lost E2EE passwords may mean unrecoverable data — store recovery keys safely",
            "Cloud chat backups can reintroduce provider access depending on settings",
            "Phishing sites remain the top everyday risk, not only open Wi‑Fi eavesdropping",
          ],
          citations: [
            {
              source: "Electronic Frontier Foundation, Surveillance Self-Defense",
              url: "https://ssd.eff.org/",
            },
            {
              source: "Signal Support, Signal messages and calls are private",
              url: "https://support.signal.org/hc/en-us/articles/360007060572",
            },
          ],
        }
      ),
      section(
        "calendar-collab",
        "5.4 Calendars, scheduling, and shared documents",
        [
          "Digital calendars sync events across devices; time zone support prevents missed international meetings. Sharing calendars shows availability without exposing every private appointment detail. ICS invites interoperate among Google, Apple, Microsoft ecosystems with occasional quirks.",
          "Shared drives — Google Drive, OneDrive, Dropbox — coordinate files with permissions (view, comment, edit). Link sharing with 'anyone with link' risks leaks; prefer specific people permissions. Version history tracks who changed spreadsheets.",
          "Comment threads and @mentions reduce email overload for project coordination. Establish naming conventions for folders so teams find assets.",
        ],
        {
          bulletPoints: [
            "Set calendar time zones correctly for remote meetings",
            "Share files with named people instead of open 'anyone with link' when possible",
            "Use version history before overwriting shared spreadsheets",
            "Agree on folder naming so teams find assets without endless search",
            "@mentions and comments reduce reply-all email storms",
          ],
        }
      ),
      section(
        "harassment-scams",
        "5.5 Scams, harassment, and reporting",
        [
          "Phishing via email and SMS ('smishing') impersonates banks, delivery firms, and bosses requesting gift cards or wire transfers. Verify through separate channel — call known number, not reply thread. Business email compromise costs organizations billions annually.",
          "Romance scams, tech support cold calls, and fake refund notices prey on urgency and authority. Slow down; legitimate institutions do not demand gift cards or cryptocurrency.",
          "Harassment and stalkerware violate laws and platform policies. Document evidence, block, report, contact platform trust & safety, and seek local law enforcement or advocacy organizations for intimate partner tech abuse. Employers have HR paths for workplace harassment.",
        ],
        {
          bulletPoints: [
            "Verify urgent money requests by calling a known number, not replying in-thread",
            "Gift cards and cryptocurrency payments are common scam tells",
            "Document harassment screenshots with timestamps before blocking",
            "Report stalkerware and impersonation to platforms and local authorities",
            "Business email compromise often targets payroll — confirm changes out of band",
          ],
          laws: [
            {
              name: "Wire Fraud Statutes (18 U.S.C. § 1343)",
              year: "1952",
              summary:
                "Federal fraud prohibitions covering interstate schemes; many phishing and BEC scams are prosecuted as wire fraud.",
            },
          ],
          citations: [
            {
              source: "FTC, How to Recognize and Avoid Phishing Scams",
              url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams",
            },
            {
              source: "FBI Internet Crime Complaint Center (IC3)",
              url: "https://www.ic3.gov/",
            },
          ],
        }
      ),
    ],
    "Professional and personal communication tools used safely"
  ),

  chapter(
    "cloud-accounts",
    6,
    "Cloud services, accounts, and synchronization",
    [
      section(
        "cloud-defined",
        "6.1 What 'the cloud' means",
        [
          "The cloud is other people’s computers you rent over the internet, billed by usage or subscription. Instead of buying servers, firms use Amazon Web Services, Microsoft Azure, or Google Cloud; consumers use Gmail, iCloud, Netflix streaming, and Spotify music without managing hardware. Data resides in data centers with redundancy, physical security, and engineering staffs consumers cannot replicate at home.",
          "Trade-offs: convenience and automatic backups versus dependency on provider uptime, terms of service, and price changes. Outages occasionally take down major services; local copies mitigate.",
          "Hybrid approaches — photos in cloud, documents local — balance risk. Decide what must survive phone theft versus what can be re-downloaded.",
        ],
        {
          bulletPoints: [
            "Cloud means data on provider servers — convenience trades with terms-of-service risk",
            "Outages happen; keep offline copies of irreplaceable photos and documents",
            "Free tiers may compress media or cap storage — read plan details",
            "Classify what must survive device theft vs what you can re-download",
            "Hybrid local + cloud balances speed, privacy, and resilience",
          ],
        }
      ),
      section(
        "identity-accounts",
        "6.2 Digital identity: accounts, profiles, and SSO",
        [
          "An account authenticates you with username/email and password, biometrics, or hardware keys. Single sign-on (SSO) lets corporate Google or Microsoft credentials log into work apps centrally. Social login ('Sign in with Apple/Google') reduces passwords but links data sharing; use sparingly on low-trust sites.",
          "Profile information — name, photo, recovery phone — aids support recovery. Keep recovery options current; losing phone without backup codes locks you out. Family sharing plans manage child purchases and screen time.",
          "Account sprawl causes reuse of passwords — dangerous. Password managers generate unique secrets per site, autofilling securely. Master password and second factor protect the vault.",
        ],
        {
          bulletPoints: [
            "Use a password manager instead of reusing one password everywhere",
            "Keep recovery phone, email, and backup codes current before lockout",
            "Limit 'Sign in with Google/Apple' on low-trust sites to reduce data linkage",
            "Work SSO is separate from personal accounts — do not mix on one profile",
            "Family sharing plans need child purchase and screen-time rules configured",
          ],
          citations: [
            {
              source: "Google Account Help, Security Checkup",
              url: "https://myaccount.google.com/security-checkup",
            },
          ],
        }
      ),
      section(
        "sync-backup",
        "6.3 Sync versus backup: different jobs",
        [
          "Sync mirrors changes everywhere — delete on phone deletes cloud unless trash retention saves you. Backup preserves history intentionally, often immutable to ransomware after delay. Time Machine, File History, and cloud backup services (Backblaze) serve backup roles.",
          "3-2-1 rule: three copies of data, two media types, one offsite. Cloud counts as offsite if secured. Test restores annually — backups untested are faith, not assurance.",
          "Ransomware encrypts live and synced files; versioned backup with offline separation recovers. Pause sync if malware suspected until machine cleaned.",
        ],
        {
          bulletPoints: [
            "Sync mirrors deletes; backup preserves history intentionally",
            "Follow 3-2-1: three copies, two media types, one offsite",
            "Test a restore yearly — untested backups are assumptions",
            "Pause cloud sync if ransomware is suspected until the device is clean",
            "Versioned cloud backup beats sync alone for recovery from mistakes",
          ],
          citations: [
            {
              source: "NIST, Data Backup Options",
              url: "https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/data-backup-options",
            },
            {
              source: "CISA, Ransomware Guide (backup and recovery)",
              url: "https://www.cisa.gov/stopransomware",
            },
          ],
        }
      ),
      section(
        "storage-models",
        "6.4 Consumer cloud storage and collaboration",
        [
          "Google Drive, iCloud Drive, OneDrive, Dropbox offer tiers by gigabytes. Photos apps may compress originals unless paid for full resolution. Sharing links expire for security; permissions should follow least privilege.",
          "Office collaboration stores files in cloud by default; understand data residency if handling regulated information (health, student records). Personal free tiers are not HIPAA-compliant business tools without enterprise agreements.",
          "Egress fees matter for businesses moving data out; consumers rarely hit them but should know vendor lock-in risks when libraries grow large.",
        ],
        {
          bulletPoints: [
            "Personal free tiers are not HIPAA-ready for regulated health workflows",
            "Share with named people; avoid permanent public links for sensitive files",
            "Check whether photos stay full resolution or are compressed on free plans",
            "Student and health data need enterprise agreements, not consumer accounts",
            "Large libraries make switching providers harder — export periodically",
          ],
          laws: [
            {
              name: "Health Insurance Portability and Accountability Act (HIPAA)",
              year: "1996",
              summary:
                "U.S. rules for protected health information; consumer cloud drives are not compliant business associates without proper contracts.",
            },
          ],
        }
      ),
      section(
        "closing-accounts",
        "6.5 Account recovery, closure, and digital estate",
        [
          "Record recovery codes for two-factor authentication offline. Password manager emergency access kits help heirs. Apple Digital Legacy and Google inactive account manager designate contacts after inactivity.",
          "Closing accounts may require identity proof; some retain data legally for fraud investigation periods. Export data portable formats (Google Takeout) before deletion.",
          "Digital estate planning — documenting where photos, finances, and domain names live — reduces family stress. Attorneys increasingly address digital assets in wills where law permits.",
        ],
        {
          bulletPoints: [
            "Store two-factor backup codes offline in a secure place",
            "Set inactive-account and legacy contacts in Google, Apple, Microsoft",
            "Export data (e.g., Google Takeout) before closing accounts",
            "Document where photos, passwords, and finances live for family continuity",
            "Closing accounts may require ID proof and retention waiting periods",
          ],
          citations: [
            {
              source: "Apple Support, Digital Legacy",
              url: "https://support.apple.com/en-us/102506",
            },
          ],
        }
      ),
    ],
    "Online services that store, sync, and protect your digital life"
  ),

  chapter(
    "privacy-security",
    7,
    "Privacy, security, and protecting yourself online",
    [
      section(
        "threat-model",
        "7.1 Personal threat models: who might target you and how",
        [
          "Security begins with threat modeling: what assets you protect (money, identity, photos, reputation), who might attack (random criminals, scammers, stalkers, curious strangers), and their methods (phishing, malware, theft, social engineering). Not everyone faces nation-state espionage; most beginners prioritize financial fraud and account takeover.",
          "Risk = likelihood × impact. Reused passwords make credential stuffing likely after any site breach. High impact justifies stronger controls — hardware security keys on email and bank, not only birthdays as passwords.",
          "Perfect security is impossible; goal is raising attacker cost above your value as target. Layered defenses compensate when one layer fails.",
        ],
        {
          bulletPoints: [
            "List what you protect: money, identity, photos, reputation",
            "Most beginners face scammers and account takeover, not nation-state spies",
            "Unique passwords stop credential-stuffing after any site breach",
            "Layer controls: MFA, updates, backups, and skepticism of urgent messages",
            "Aim to make attacks more costly than you are worth as a target",
          ],
          citations: [
            {
              source: "NIST Cybersecurity Framework 2.0 (Identify, Protect, Detect, Respond, Recover)",
              url: "https://www.nist.gov/cyberframework",
            },
          ],
        }
      ),
      section(
        "passwords-mfa",
        "7.2 Passwords, multi-factor authentication, and passkeys",
        [
          "Strong passwords are long and unique — passphrases of four random words beat short complex gibberish you reuse. Password managers store them encrypted; memorize only manager master and device PIN/biometric.",
          "Multi-factor authentication (MFA) requires something you know (password), have (phone prompt, hardware key), or are (fingerprint). SMS codes resist casual attackers but SIM-swap attacks target high-value individuals; app-based TOTP (Google Authenticator, Authy) or FIDO2 hardware keys are stronger.",
          "Passkeys (WebAuthn) bind login to device cryptography, resisting phishing because secrets never leave secure enclave. Adoption growing across Apple, Google, Microsoft platforms. Enable MFA on email first — it guards password resets for all other services.",
        ],
        {
          bulletPoints: [
            "Use long unique passphrases in a password manager, not reused passwords",
            "Enable MFA on email and financial accounts before less critical sites",
            "Prefer app-based codes or hardware keys over SMS where high value is at stake",
            "Passkeys resist phishing because secrets stay on your device",
            "Memorize only your password-manager master and device PIN/biometric",
          ],
          citations: [
            {
              source: "NIST Digital Identity Guidelines (SP 800-63B overview)",
              url: "https://pages.nist.gov/800-63-3/",
            },
          ],
        }
      ),
      section(
        "malware-scams",
        "7.3 Malware, ransomware, and social engineering",
        [
          "Malware categories include viruses (attach to files), worms (self-spread), trojans (disguised downloads), spyware (monitor activity), and ransomware (encrypt files for payment). Avoid pirated software, suspicious attachments, and 'free' tools too good to be true. OS defenses (Windows Defender, macOS Gatekeeper) help; user caution remains critical.",
          "Ransomware victims should not pay immediately; contact law enforcement, isolate infected machines from network, restore from clean backups. Payment funds crime and may not restore data.",
          "Social engineering exploits psychology — authority, urgency, scarcity, liking. Slow verification beats cleverness. When CEO emails wire transfer at 4 p.m. Friday, call CEO on known number.",
        ],
        {
          bulletPoints: [
            "Avoid pirated software and unexpected attachments — common malware paths",
            "Keep OS security features enabled (Defender, Gatekeeper, automatic updates)",
            "Isolate infected devices from Wi‑Fi and restore from clean backups",
            "Do not pay ransomware immediately — report and recover when possible",
            "Verify wire and gift-card requests through a separate trusted channel",
          ],
        }
      ),
      section(
        "privacy-settings",
        "7.4 Privacy settings, data minimization, and regulation",
        [
          "Review privacy dashboards for Google, Apple, Meta, Microsoft periodically. Limit ad personalization, location history, and voice recording retention where uncomfortable. Minimize data shared on social profiles — birthdate, mother's maiden name, vacation timing aid identity thieves.",
          "Privacy laws — EU GDPR, California CPRA, others — grant access, deletion, and portability rights with regional variation. Exercise rights through vendor forms; expect identity verification.",
          "Children’s online privacy (COPPA in U.S.) restricts collecting data from under-13 without parental consent; schools add FERPA for education records. Parents should supervise account creation and content.",
        ],
        {
          bulletPoints: [
            "Review Google, Apple, Meta, and Microsoft privacy dashboards periodically",
            "Minimize public profile data useful for password-reset questions",
            "Exercise access and deletion rights where GDPR or state laws apply",
            "Supervise under-13 account creation and app permissions",
            "Turn off voice and location history you do not actively need",
          ],
          laws: [
            {
              name: "Children's Online Privacy Protection Act (COPPA)",
              year: "1998",
              summary:
                "U.S. federal limits on collecting personal information from children under 13 without parental consent.",
            },
            {
              name: "California Privacy Rights Act (CPRA)",
              year: "2020",
              summary:
                "State law expanding consumer rights to know, delete, correct, and limit use of personal information.",
            },
          ],
          citations: [
            {
              source: "FTC, Protecting Kids' Privacy Online (COPPA)",
              url: "https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy",
            },
          ],
        }
      ),
      section(
        "incident-response",
        "7.5 When something goes wrong: incident steps for users",
        [
          "If account compromised: change password from clean device, enforce MFA, review logged-in sessions and connected apps, notify bank if financial data exposed. If device stolen: remote wipe via Find My / Find Hub, change critical passwords, report to police with serial number.",
          "Credit freezes with bureaus reduce new account fraud after identity theft. FTC IdentityTheft.gov provides recovery plans. Document timeline for disputes.",
          "Avoid shame-blaming victims; reporting helps everyone. Share lessons with family so one phishing success does not repeat across relatives.",
        ],
        {
          bulletPoints: [
            "Change passwords from a clean device; sign out other sessions",
            "Remote-wipe stolen phones; report theft with serial numbers",
            "Freeze credit at bureaus after identity theft",
            "Use IdentityTheft.gov for a structured recovery plan",
            "Tell family what happened so others do not fall for the same lure",
          ],
          citations: [
            {
              source: "FTC, IdentityTheft.gov recovery planning",
              url: "https://www.identitytheft.gov/",
            },
            {
              source: "CISA, Cybersecurity Awareness Program resources",
              url: "https://www.cisa.gov/topics/cybersecurity-best-practices",
            },
          ],
        }
      ),
    ],
    "Practical defenses against common digital risks"
  ),

  chapter(
    "accessibility",
    8,
    "Accessibility and inclusive design for all users",
    [
      section(
        "why-accessibility",
        "8.1 Why accessibility matters technologically and ethically",
        [
          "Accessibility ensures people with disabilities can perceive, understand, navigate, and interact with digital products. Permanent disabilities (blindness, deafness, motor impairment) intersect situational limitations (bright sunlight, noisy environments, holding a baby) and temporary injuries (broken arm). Designing for extremes helps everyone — captions aid non-native speakers; high contrast helps aging eyes.",
          "Legal requirements — Americans with Disabilities Act applications to websites in many U.S. contexts, Section 508 for federal tech, EU accessibility acts — push organizations beyond goodwill. Ethical inclusion stands independent of law: exclusion from banking or healthcare portals harms dignity and opportunity.",
          "Inclusive design is not a checkbox after launch; it influences architecture, color choices, keyboard flows, and content writing from the start.",
        ],
        {
          bulletPoints: [
            "Accessibility helps permanent, temporary, and situational limitations alike",
            "Captions, contrast, and keyboard paths benefit many users beyond formal disability",
            "U.S. and EU law increasingly expects equitable digital access",
            "Exclusion from essential online services harms dignity and opportunity",
            "Build accessibility into planning, not only after user complaints",
          ],
          citations: [
            {
              source: "W3C Web Accessibility Initiative (WAI), Introduction to Web Accessibility",
              url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
            },
          ],
        }
      ),
      section(
        "assistive-tech",
        "8.2 Assistive technologies built into consumer devices",
        [
          "Screen readers (VoiceOver on Apple, TalkBack on Android, NVDA/JAWS on Windows) speak interface elements; proper labels matter more than visual polish alone. Screen magnifiers and high-contrast themes aid low vision. Closed captions and live transcription assist d/Deaf and hard-of-hearing users.",
          "Switch control and voice access let users with limited hand mobility navigate. Hearing aid compatibility and mono audio help partial hearing loss. Haptic feedback supplements alerts for vibration-aware users.",
          "Explore settings accessibility panes on your phone and computer; enable features temporarily to understand behavior when coaching others.",
        ],
        {
          bulletPoints: [
            "Try VoiceOver, TalkBack, or Narrator briefly to learn how others navigate",
            "Captions and live transcription help deaf and hard-of-hearing users and noisy rooms",
            "Voice control and switch access support limited hand mobility",
            "Meaningful button labels matter more than decorative visuals alone",
            "Built-in magnifier and high-contrast modes aid low vision",
          ],
          citations: [
            {
              source: "Apple Support, Accessibility features for iPhone and iPad",
              url: "https://support.apple.com/accessibility/iphone",
            },
          ],
        }
      ),
      section(
        "wcag-basics",
        "8.3 WCAG principles: perceivable, operable, understandable, robust",
        [
          "Web Content Accessibility Guidelines (WCAG) 2.2 organize success criteria under four principles. Perceivable: provide text alternatives for images, sufficient color contrast (4.5:1 for normal text), captions for video. Operable: keyboard access, enough time to complete tasks, seizure-safe animations. Understandable: predictable navigation, readable language, error identification. Robust: compatible with assistive technologies and standards-valid markup.",
          "Conformance levels A, AA, AAA increase rigor; many regulations target AA. Automated scanners (axe, Lighthouse) catch fraction of issues; manual testing with screen readers remains necessary.",
          "Documents matter too: tagged PDFs, heading styles in Word, alt text on slides. Email with bare URLs frustrates screen reader users; hyperlink descriptive text instead.",
        ],
        {
          bulletPoints: [
            "WCAG four principles: perceivable, operable, understandable, robust",
            "Many regulations target Level AA conformance",
            "Automated scanners catch only part of issues — manual testing still needed",
            "Use heading styles in Word and alt text in slides and PDFs",
            "Write descriptive link text instead of pasting bare URLs",
          ],
          citations: [
            {
              source: "W3C, Web Content Accessibility Guidelines (WCAG) 2.2",
              url: "https://www.w3.org/TR/WCAG22/",
            },
          ],
        }
      ),
      section(
        "inclusive-content",
        "8.4 Inclusive content and communication habits",
        [
          "Use plain language where possible; define acronyms on first use. Avoid idioms that confuse translation software and non-native readers. Provide agenda and materials before video meetings so participants prepare. Describe visual content aloud on calls ('chart shows sales rising Q1–Q3').",
          "Emoji and GIF reactions convey tone but may lack alt text; consider audience. Dark patterns that trick users into purchases harm cognitive accessibility and trust.",
          "When creating social posts, capitalize hashtags #LikeThis so screen readers pronounce words instead of spelling gibberish.",
        ],
        {
          bulletPoints: [
            "Use plain language and define acronyms on first mention",
            "Share agendas and materials before video meetings",
            "Describe charts and visuals aloud on calls",
            "Capitalize multi-word hashtags for screen-reader pronunciation",
            "Avoid dark patterns that trick users into unwanted purchases",
          ],
        }
      ),
      section(
        "advocacy",
        "8.5 Advocating for accessibility at school, work, and vendors",
        [
          "Request reasonable accommodations in employment and education — assistive software, ergonomic equipment, captioned videos — through official processes; laws protect against retaliation in many jurisdictions. IT departments often have budget once needs are documented.",
          "Vendor selection should include accessibility questionnaire responses and VPAT/ACR conformance reports. Vote with procurement dollars for inclusive products.",
          "Continuous improvement beats claiming 'fully accessible' forever. User feedback channels with disabled testers surface real friction automated tools miss.",
        ],
        {
          bulletPoints: [
            "Request reasonable accommodations through official HR or disability services",
            "Ask vendors for VPAT/ACR accessibility reports during procurement",
            "Include disabled users in testing — lived experience beats checklists alone",
            "Document accessibility needs in writing for continuity across staff changes",
            "Advocate iteratively; accessibility is ongoing maintenance, not one launch",
          ],
          laws: [
            {
              name: "Americans with Disabilities Act (ADA)",
              year: "1990",
              summary:
                "U.S. civil rights law; courts and agencies increasingly apply it to digital services used by the public.",
            },
            {
              name: "Section 508 of the Rehabilitation Act",
              year: "1998",
              summary:
                "Requires federal electronic and information technology to be accessible to people with disabilities.",
            },
          ],
        }
      ),
    ],
    "Tools and practices so technology works for more people"
  ),

  chapter(
    "troubleshooting",
    9,
    "Troubleshooting and getting help effectively",
    [
      section(
        "scientific-method",
        "9.1 A systematic approach: reproduce, isolate, test, document",
        [
          "Troubleshooting is disciplined problem solving, not superstition. Reproduce the issue: does Wi‑Fi fail only on one device or all? Isolate variables: connect via Ethernet to remove Wi‑Fi. Change one thing at a time — restart router before replacing laptop. Document what you tried to avoid loops and to help helpers.",
          "Hypothesis-driven tests save time: 'If DNS is wrong, ping IP works but names fail.' Learn basic diagnostics — ping, traceroute/tracert, speed test — understanding limits (some networks block ICMP).",
          "Intermittent bugs are hardest; note time patterns (evenings congested neighborhood bandwidth). Screenshots and exact error codes beat 'it does not work.'",
        ],
        {
          bulletPoints: [
            "Reproduce first: one device or all? one app or every site?",
            "Change one variable at a time and write down what you tried",
            "Screenshots and exact error text help support more than vague complaints",
            "Basic checks: ping IP vs hostname to suspect DNS issues",
            "Note time-of-day patterns for intermittent Wi‑Fi or ISP congestion",
          ],
        }
      ),
      section(
        "common-fixes",
        "9.2 Common fixes that solve many issues",
        [
          "Restart the application, then device, then router/modem in sequence. Check physical connections — power cables, Ethernet clicks, VPN accidentally on. Verify account login status and subscription active. Clear browser cache for website glitches. Free storage space; OS behaves poorly when disk nearly full.",
          "Update OS and app; release notes may cite your bug fix. Disable extensions temporarily. Try another browser or device to see if problem is local.",
          "For printers: driver reinstall, queue cleared, correct Wi‑Fi network. For audio: correct output device selected, volume not muted at multiple layers.",
        ],
        {
          bulletPoints: [
            "Restart app → device → router/modem in that order",
            "Free disk space; nearly full storage slows the OS",
            "Disable VPN and browser extensions temporarily to isolate causes",
            "Try another browser or device to see if the problem is local",
            "Confirm you are logged in and subscriptions are active",
          ],
        }
      ),
      section(
        "network-diag",
        "9.3 Home network diagnostics",
        [
          "Power-cycle modem and router waiting 30 seconds between off and on. Check ISP outage maps or support status tweets during widespread failures. Split 2.4 GHz (range) versus 5 GHz (speed) bands; IoT devices often need 2.4. Rename SSID and set strong Wi‑Fi password; default credentials are scanned constantly.",
          "Mesh systems improve coverage but add nodes that need firmware updates. Ethernet backhaul between mesh nodes beats wireless backhaul when possible.",
          "If only one site fails, likely remote server issue — check downdetector.com responsibly, not conspiracy forums.",
        ],
        {
          bulletPoints: [
            "Power-cycle modem and router with a full 30-second power-off wait",
            "Rename default Wi‑Fi SSIDs and set strong passwords",
            "Put IoT devices on 2.4 GHz; use 5 GHz for laptops when nearby",
            "Update mesh node firmware; prefer Ethernet backhaul between nodes",
            "One failing site often means remote outage, not your entire network",
          ],
          citations: [
            {
              source: "FCC, Home Broadband and Wi-Fi tips",
              url: "https://www.fcc.gov/consumers/guides/home-broadband-wi-fi-tips",
            },
          ],
        }
      ),
      section(
        "getting-help",
        "9.4 Getting help: support tiers and scam support",
        [
          "Official support channels — vendor chat logged into account, carrier stores for SIM issues, employer IT ticket portal — beat random forum strangers for account-specific problems. Prepare serial numbers, OS version, screenshots. Escalation paths exist if first agent lacks expertise.",
          "Fake tech support pop-ups ('virus detected, call now') are scams. Legitimate companies do not cold-call about your computer. Hang up; reboot browser; run reputable scanner if worried.",
          "Community forums (Reddit, Stack Exchange) offer free expertise; verify solutions before destructive steps. Peer support for accessibility communities shares device-specific tricks.",
        ],
        {
          bulletPoints: [
            "Use vendor support logged into your account for billing-specific issues",
            "Prepare OS version, serial number, and screenshots before calling",
            "Pop-ups demanding immediate phone calls for 'viruses' are scams",
            "Verify forum advice before destructive steps like disk wipes",
            "Employer IT tickets beat random strangers for work machine problems",
          ],
          laws: [
            {
              name: "FTC Telemarketing Sales Rule (tech support fraud enforcement context)",
              year: "1995",
              summary:
                "FTC pursues deceptive tech-support and refund scams; legitimate vendors do not cold-call claiming your PC is infected.",
            },
          ],
          citations: [
            {
              source: "FTC, Tech Support Scams",
              url: "https://consumer.ftc.gov/articles/tech-support-scams",
            },
          ],
        }
      ),
      section(
        "when-replace",
        "9.5 When to repair, replace, or upgrade",
        [
          "If repair exceeds half replacement cost and device is old without security updates, replace. Battery-only swaps and screen repairs often economical on recent phones. Backup before any repair shop hands-on.",
          "Upgrade when workflow suffers measurably — not merely because marketing announces new model. Sustainability favors keeping devices until unsupported.",
          "Keep a simple personal runbook: Wi‑Fi name, router model, ISP phone, password manager emergency sheet location, backup status. Future-you solves problems faster.",
        ],
        {
          bulletPoints: [
            "Replace when repair cost exceeds half of replacement and OS is unsupported",
            "Battery and screen repairs are often worth it on recent phones",
            "Back up before any repair shop handles your device",
            "Upgrade when measured workflow pain justifies cost, not hype alone",
            "Maintain a one-page runbook: Wi‑Fi, ISP, router model, backup status",
          ],
          citations: [
            {
              source: "NIST, Security Tips for Non-Technical Users",
              url: "https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/security-tips-non-technical-users",
            },
          ],
        }
      ),
    ],
    "Methodical fixes and knowing when to escalate"
  ),

  chapter(
    "digital-citizenship",
    10,
    "Digital citizenship and staying current",
    [
      section(
        "citizenship-ethics",
        "10.1 Digital citizenship: rights, responsibilities, and norms",
        [
          "Digital citizenship is ethical, informed participation online — respecting others, understanding laws, contributing constructively. Freedom of expression varies by country; platforms moderate content under terms of service. Harassment, doxing (publishing private info), and swatting are harmful and often illegal.",
          "Intellectual property protects creators; fair use permits limited commentary, parody, and education with nuance. Sharing memes does not automatically excuse copyright. Creative Commons licenses clarify reuse permissions.",
          "Algorithmic feeds shape what you see; diversify information diet intentionally. Civic engagement includes verifying voting information from official election offices, not random posts.",
        ],
        {
          bulletPoints: [
            "Harassment, doxing, and swatting harm people and often break law",
            "Copyright and Creative Commons govern reuse — memes are not automatic fair use",
            "Platform terms differ by country; speech is not unlimited everywhere",
            "Verify civic information through official election and government sites",
            "Diversify feeds deliberately to avoid single-algorithm bubbles",
          ],
          laws: [
            {
              name: "Computer Fraud and Abuse Act (CFAA)",
              year: "1986",
              summary:
                "U.S. law criminalizing unauthorized computer access; hacking accounts or bypassing paywalls can qualify.",
            },
          ],
        }
      ),
      section(
        "ai-literacy",
        "10.2 Artificial intelligence in everyday tools",
        [
          "Generative AI — chatbots, image models, writing assistants — suggests text and media from patterns in training data. Outputs can be wrong (hallucinations), biased, or plagiarized. Use AI to brainstorm and draft with human review; do not submit AI work as original scholarship without disclosure policies allow.",
          "Deepfakes synthesize convincing fake audio/video; corroborate shocking media through reputable outlets. Label AI-generated content when sharing to reduce confusion.",
          "Privacy: prompts may train future models depending on vendor settings; opt out where offered for sensitive work. Employer policies may restrict uploading confidential data to public AI tools.",
        ],
        {
          bulletPoints: [
            "Treat AI drafts as starting points — verify facts and cite sources",
            "Disclose AI assistance when school or employer policies require it",
            "Corroborate shocking images and audio through reputable outlets",
            "Check whether prompts are stored for training; opt out for sensitive work",
            "Do not upload employer or patient data to public chatbots without policy approval",
          ],
          citations: [
            {
              source: "NIST AI Risk Management Framework 1.0",
              url: "https://www.nist.gov/itl/ai-risk-management-framework",
            },
            {
              source: "FTC, Consumer Guidance on AI products and services",
              url: "https://www.ftc.gov/technology/artificial-intelligence",
            },
          ],
        }
      ),
      section(
        "misinformation-media",
        "10.3 Media literacy, algorithms, and attention",
        [
          "Infinite scroll and notifications exploit attention economics; setting boundaries — time limits, grayscale mode, notification batching — protects sleep and focus. Children benefit from co-viewing and device contracts.",
          "Misinformation spreads faster than corrections; pause before sharing outrage-inducing posts. Check primary sources, especially health and finance claims.",
          "Digital wellbeing tools report screen time; use data to change habits, not only guilt. Physical activity and offline hobbies remain essential.",
        ],
        {
          bulletPoints: [
            "Batch notifications and set app time limits to protect sleep and focus",
            "Pause before sharing outrage headlines — check primary sources first",
            "Co-view with children and agree on device rules, not only filters",
            "Use screen-time reports to change habits, not only to feel guilty",
            "Balance online news with offline hobbies and physical activity",
          ],
          citations: [
            {
              source: "CISA, Misinformation and Disinformation",
              url: "https://www.cisa.gov/topics/election-security/mis-dis-mal-information",
            },
          ],
        }
      ),
      section(
        "lifelong-learning",
        "10.4 Staying current without overwhelm",
        [
          "Technology changes continuously; lifelong learning is career and civic necessity. Curate a few trustworthy newsletters or podcasts over chasing every hype cycle. Learn underlying concepts (encryption, cloud) so new branded products map to familiar ideas.",
          "Public libraries and community colleges offer free or low-cost digital literacy classes. Employer training portals cover security awareness annually — take seriously.",
          "Teach others what you learn; teaching solidifies knowledge and closes community gaps. Intergenerational patience reduces shame that stops people from asking questions.",
        ],
        {
          bulletPoints: [
            "Follow a few trustworthy sources instead of every product launch",
            "Learn durable concepts — encryption, cloud, MFA — that outlast brands",
            "Use libraries and community college classes for hands-on help",
            "Complete employer security awareness training seriously",
            "Teach someone else; explaining reinforces your own understanding",
          ],
          citations: [
            {
              source: "NIST, National Initiative for Cybersecurity Education (NICE)",
              url: "https://www.nist.gov/nice",
            },
          ],
        }
      ),
      section(
        "future-you",
        "10.5 Building habits that last",
        [
          "Schedule monthly security hygiene: updates, password manager checkup, backup test, permission audit. Quarterly, review subscriptions and installed apps. Annually, revisit digital estate documents and recovery codes.",
          "Technology should serve your goals — education, work, health, relationships — not reverse. When tools distract, redesign environment: remove apps from home screen, disable non-human notifications, keep devices out of bedroom.",
          "You now possess mental models spanning hardware to citizenship. The field will evolve; your ability to learn systematically is the durable skill. Stay curious, skeptical in healthy measure, and kind online — the human layer no firmware update can replace.",
        ],
        {
          bulletPoints: [
            "Match devices and apps to real tasks, not marketing hype",
            "Protect accounts with unique passwords and strong MFA",
            "Back up data with tested restore paths",
            "Troubleshoot methodically; seek official support",
            "Participate online with ethics, accessibility, and media literacy",
          ],
          laws: [
            {
              name: "Family Educational Rights and Privacy Act (FERPA)",
              year: "1974",
              summary:
                "U.S. law protecting student education records; schools and ed-tech must handle grades and records under strict sharing rules.",
            },
          ],
          citations: [
            {
              source: "EFF, Digital Security Tips for Protesters (general digital hygiene)",
              url: "https://ssd.eff.org/",
            },
          ],
        }
      ),
    ],
    "Responsible participation and learning as technology evolves"
  ),
];
