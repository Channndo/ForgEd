import type { TextbookChapter, TextbookIntro } from "@/lib/courses/textbook/types";
import { chapter, section } from "@/lib/courses/textbook/factory";

export const IT_TEXTBOOK_INTRO: TextbookIntro = {
  title: "IT Fundamentals",
  subtitle:
    "ForgEd deep-dive — computing history, hardware, networks, cloud, security, and career-ready literacy",
  paragraphs: [
    "Information technology is the infrastructure of modern work, education, commerce, and civic life. From the smartphone in your pocket to the data centers that host global services, IT systems translate human intent into stored data, transmitted signals, and automated decisions. This course builds a coherent mental model so you can use technology confidently, troubleshoot common problems, and speak the language of help desks, vendors, and certification exams.",
    "You will move from historical foundations through hardware and operating systems, then into files, networking, the internet, and cloud services. Later chapters treat systematic troubleshooting, baseline security, productivity tools, and IT career pathways. The material aligns with introductory CompTIA IT Fundamentals (ITF+) and A+ concepts at a survey level — it is general education, not a substitute for hands-on lab time or vendor-specific training.",
    "Use the table of contents to study chapter by chapter or jump to a topic when you need a refresher before an interview, a help-desk ticket, or a certification study plan. Diagrams and standards referenced here (IEEE, ISO, NIST, RFCs) are cited for further reading; always verify current product versions and organizational policies in real deployments.",
  ],
};

export const IT_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "computing-history",
    1,
    "Computing history: From calculation to the digital age",
    [
      section(
        "pre-electronic",
        "1.1 Pre-electronic calculation and mechanical aids",
        [
          "Long before electronic computers, societies needed reliable arithmetic for trade, astronomy, and taxation. The abacus, used across Mesopotamia, China, and Rome, encoded place value in beads slid on rods — a tangible algorithm for addition and subtraction that trained users in systematic calculation rather than memorization alone.",
          "In the seventeenth century, Blaise Pascal and Gottfried Leibniz designed mechanical calculators that performed repeated addition through geared wheels. These devices were fragile and expensive, yet they demonstrated that arithmetic could be mechanized. Charles Babbage's Analytical Engine (1830s concept) proposed program-controlled operation via punched cards borrowed from Jacquard looms — an architectural idea that would reappear a century later as stored-program computers.",
          "Human computers — often women mathematicians — performed manual computations for navigation tables and ballistics through the early twentieth century. Their labor underscores that \"computing\" was originally a human profession; machines later augmented and eventually replaced much of that repetitive work, shifting human roles toward programming, verification, and interpretation of results.",
        ],
        {
          bulletPoints: [
            "Abacus: early place-value calculation aid (multiple civilizations)",
            "Pascaline / stepped reckoner: mechanical arithmetic (1600s–1700s)",
            "Babbage Analytical Engine: programmable mechanical design (never fully built)",
            "Human computers: manual computation workforce before electronic machines",
          ],
          citations: [
            {
              source: "Computer History Museum — Timeline of Computer History",
              url: "https://www.computerhistory.org/timeline/",
              note: "Curated exhibits on mechanical and early electronic systems",
            },
          ],
        }
      ),
      section(
        "electronic-origins",
        "1.2 Electronic computers and World War II drivers",
        [
          "World War II accelerated demand for rapid cryptanalysis and fire-control calculations. Colossus (1943–1945, Bletchley Park) used vacuum tubes to break Lorenz cipher traffic; ENIAC (1945, U.S.) was a general-purpose electronic calculator weighing tons and consuming enormous power. Both proved that vacuum-tube switching could outperform mechanical speed limits, though reliability and programming remained painful.",
          "Alan Turing's 1936 paper on computable numbers defined a theoretical machine capable of executing any algorithm given sufficient tape and time — the Turing machine model still underpins computer science curricula. John von Neumann's 1945 report described stored-program architecture: instructions and data reside in the same addressable memory, enabling programs to modify themselves and loaders to bootstrap operating systems.",
          "Postwar institutions — universities, national laboratories, and corporations — funded research that miniaturized components and standardized programming. The shift from custom wiring panels to stored programs made software a durable asset separate from hardware, laying the economic basis for the software industry.",
        ],
        {
          bulletPoints: [
            "Colossus: electronic code-breaking (UK, WWII)",
            "ENIAC: first general-purpose electronic computer (US, 1945)",
            "Turing machine: theoretical model of computation (1936)",
            "Von Neumann architecture: stored program in unified memory",
          ],
        }
      ),
      section(
        "transistor-mainframe",
        "1.3 Transistors, mainframes, and the batch era",
        [
          "The transistor (Bell Labs, 1947) replaced fragile vacuum tubes with solid-state switches, shrinking size and power while improving reliability. Mainframe computers such as IBM's System/360 (1964) offered families of compatible machines and operating systems — a business strategy that reduced customer migration risk and established IBM's dominance in enterprise computing for decades.",
          "Early operating environments were batch-oriented: operators queued jobs on punched cards or tape, and the machine executed them sequentially with minimal interactive feedback. Time-sharing experiments in the 1960s multiplexed one processor among many terminals, giving multiple users the illusion of dedicated machines and foreshadowing modern multi-user servers.",
          "High-level languages (FORTRAN, COBOL, later C) abstracted hardware details so programmers could express algorithms in portable syntax. Compilers translated source code into machine instructions, accelerating development and creating a software supply chain distinct from hardware manufacturing.",
        ],
        {
          citations: [
            {
              source: "IEEE Annals of the History of Computing",
              url: "https://www.computer.org/csdl/magazine/an",
              note: "Peer-reviewed scholarship on computing history",
            },
          ],
        }
      ),
      section(
        "personal-micro",
        "1.4 Personal computing and the microprocessor revolution",
        [
          "Intel's 4004 (1971) demonstrated that entire CPUs could fit on a single chip. The Altair 8800 (1975) sparked hobbyist kits; Apple II (1977), Commodore PET, and Tandy TRS-80 brought color graphics and expansion slots to homes and schools. IBM's PC (1981) used an open architecture with licensed DOS from Microsoft, unintentionally enabling a clone market that commoditized hardware.",
          "Graphical user interfaces, pioneered at Xerox PARC and commercialized by Apple Macintosh (1984) and Microsoft Windows (1990s), replaced command-line memorization with pointers, windows, and icons for mainstream users. Desktop publishing and spreadsheet software (VisiCalc, Lotus 1-2-3, Excel) turned PCs into business appliances, not only hobby machines.",
          "Moore's Law — the observation that transistor density roughly doubles every two years — guided industry roadmaps for decades. While physics and economics now complicate scaling, the cultural expectation of ever-cheaper compute capacity shaped consumer software design, from bloated applications to cloud offload of heavy processing.",
        ],
        {
          bulletPoints: [
            "1971: Intel 4004 — first commercial microprocessor on one chip",
            "1975: Altair 8800 — hobbyist kit triggering home computer movement",
            "1981: IBM PC + MS-DOS — open architecture, clone ecosystem",
            "1984: Macintosh — mass-market GUI; Windows follows for PC clones",
          ],
        }
      ),
      section(
        "internet-mobile",
        "1.5 Networks, the internet, and mobile computing",
        [
          "ARPANET (1969) linked research sites with packet switching — breaking messages into packets that could reroute around failures. TCP/IP (1980s standardization) became the lingua franca of internetworking; the Domain Name System (1983) mapped human-readable names to numeric addresses, scaling the internet beyond memorized IP lists.",
          "Tim Berners-Lee's World Wide Web (1989–1991) added hypertext documents and URLs atop the internet, not replacing TCP/IP but making information publishing accessible. Browsers (Mosaic, Netscape, Internet Explorer, later Chrome and Firefox) turned the web into a platform for commerce, media, and applications delivered without local installation.",
          "Smartphones fused cellular radios, sensors, and app ecosystems. Apple's iPhone (2007) and Google's Android (2008) shifted internet access from desktop-first to mobile-first, influencing API design, responsive web layout, and security models centered on app sandboxes and biometric unlock. Cloud data centers now back most mobile experiences with synchronized accounts and push notifications.",
        ],
        {
          bulletPoints: [
            "1969: ARPANET — packet-switched research network",
            "1983: DNS — hierarchical name resolution (RFC 1035 lineage)",
            "1991: WWW — HTTP, HTML, URI model for documents and links",
            "2007–2008: Modern smartphone era — app stores, always-on connectivity",
          ],
          citations: [
            {
              source: "Internet Society — History of the Internet",
              url: "https://www.internetsociety.org/internet/history-internet/",
            },
          ],
        }
      ),
    ],
    "From abacus to cloud — how ideas compounded across centuries"
  ),

  chapter(
    "hardware",
    2,
    "Computer hardware: Components and how they work together",
    [
      section(
        "cpu-architecture",
        "2.1 Processors, cores, and performance metrics",
        [
          "The central processing unit (CPU) executes instructions fetched from memory. Modern CPUs contain multiple cores — independent execution units sharing cache and memory controllers — so operating systems can schedule parallel threads. Clock speed (GHz) measures cycles per second but is not the sole performance indicator; pipeline depth, cache size, branch prediction, and instruction set extensions (AES-NI, AVX) materially affect real workloads.",
          "The instruction cycle — fetch, decode, execute, writeback — repeats billions of times per second. Pipelining overlaps stages of successive instructions; superscalar designs issue multiple instructions per cycle when dependencies allow. When predictions fail (branch mispredict), pipelines stall, which is why compiler optimizations and CPU microarchitecture matter for databases and games alike.",
          "ARM and x86 dominate client and server markets with different power-performance tradeoffs. ARM's RISC heritage favors mobile and Apple Silicon laptops; x86-64's CISC lineage and vast PC ecosystem dominate enterprise desktops and many cloud instances. Choosing hardware requires matching workload: compilation, virtualization, AI inference, and web serving stress different subsystems.",
        ],
        {
          bulletPoints: [
            "Core count vs. clock speed — parallel threads vs. single-thread speed",
            "L1/L2/L3 cache — faster memory closer to the CPU",
            "Thermal design power (TDP) — heat and cooling constraints",
            "64-bit addressing — larger RAM pools than 32-bit limits",
          ],
        }
      ),
      section(
        "memory",
        "2.2 RAM, ROM, and the memory hierarchy",
        [
          "Random access memory (RAM) holds running programs and data the CPU accesses quickly. Dynamic RAM (DRAM) requires refresh cycles; static RAM (SRAM) is faster and used in CPU caches. When RAM fills, operating systems spill least-recently-used pages to swap files on disk, dramatically slowing performance — a key reason insufficient RAM feels like \"the computer is broken.\"",
          "Read-only memory (ROM) and firmware store boot instructions and low-level device settings. UEFI firmware replaced legacy BIOS on most PCs, providing secure boot hooks, GUI configuration, and network boot options. Non-volatile memory express (NVMe) SSDs blur the line between storage and memory with latencies orders of magnitude lower than spinning disks.",
          "The memory hierarchy — registers, cache, RAM, SSD, HDD, archival tape — trades speed for capacity and cost. Programmers and administrators who understand locality of reference (reuse nearby data) design faster software and right-size hardware budgets instead of overspending on CPU while starving I/O.",
        ],
        {
          citations: [
            {
              source: "Hennessy & Patterson — Computer Architecture: A Quantitative Approach",
              note: "Standard reference on memory hierarchies and CPU design",
            },
          ],
        }
      ),
      section(
        "storage-devices",
        "2.3 Storage media and interfaces",
        [
          "Hard disk drives (HDDs) use magnetic platters and moving heads; they offer high capacity per dollar but suffer mechanical latency and shock sensitivity. Solid-state drives (SSDs) store bits in NAND flash cells with no moving parts, excelling at random reads/writes critical for operating system boot and database transactions.",
          "Interfaces evolved from Parallel ATA and SCSI to Serial ATA (SATA) and NVMe over PCI Express lanes. NVMe protocols reduce command overhead and support many queues, unlocking SSD throughput above 3 GB/s on consumer hardware. External USB-C and Thunderbolt enclosures extend these speeds to portable workflows with tradeoffs in cable quality and controller chips.",
          "Redundancy strategies — RAID levels, erasure coding in cloud object storage — protect against device failure. RAID 1 mirrors disks; RAID 5/6 stripe with parity; RAID 10 combines mirror and stripe for performance and resilience. No RAID replaces backups: deletion, ransomware, and site disasters require separate copies.",
        ],
        {
          bulletPoints: [
            "HDD: high capacity, mechanical latency, good for cold archives",
            "SATA SSD: common laptop/desktop upgrade path",
            "NVMe SSD: lowest latency for OS and databases",
            "SMART monitoring: predictive failure alerts on drives",
          ],
        }
      ),
      section(
        "motherboard-io",
        "2.4 Motherboards, buses, and expansion",
        [
          "The motherboard integrates the CPU socket, RAM slots, chipset, and peripheral interfaces. Chipsets route traffic between CPU, storage, USB, PCIe cards, and onboard audio/network controllers. Form factors (ATX, micro-ATX, Mini-ITX) dictate case size and expansion slot count for desktops; laptops solder many components for thinness.",
          "PCI Express (PCIe) lanes connect graphics cards, NVMe drives, and NICs with scalable bandwidth (x1, x4, x8, x16). USB generations (3.2,4) power peripherals, docks, and displays via alternate modes. Thunderbolt combines PCIe and DisplayPort over USB-C for single-cable workstations.",
          "Power supplies convert AC to regulated DC rails (+12V, +5V, +3.3V) with efficiency ratings (80 PLUS). Insufficient wattage or failing capacitors cause random reboots under load. Proper cable management and airflow reduce thermal throttling that silently lowers CPU and GPU clocks.",
        ],
        {
          bulletPoints: [
            "Chipset: I/O routing between CPU and peripherals",
            "PCIe: high-speed expansion for GPU, NVMe, capture cards",
            "UEFI firmware: boot order, secure boot, hardware initialization",
            "PSU wattage headroom: 20–30% above measured peak load is common guidance",
          ],
        }
      ),
      section(
        "peripherals",
        "2.5 Peripherals, displays, and human interface devices",
        [
          "Monitors translate frame buffers into light via LCD, OLED, or projection technologies. Resolution (1920×1080, 3840×2160), refresh rate (60–240 Hz), and color gamut affect design, gaming, and accessibility. Multiple monitors increase productivity for knowledge work when GPU outputs and desk ergonomics support them.",
          "Keyboards and mice use USB or wireless dongles; Bluetooth reduces port clutter but introduces pairing and latency considerations for gaming. Webcams, microphones, and speakers integrate into unified communications; driver quality and privacy shutters matter for hybrid work.",
          "Printers (laser vs. inkjet), scanners, and label devices remain common in offices. Network-attached printers expose management interfaces that must be patched — unpatched printers have been lateral movement points in enterprise breaches. Universal drivers and IPP (Internet Printing Protocol) simplify deployment but still require VLAN segmentation on corporate networks.",
        ],
        {
          citations: [
            {
              source: "USB Implementers Forum — USB4 and Type-C specifications",
              url: "https://www.usb.org/",
            },
          ],
        }
      ),
    ],
    "Physical machines that execute software and connect to the world"
  ),

  chapter(
    "operating-systems",
    3,
    "Operating systems: Managing hardware and software",
    [
      section(
        "os-role",
        "3.1 What an operating system does",
        [
          "An operating system (OS) is systems software that abstracts hardware into services applications can call: file I/O, networking, memory allocation, scheduling, and security enforcement. Without an OS, each program would need custom drivers and could corrupt neighbors by writing anywhere in physical memory.",
          "The kernel runs in privileged mode, handling interrupts, device drivers, and system calls. User applications run in unprivileged mode and request kernel services through syscalls (open, read, write, socket). This boundary is foundational to stability and security — buggy apps should trap instead of crashing the entire machine.",
          "Shells and graphical desktops are user-facing layers atop the kernel. Windows Explorer, macOS Finder, and Linux desktop environments (GNOME, KDE) orchestrate windows and settings while relying on the same kernel primitives underneath.",
        ],
        {
          bulletPoints: [
            "Kernel: privileged core (scheduling, memory, drivers)",
            "User space: applications isolated by permissions and virtual memory",
            "System call: controlled gateway from apps to kernel services",
            "Device driver: kernel module translating OS requests to hardware commands",
          ],
        }
      ),
      section(
        "windows",
        "3.2 Microsoft Windows in enterprise and home use",
        [
          "Windows dominates corporate desktops due to Active Directory integration, Group Policy, and a vast ISV ecosystem. NT lineage kernels (Windows 10/11) support Win32, UWP, and Windows Subsystem for Linux, letting developers run Linux tools alongside Office suites.",
          "Windows Update delivers security patches, feature updates, and driver packages on cadences controlled by IT via Windows Server Update Services (WSUS) or cloud MDM. Misconfigured update rings cause patch Tuesday surprises — testing rings (pilot, broad) reduce downtime.",
          "Licensing (OEM, retail, volume) and activation (KMS, digital entitlement) affect compliance. BitLocker drive encryption and Windows Defender provide baseline security when enabled by policy; they are not substitutes for least-privilege user accounts and network segmentation.",
        ],
        {
          laws: [
            {
              name: "Microsoft Product Terms / Volume Licensing",
              summary:
                "Governs legal use of Windows editions in organizations; verify entitlements before imaging fleets.",
            },
          ],
        }
      ),
      section(
        "macos-linux",
        "3.3 macOS, Linux, and Unix heritage",
        [
          "macOS builds on Darwin (BSD + Mach microkernel elements) with Apple's integration of hardware, software, and services. Gatekeeper, notarization, and System Integrity Protection (SIP) reduce unsigned malware installation at the cost of stricter developer workflows.",
          "Linux is a kernel, not a single OS: distributions (Ubuntu, Fedora, Debian, RHEL) package kernels with GNU utilities, package managers (apt, dnf, yum), and desktop choices. Servers often run Linux headless for web stacks, containers, and cloud instances because licensing costs are favorable and automation tooling is mature.",
          "POSIX standards define portable APIs for shells, paths, and permissions. macOS Terminal and Windows WSL2 bring Unix-style pipelines to heterogeneous teams. Understanding file permissions (rwx, chmod, ACLs) prevents accidental world-readable secrets on shared servers.",
        ],
        {
          bulletPoints: [
            "Distribution: curated Linux OS packaging kernel + apps + policies",
            "Package manager: signed repositories vs. third-party PPAs (risk tradeoff)",
            "macOS SIP: protects system files from modification even by root malware",
            "WSL2: Linux kernel VM integrated with Windows filesystem and networking",
          ],
          citations: [
            {
              source: "IEEE Std 1003.1 (POSIX.1)",
              note: "Portable operating system interface definitions",
            },
          ],
        }
      ),
      section(
        "processes-memory",
        "3.4 Processes, threads, and virtual memory",
        [
          "A process is an instance of a running program with its own virtual address space, handles, and security token. Threads share a process's memory but have independent stacks; multithreaded programs exploit multicore CPUs for responsive UIs and parallel computation.",
          "The scheduler allocates CPU quanta, preempting long-running tasks to keep systems responsive. Priority classes and affinity masks let administrators favor critical workloads. Deadlocks occur when threads circularly wait on locks — design patterns (lock ordering, timeouts) mitigate them in server code.",
          "Virtual memory maps each process's view to physical RAM and page files, using translation lookaside buffers (TLBs) for speed. Copy-on-write optimizes forked processes; memory leaks in long-running services eventually exhaust pools and require restarts or patching.",
        ],
        {
          bulletPoints: [
            "Task Manager / Activity Monitor: live view of CPU, RAM, disk per process",
            "Handle leak: unreleased OS objects degrading servers over time",
            "OOM killer (Linux): terminates processes when RAM exhausted",
            "Page file / swap: disk-backed extension of RAM (performance penalty)",
          ],
        }
      ),
      section(
        "updates-patches",
        "3.5 Updates, patches, and lifecycle management",
        [
          "Vendors publish security advisories with CVE identifiers describing vulnerabilities and affected versions. Operating system patches close kernel and component flaws; delaying critical patches exposes organizations to wormable exploits (e.g., EternalBlue-era SMB issues).",
          "Feature updates change UI and APIs; enterprises defer them until application compatibility is validated. Mobile OS updates depend on manufacturer support lifecycles — Android fragmentation historically left devices unpatched, influencing enterprise MDM policies.",
          "End-of-life (EOL) dates trigger mandatory upgrades. Windows 10 EOL transitions push hardware assessments: TPM 2.0 and Secure Boot requirements for Windows 11 exclude some otherwise functional PCs, raising sustainability and equity discussions in schools and nonprofits.",
        ],
        {
          laws: [
            {
              name: "NIST SP 800-40 Rev. 4 — Guide to Enterprise Patch Management",
              summary:
                "Framework for testing, deploying, and verifying patches across diverse endpoints.",
            },
          ],
          citations: [
            {
              source: "MITRE CVE Program",
              url: "https://www.cve.org/",
              note: "Common Vulnerabilities and Exposures dictionary",
            },
          ],
        }
      ),
    ],
    "The control plane between users, applications, and hardware"
  ),

  chapter(
    "files-storage",
    4,
    "Files, filesystems, and data storage",
    [
      section(
        "filesystem-concepts",
        "4.1 Files, directories, and metadata",
        [
          "Files are named byte sequences stored on media; directories (folders) organize names in hierarchies. Metadata — size, timestamps, permissions, alternate data streams — lives in inodes (Unix) or master file table records (Windows NTFS). Path syntax differs: backslashes on Windows, forward slashes on Unix, with root drives (C:\\) vs. single root (/).",
          "Extensions (.docx, .pdf) hint at format but do not guarantee content type — attackers rename malware to exploit double-click habits. Magic bytes at file headers let forensics tools identify true types. Case sensitivity on Linux can break scripts written assuming case-insensitive Windows paths.",
          "Junctions, symlinks, and hard links create multiple names for the same storage. Symlinks can cross volumes and point to remote targets; hard links share inode data on the same volume. Broken symlinks after drive remapping are a common post-migration help-desk issue.",
        ],
        {
          bulletPoints: [
            "Absolute path: full location from root or drive letter",
            "Relative path: location from current working directory",
            "NTFS permissions: ACLs inheriting down folder trees",
            "ext4/XFS: common Linux filesystems for servers and desktops",
          ],
        }
      ),
      section(
        "formats-compression",
        "4.2 File formats, compression, and encoding",
        [
          "Structured formats (JSON, XML, CSV) exchange data between systems with varying schema rigor. Binary formats (PNG, MP4, SQLite) embed headers and compression internally. Proprietary formats (legacy Office .doc) complicate long-term archival; open standards ease migration.",
          "Lossless compression (ZIP, gzip) preserves exact bytes; lossy compression (JPEG, AAC) discards imperceptible detail for smaller media. Archives bundle many files with checksums for integrity — important when shipping logs to vendors or bundling installers.",
          "Character encoding (UTF-8) represents international text in single-byte-compatible fashion. Mojibake — garbled text — appears when apps misinterpret encodings; standardizing UTF-8 across pipelines prevents ticket noise in global teams.",
        ],
        {
          citations: [
            {
              source: "Unicode Consortium — UTF-8 specification",
              url: "https://www.unicode.org/",
            },
          ],
        }
      ),
      section(
        "backup-strategies",
        "4.3 Backup, restore, and the 3-2-1 rule",
        [
          "Backups protect against deletion, corruption, ransomware, and site loss. The 3-2-1 guideline recommends three copies of data, on two different media types, with one offsite. Versioned backups (snapshots, incremental chains) let you recover prior states before silent corruption spread.",
          "Recovery time objective (RTO) and recovery point objective (RPO) express how fast you must restore and how much data loss is tolerable. Tape and cloud cold storage lower cost for archival; hot replicas and clustering reduce RTO for databases at higher spend.",
          "Restore drills prove backups are not Schrödinger's archives — untested backups fail during crises. Document restore runbooks with credentials, network paths, and application dependency order (DNS before web servers, databases before app tiers).",
        ],
        {
          bulletPoints: [
            "Full vs. incremental vs. differential backup tradeoffs",
            "Immutable backups: WORM storage resisting ransomware encryption",
            "Cloud sync ≠ backup — deletions replicate without versioning policy",
            "Bare-metal restore: OS + apps + data image recovery",
          ],
          laws: [
            {
              name: "NIST SP 800-34 Rev. 1 — Contingency Planning",
              summary: "Guides backup, alternate sites, and recovery testing for federal systems; widely adopted in industry.",
            },
          ],
        }
      ),
      section(
        "cloud-sync",
        "4.4 Cloud sync, sharing, and collaboration storage",
        [
          "Services like OneDrive, Google Drive, Dropbox, and iCloud synchronize folders across devices via change detection and conflict files. Bandwidth throttling and selective sync prevent laptops on metered connections from exhausting data caps.",
          "Shared links create exfiltration risk if permissions are \"anyone with the link.\" Data loss prevention (DLP) policies scan uploads for PCI, PHI, or IP patterns. Administrators audit sharing externally and revoke stale links after projects end.",
          "Version history in cloud drives supplements but does not replace enterprise backup for SaaS tenants — Microsoft and Google provide separate backup APIs and third-party tools for litigation hold and point-in-time recovery beyond default retention.",
        ],
        {
          bulletPoints: [
            "Conflict copies: same filename when two editors save offline edits",
            "Shared drive / SharePoint: team ownership vs. personal OneDrive",
            "Encryption at rest: provider-managed keys vs. customer-managed (CMK)",
            "Legal hold: preserve data beyond normal deletion cycles",
          ],
        }
      ),
      section(
        "data-lifecycle",
        "4.5 Data lifecycle, retention, and privacy",
        [
          "Data lifecycle management classifies information from creation through active use, archival, and secure disposal. Retention schedules satisfy tax, employment, and industry rules while minimizing breach blast radius — you cannot leak what was deleted per policy.",
          "Sanitization standards (NIST SP 800-88) define clear, purge, and destroy levels for media leaving custody. SSD secure erase differs from HDD degaussing; cloud tenants require cryptographic erase or contractually verified destruction.",
          "Privacy regulations influence where files may reside. GDPR emphasizes lawful basis and data subject rights; U.S. sector laws (HIPAA, GLBA) add safeguards for health and financial records. IT fundamentals include knowing when to escalate to legal/privacy officers before copying databases to laptops.",
        ],
        {
          laws: [
            {
              name: "GDPR (EU) 2016/679",
              year: "2016",
              summary: "Cross-border personal data rules affecting storage location, retention, and subject access requests.",
            },
            {
              name: "NIST SP 800-88 Rev. 1 — Media Sanitization",
              summary: "U.S. guidance on clearing and destroying storage devices by confidentiality level.",
            },
          ],
        }
      ),
    ],
    "How information is named, stored, protected, and retired"
  ),

  chapter(
    "networking",
    5,
    "Networking: Connecting devices and services",
    [
      section(
        "network-models",
        "5.1 LANs, WANs, and the OSI/TCP-IP models",
        [
          "Local area networks (LANs) connect devices within a building or campus using Ethernet switches and Wi-Fi access points. Wide area networks (WANs) link sites across cities via ISP/MPLS links or VPN overlays. The OSI model (seven layers) teaches separation of concerns; the TCP/IP model (four layers) reflects internet practice.",
          "Physical layer concerns cables, fiber, and radio modulation. Data link handles MAC addresses and switching. Network layer routes IP packets; transport layer provides TCP reliability and UDP simplicity. Application layer protocols (HTTP, SMTP, DNS) ride atop sockets APIs programmers use daily.",
          "Understanding encapsulation — each layer wrapping headers — explains why Wireshark displays nested protocols and why MTU mismatches cause fragmentation or black-hole behavior on VPN tunnels.",
        ],
        {
          bulletPoints: [
            "OSI layers 1–7: Physical → Application (teaching model)",
            "TCP/IP: Link, Internet, Transport, Application (operational model)",
            "Switch: forwards frames by MAC within VLANs",
            "Router: forwards packets by IP between subnets",
          ],
        }
      ),
      section(
        "ip-addressing",
        "5.2 IP addresses, subnets, and DHCP",
        [
          "IPv4 addresses are 32-bit dotted decimals (192.168.1.10); IPv6 uses 128-bit hexadecimal groups to solve address exhaustion and simplify autoconfiguration. Private ranges (RFC 1918: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) are not routed on the public internet — NAT translates them at gateways.",
          "Subnet masks and CIDR notation (/24) define network vs. host portions. Incorrect masks strand devices on isolated broadcast domains. DHCP servers lease addresses, gateways, and DNS options automatically; reservations pin servers to stable IPs.",
          "Dual-stack networks run IPv4 and IPv6 concurrently. Happy Eyeballs algorithms try IPv6 first with IPv4 fallback. Firewalls must filter both families — attackers probe IPv6 tunnels organizations forgot to monitor.",
        ],
        {
          citations: [
            {
              source: "RFC 1918 — Address Allocation for Private Internets",
              url: "https://www.rfc-editor.org/rfc/rfc1918",
            },
            {
              source: "RFC 8200 — Internet Protocol, Version 6 (IPv6)",
              url: "https://www.rfc-editor.org/rfc/rfc8200",
            },
          ],
        }
      ),
      section(
        "dns-dhcp",
        "5.3 DNS, name resolution, and common records",
        [
          "The Domain Name System maps names to IPs and mail routes. A records point hosts to IPv4; AAAA to IPv6; CNAME aliases one name to another; MX prioritizes mail exchangers; TXT holds verification strings (SPF, DKIM, DMARC alignment). TTL values control caching duration — low TTLs ease migrations but increase query load.",
          "Recursive resolvers (ISP, 1.1.1.1, 8.8.8.8) query authoritative servers starting at root hints. DNSSEC cryptographically signs records to thwart spoofing, though adoption and operator complexity remain barriers on some networks.",
          "Split-horizon DNS returns different answers inside corporate networks vs. the internet, enabling intranet names without public exposure. Misconfigured DNS causes \"it works on my machine\" when hosts files or stale caches mask authoritative truth.",
        ],
        {
          bulletPoints: [
            "Forward lookup: hostname → IP (A/AAAA)",
            "Reverse lookup: IP → PTR record (often neglected)",
            "Authoritative vs. recursive resolver roles",
            "DNS caching: flush client cache when troubleshooting moves",
          ],
        }
      ),
      section(
        "wifi-ethernet",
        "5.4 Ethernet, Wi-Fi, and physical connectivity",
        [
          "Ethernet over twisted pair (Cat5e/6/6a) supports 1–10 Gbps on copper with distance limits near 100 meters. Fiber spans campuses and data centers with single-mode for long haul and multimode for shorter racks. Auto-negotiation selects speed/duplex; mismatched legacy gear can force half-duplex collisions rare today but memorable in certifications.",
          "Wi-Fi standards (802.11ax Wi-Fi 6/6E) use OFDMA and wider channels for dense environments. SSIDs, WPA2-Enterprise (802.1X), and WPA3-PSK protect airspace; open guest networks should isolate clients from internal VLANs. Channel planning avoids co-channel interference in apartment-dense sites.",
          "PoE (Power over Ethernet) energizes phones, cameras, and access points from switches — simplifying cabling but requiring wattage budgeting per port budget classes (802.3af/at/bt).",
        ],
        {
          bulletPoints: [
            "Gigabit Ethernet: 1000 Mbps over Cat5e+ (1 GbE)",
            "Wi-Fi 6E: 6 GHz band where regulators allow (less congestion)",
            "Mesh systems: multiple APs backhauled wired or wireless",
            "Cable tester: verifies pairs and length for install troubleshooting",
          ],
        }
      ),
      section(
        "network-security-basics",
        "5.5 Firewalls, VPNs, and zero-trust orientation",
        [
          "Firewalls filter traffic by IP, port, protocol, and increasingly application identity. Stateful inspection tracks connection tables; next-generation firewalls add IPS, malware sandboxing, and TLS inspection with privacy tradeoffs.",
          "Virtual private networks (IPsec, SSL VPN, WireGuard) encrypt traffic across untrusted paths. Remote work shifted emphasis from castle-and-moat VPNs to zero-trust models verifying user, device health, and context per session regardless of network location.",
          "Network segmentation limits lateral movement — IoT cameras on separate VLANs from finance workstations. NAC (802.1X) quarantines unpatched laptops until remediation. Logging NetFlow and firewall denies aids incident response when correlated with SIEM timestamps.",
        ],
        {
          laws: [
            {
              name: "NIST SP 800-207 — Zero Trust Architecture",
              summary: "Principles for continuous verification instead of implicit trust inside the perimeter.",
            },
          ],
        }
      ),
    ],
    "How machines find each other and exchange data safely"
  ),

  chapter(
    "internet-cloud",
    6,
    "The internet and cloud computing",
    [
      section(
        "how-internet-works",
        "6.1 ISPs, peering, and packets across the globe",
        [
          "Your home router obtains a public IP (or carrier-grade NAT) from an internet service provider (ISP) via DHCP or PPPoE. Traffic hops through autonomous systems (ASNs) that peer at internet exchange points, BGP selecting paths based on policies and reachability, not geography alone.",
          "Undersea cables and terrestrial fiber constitute the physical internet; outages in Egypt's Suez corridor or Atlantic cuts remind users that clouds are grounded in geology and geopolitics. Latency budgets include speed-of-light limits — coast-to-coast RTT near 70 ms before application processing.",
          "Content delivery networks (CDNs) cache static assets at edge PoPs, reducing origin load and improving perceived speed. Anycast DNS routes users to nearby edges automatically during football-scale traffic spikes.",
        ],
        {
          bulletPoints: [
            "BGP: inter-domain routing protocol of the internet",
            "ISP tiers: Tier 1 backbones vs. regional access providers",
            "Traceroute / mtr: hop-by-hop path diagnostics",
            "Peering vs. transit: settlement-free vs. paid capacity",
          ],
        }
      ),
      section(
        "web-email",
        "6.2 Web, email, and application protocols",
        [
          "HTTP/HTTPS request-response powers the web; TLS certificates authenticate servers and encrypt payloads. HTTP/2 multiplexes streams; HTTP/3 uses QUIC over UDP to reduce head-of-line blocking on lossy mobile networks.",
          "Email flows SMTP → MTA relays → IMAP/POP3 retrieval. SPF, DKIM, and DMARC mitigate spoofing but require DNS discipline. Phishing often abuses look-alike domains and HTML links masking true destinations — reason to hover and verify senders.",
          "APIs (REST JSON, GraphQL) let mobile apps and SPAs consume backend services. Rate limits, API keys, and OAuth2 scopes govern abuse; never embed long-lived secrets in client-side JavaScript.",
        ],
        {
          citations: [
            {
              source: "RFC 9110 — HTTP Semantics",
              url: "https://www.rfc-editor.org/rfc/rfc9110",
            },
          ],
        }
      ),
      section(
        "cloud-models",
        "6.3 IaaS, PaaS, SaaS, and shared responsibility",
        [
          "Infrastructure as a Service (IaaS) rents VMs, networks, and disks — you patch the guest OS. Platform as a Service (PaaS) abstracts runtimes (App Service, Elastic Beanstalk). Software as a Service (SaaS) delivers complete apps (Microsoft 365, Salesforce). Responsibility shifts right as you climb the stack: SaaS customers focus on identity and data classification; IaaS customers harden VMs and networks.",
          "Elasticity scales resources up/down with demand; capital expense shifts to operational expense on monthly bills. Misconfigured S3 buckets and open security groups remain top breach causes — cloud is secure when engineered, not magically.",
          "Regions and availability zones place replicas in separate data centers for fault tolerance. Data residency laws may require EU-only regions; architects document where backups and support staff access occur.",
        ],
        {
          bulletPoints: [
            "IaaS: EC2, Azure VMs, Compute Engine",
            "PaaS: managed databases, app hosting without OS patching",
            "SaaS: email, CRM — fastest time-to-value, least control",
            "Shared responsibility model: provider secures cloud; customer secures in cloud",
          ],
        }
      ),
      section(
        "containers-serverless",
        "6.4 Virtualization, containers, and serverless",
        [
          "Hypervisors (Type 1 bare metal, Type 2 hosted) partition servers into VMs with isolated kernels. Containers share one host kernel, packaging apps with dependencies via images (Docker/OCI) orchestrated by Kubernetes for scheduling, scaling, and rolling updates.",
          "Serverless functions (Lambda, Azure Functions) bill per invocation and millisecond CPU, ideal for sporadic tasks. Cold starts and execution time limits constrain long batch jobs — architecture choice, not universal replacement for VMs.",
          "Infrastructure as Code (Terraform, Bicep, CloudFormation) versions environments in Git, enabling reviewable changes and disaster recovery by reapplying modules rather than clicking consoles manually.",
        ],
        {
          citations: [
            {
              source: "NIST SP 800-190 — Application Container Security Guide",
              url: "https://csrc.nist.gov/publications/detail/sp/800-190/final",
            },
          ],
        }
      ),
      section(
        "responsible-cloud",
        "6.5 Cost, sustainability, and responsible cloud use",
        [
          "Cloud bills aggregate compute, storage, egress, and licensed services. Tagging resources by cost center exposes orphaned volumes and oversized instances — FinOps practices rightsize without sacrificing SLOs.",
          "Carbon-aware scheduling and renewable-powered regions emerge as sustainability metrics. Idle dev clusters left running overnight waste money and energy; autoscaling policies and shutdown scripts are basic hygiene.",
          "Vendor lock-in vs. portability is a strategic tradeoff. Managed proprietary databases accelerate delivery; open formats and Kubernetes abstractions ease migration if negotiations or outages demand exit plans.",
        ],
        {
          bulletPoints: [
            "Egress fees: charging data leaving a region (surprise cost driver)",
            "Reserved instances / savings plans: commit for discounts",
            "Tagging policy: owner, environment, data classification",
            "Well-Architected / Cloud Adoption Framework: vendor best-practice reviews",
          ],
        }
      ),
    ],
    "Global connectivity and on-demand compute models"
  ),

  chapter(
    "troubleshooting",
    7,
    "IT troubleshooting: Systematic problem solving",
    [
      section(
        "methodology",
        "7.1 Structured troubleshooting methodology",
        [
          "Effective technicians reproduce issues, gather symptoms, isolate variables, test hypotheses, and document fixes. Jumping to reinstall the OS without narrowing scope wastes time and destroys forensic evidence during security incidents.",
          "The scientific method applies: observe (error codes, logs), hypothesize (DNS failure), experiment (nslookup), conclude, communicate. Ticketing systems capture steps so the next shift continues without resetting progress.",
          "Escalation paths define when frontline support engages network, database, or vendor tiers. SLAs set response targets by severity — P1 outages trump printer jams. Users deserve clear status updates even when root cause is unknown.",
        ],
        {
          bulletPoints: [
            "Reproduce → isolate → fix → verify → document",
            "Change one variable at a time when testing",
            "Rollback plan before applying patches in production",
            "Known Error Database (KEDB): recurring issues with workarounds",
          ],
        }
      ),
      section(
        "hardware-diag",
        "7.2 Hardware diagnostics and physical checks",
        [
          "Intermittent faults often trace to power, heat, or loose cables. Listen for clicking drives (mechanical failure), smell for burnt components, and feel for blocked vents causing thermal throttling. Reseat RAM and power connectors before replacing motherboards.",
          "Built-in diagnostics (UEFI, Apple Diagnostics, Dell ePSA) exercise CPU, memory, and storage. Memtest86+ validates RAM overnight; SMART attributes flag reallocated sectors. GPU artifacts may indicate failing VRAM or driver bugs — swap monitors to exclude display cables.",
          "Spare parts and loaner devices accelerate swap testing. Asset tags tie incidents to warranty coverage — opening laptops may void coverage if untrained staff strip screws.",
        ],
        {
          bulletPoints: [
            "POST beep codes: motherboard speaker patterns for failed components",
            "Event Viewer / Console: kernel-power logs for unexpected shutdowns",
            "USB bootable toolkit: offline virus scan and disk cloning",
            "ESD precautions: wrist strap when handling internal components",
          ],
        }
      ),
      section(
        "software-issues",
        "7.3 Software, OS, and application issues",
        [
          "Safe Mode and clean boot disable third-party startups to isolate conflicting agents. Profile corruption on Windows may require new user profiles; macOS user migration targets similar symptoms. Application logs (Windows Application, macOS Console) reveal .NET exceptions and permission denials.",
          "Permission errors on shared drives often involve group membership cache — gpupdate /force or re-login refreshes tokens. UAC and sudo misunderstandings block legitimate installs — teach elevation without disabling security wholesale.",
          "Software conflicts after updates implicate incompatible drivers or deprecated APIs. Vendor knowledge bases and community forums (Stack Overflow, Reddit sysadmin) accelerate fixes when internal docs lack entries.",
        ],
        {
          bulletPoints: [
            "sfc /scannow & DISM: Windows system file repair",
            "Disk Utility First Aid: macOS volume verification",
            "Clear cache vs. reset app: progressive escalation on mobile",
            "Version matrix: supported OS + app combinations from vendor",
          ],
        }
      ),
      section(
        "network-troubleshoot",
        "7.4 Network connectivity troubleshooting",
        [
          "Start at Layer 1: link lights on NIC and switch. Ping loopback (127.0.0.1), then default gateway, then external IP (8.8.8.8), then DNS name (example.com). Failure at each hop narrows blame — local stack vs. router vs. ISP vs. DNS.",
          "ipconfig /ifconfig, arp -a, tracert/traceroute, and nslookup are daily tools. Wi-Fi issues may be driver power-save bugs — disable \"allow computer to turn off this device.\" Captive portals in hotels block VPN until browser login completes.",
          "Corporate proxies require PAC files or manual proxy settings; SSL inspection breaks apps pinning certificates unless trust stores import corporate roots deliberately.",
        ],
        {
          bulletPoints: [
            "ipconfig /release /renew: DHCP refresh on Windows",
            "flushdns: clear stale DNS cache after record changes",
            "Pathping: combines ping and traceroute with loss stats",
            "Wireshark: packet capture for advanced escalation (privacy caution)",
          ],
        }
      ),
      section(
        "documentation-escalation",
        "7.5 Documentation, knowledge bases, and escalation",
        [
          "Runbooks standardize incident steps — who to call, which dashboards to open, how to fail over databases. After-action reviews (blameless postmortems) capture contributing factors and corrective actions without punishing individuals for systemic gaps.",
          "CMDB entries link configuration items (servers, apps, owners) so impact analysis during outages is fast. Change management boards review risky weekend maintenance with rollback plans.",
          "Vendor support contracts (SEV1 hotlines) require serial numbers, case logs, and packet captures prepared in advance. Internal tier-3 engineers appreciate tickets listing already-tried steps — respect their time and yours.",
        ],
        {
          laws: [
            {
              name: "ITIL 4 — Service Management Practices",
              summary: "Industry framework for incident, problem, change, and knowledge management processes.",
            },
          ],
        }
      ),
    ],
    "Turning chaos into repeatable, teachable fixes"
  ),

  chapter(
    "it-security",
    8,
    "IT security basics: Protecting systems and data",
    [
      section(
        "cia-triad",
        "8.1 Confidentiality, integrity, and availability",
        [
          "Confidentiality limits information to authorized parties via encryption, access controls, and need-to-know policies. Integrity ensures data and systems are trustworthy — checksums, digital signatures, and change auditing detect tampering. Availability keeps services reachable through redundancy, patching, and DDoS mitigation.",
          "Tradeoffs appear constantly: stricter MFA improves confidentiality but frustrates users; aggressive patching improves integrity/availability against exploits but risks breaking legacy apps. Risk management balances likelihood, impact, and cost — perfect security is neither achievable nor affordable.",
          "The CIA triad pairs with authenticity and non-repudiation in many frameworks. Security is a property of systems, not a product checkbox — culture and process matter as much as firewalls.",
        ],
        {
          bulletPoints: [
            "Least privilege: minimum rights needed for a role",
            "Defense in depth: layered controls (network, host, app, data)",
            "Single points of failure: eliminate or design around them",
            "Risk = threat × vulnerability × impact (qualitative or quantitative models)",
          ],
        }
      ),
      section(
        "authentication",
        "8.2 Passwords, MFA, and identity",
        [
          "Passwords remain ubiquitous despite weaknesses — reuse, phishing, and database leaks. Length and uniqueness beat complex rotation policies that encourage sticky notes. Password managers generate and store unique secrets per site, reducing cognitive load.",
          "Multi-factor authentication (MFA) combines something you know, have, or are. Phishing-resistant FIDO2 security keys outperform SMS OTP where attackers SIM-swap. Conditional access policies block legacy auth protocols attackers love.",
          "Single sign-on (SAML/OIDC) centralizes authentication to identity providers (Entra ID, Okta) with federation to SaaS apps. Offboarding must disable accounts promptly — orphaned SSO sessions are insider-threat vectors.",
        ],
        {
          laws: [
            {
              name: "NIST SP 800-63B — Digital Identity Guidelines (Authentication)",
              summary: "U.S. guidance on password strength, MFA, and verifier requirements.",
            },
          ],
        }
      ),
      section(
        "malware-threats",
        "8.3 Malware, vulnerabilities, and patching",
        [
          "Malware families include viruses (file infectors), worms (self-propagating), ransomware (encryption extortion), trojans (disguised payloads), and spyware (exfiltration). EDR/XDR tools observe process behavior beyond signature antivirus.",
          "Exploits target unpatched CVEs; zero-days lack patches but are rarer than tardy patching of known flaws. Asset inventory tells you what to patch; vulnerability scanners prioritize CVSS scores with environmental context (internet-facing vs. isolated lab).",
          "Supply-chain attacks compromise trusted vendors (updates, libraries). Software bill of materials (SBOM) and code signing verification grow in importance for procurement and DevSecOps pipelines.",
        ],
        {
          citations: [
            {
              source: "CISA Known Exploited Vulnerabilities Catalog",
              url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
            },
          ],
        }
      ),
      section(
        "phishing-social",
        "8.4 Phishing, social engineering, and human factors",
        [
          "Social engineering manipulates people into bypassing technical controls — urgency, authority, and curiosity drive clicks on malicious links. Spear phishing tailors lures to roles (finance wire fraud, IT password resets).",
          "Training alone fails without reporting channels and simulated phish metrics trending down. Report buttons in email clients route suspicious messages to security teams for header analysis.",
          "Physical tailgating and found USB drops (\"USB baiting\") exploit helpfulness. Clean-desk policies and visitor badges complement technical badges on doors.",
        ],
        {
          bulletPoints: [
            "Verify out-of-band before wiring money from email requests",
            "Check sender domain closely (homoglyphs, subdomains)",
            "Do not plug unknown USB devices into corporate PCs",
            "Report incidents early — faster containment lowers breach cost",
          ],
        }
      ),
      section(
        "policies-compliance",
        "8.5 Policies, compliance, and acceptable use",
        [
          "Acceptable use policies (AUP) define permitted activities on employer networks — personal streaming, torrents, and unauthorized remote access tools may be prohibited. Privacy notices explain monitoring scope to meet legal notice requirements.",
          "Regulations map to controls: PCI DSS for card data, HIPAA for PHI, SOC 2 for service organization trust. Auditors sample evidence — ticket trails, access reviews, encryption configs — proving policies operate in practice, not only on paper.",
          "Insider threats include negligent and malicious employees. Separation of duties (developer ≠ production deployer) and logging admin actions reduce fraud. Whistleblower protections encourage reporting unethical bypasses of security for speed.",
        ],
        {
          laws: [
            {
              name: "HIPAA Security Rule (45 CFR Part 164)",
              summary: "Safeguards for electronic protected health information in U.S. healthcare contexts.",
            },
            {
              name: "Computer Fraud and Abuse Act (CFAA)",
              year: "1986",
              summary: "U.S. federal law criminalizing unauthorized access to protected computers; scope evolves via case law.",
            },
          ],
        }
      ),
    ],
    "Baseline security literacy every technology user needs"
  ),

  chapter(
    "productivity-collaboration",
    9,
    "Productivity, collaboration, and digital work skills",
    [
      section(
        "office-suites",
        "9.1 Documents, spreadsheets, and presentations",
        [
          "Office suites (Microsoft 365, Google Workspace, LibreOffice) structure knowledge work. Styles and headings in word processors enable automatic tables of contents; spreadsheets model scenarios with formulas (SUM, VLOOKUP/XLOOKUP, pivot tables) and error traps (#DIV/0!).",
          "Presentation design balances readability and narration — six words per slide is a rule of thumb, not dogma. Template masters enforce brand fonts and colors across organizations.",
          "Collaborative editing shows cursors and comments in real time; version history rescues overwritten paragraphs. Export to PDF for distribution; keep editable sources for future revisions.",
        ],
        {
          bulletPoints: [
            "Relative vs. absolute cell references ($A$1) in spreadsheets",
            "Accessibility: alt text on images, sufficient contrast ratios",
            "Track changes / suggest mode for formal reviews",
            "CSV pitfalls: leading zeros and locale date formats breaking imports",
          ],
        }
      ),
      section(
        "email-calendars",
        "9.2 Email hygiene and calendaring",
        [
          "Inbox zero is a philosophy, not a mandate — folders, filters, and flags route actionable mail. SPF-aligned domains reduce spam placement for outbound campaigns; unsubscribe compliance matters for marketing teams.",
          "Calendars coordinate time zones with explicit offsets; recurring meetings need exception handling for holidays. Room resources and hybrid meeting links (Teams, Zoom) should appear in invites to reduce \"where do I click?\" friction.",
          "Shared mailboxes and delegation require clear ownership — passwords rotated when admins leave. Litigation hold mailboxes preserve evidence; users should know deletion is not always immediate destruction.",
        ],
        {
          bulletPoints: [
            "Rules/filters: auto-file newsletters, flag boss messages",
            "BCC etiquette: protect recipient privacy on bulk mail",
            "Out-of-office messages: set coverage contacts and dates",
            "ICS invites: standard for cross-platform calendar imports",
          ],
        }
      ),
      section(
        "collab-tools",
        "9.3 Chat, meetings, and team workspaces",
        [
          "Teams, Slack, and Discord organize channels by topic rather than endless reply-all email. Threading keeps discussions searchable; @mentions signal urgency without notifying everyone.",
          "Video meetings benefit from wired headsets, mute when not speaking, and agendas shared beforehand. Recording requires consent in many jurisdictions; store recordings with access controls and retention limits.",
          "Wikis (Confluence, Notion, SharePoint) accumulate institutional memory. Information architecture — naming conventions, parent pages, tags — prevents duplicate contradictory articles.",
        ],
        {
          bulletPoints: [
            "Channel naming: team-project-topic pattern",
            "Status messages: set focus/deep work expectations",
            "Breakout rooms: workshop small groups in large trainings",
            "Integrations: bots posting CI/CD alerts — avoid notification fatigue",
          ],
        }
      ),
      section(
        "documentation",
        "9.4 Documentation, ticketing, and knowledge sharing",
        [
          "Good documentation answers what, why, how, and who to call. Screenshots with annotations beat walls of prose for UI steps. Markdown in Git repos versions docs alongside code; wikis suit less technical audiences.",
          "ITSM tickets categorize incidents vs. service requests vs. changes. Clear titles (\"Outlook cannot send SMTP 550\") speed routing. Attach logs and timestamps in UTC to avoid timezone confusion during global handoffs.",
          "Knowledge-centered support (KCS) encourages solving once and publishing articles consumed during future tickets — shrinking mean time to resolve.",
        ],
        {
          bulletPoints: [
            "Runbook vs. user guide: operator-focused vs. end-user language",
            "Definition of Done includes doc updates for feature releases",
            "Snippets/macros: consistent steps for tier-1 responses",
            "Searchable titles: include product + symptom keywords",
          ],
        }
      ),
      section(
        "accessibility-etiquette",
        "9.5 Accessibility, ergonomics, and digital etiquette",
        [
          "Web Content Accessibility Guidelines (WCAG) inform contrast, keyboard navigation, and screen reader compatibility. Captions on videos aid deaf and distracted learners alike.",
          "Ergonomics — monitor height, chair support, break timers — reduce repetitive strain injuries in desk jobs. Blue-light debates continue; regular eye breaks have stronger evidence.",
          "Professional etiquette: concise subject lines, avoiding ALL CAPS, mindful reply-all, and secure handling of attachments (password-protected zips only when necessary and keys shared separately).",
        ],
        {
          laws: [
            {
              name: "Americans with Disabilities Act (ADA) — Title III digital accessibility",
              summary: "U.S. businesses face increasing litigation and DOJ guidance to make public-facing digital services accessible.",
            },
          ],
          citations: [
            {
              source: "W3C Web Content Accessibility Guidelines (WCAG) 2.2",
              url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
            },
          ],
        }
      ),
    ],
    "Tools and habits that make technology work for teams"
  ),

  chapter(
    "it-careers",
    10,
    "IT careers, certifications, and professional growth",
    [
      section(
        "role-landscape",
        "10.1 Roles across the IT spectrum",
        [
          "Help desk and desktop support resolve daily user issues and image workstations. System administrators manage servers, patches, and backups. Network engineers design routing, switching, and firewalls. Cloud engineers automate infrastructure; DevOps blends dev and ops with CI/CD pipelines.",
          "Cybersecurity analysts monitor SIEM alerts; penetration testers emulate attackers ethically. Database administrators tune performance and recovery. Business analysts translate requirements; project managers coordinate timelines — IT is both technical and communicative.",
          "Specialists dive deep (identity, observability, CRM platforms). T-shaped professionals combine broad fundamentals with one deep specialty valued in hiring markets.",
        ],
        {
          bulletPoints: [
            "L1/L2/L3 support tiers: increasing expertise and escalation",
            "SRE: reliability engineering with error budgets and SLOs",
            "SOC analyst: triage alerts, escalate confirmed incidents",
            "Solutions architect: designs spanning business and technical constraints",
          ],
        }
      ),
      section(
        "certifications",
        "10.2 Certifications and learning pathways",
        [
          "CompTIA IT Fundamentals+ (ITF+) surveys concepts for career changers. A+ validates hardware/OS troubleshooting; Network+ and Security+ stack networking and security baselines. Vendor certs (Microsoft, Cisco, AWS, Google) align to platform jobs.",
          "Certifications signal knowledge but do not replace labs — home labs (Proxmox, Raspberry Pi), internships, and homelab GitHub repos demonstrate initiative. Renewal cycles (CEUs, continuing education) keep credentials current as technology shifts.",
          "Academic degrees (CS, MIS, IT) teach theory — algorithms, ethics, project courses — while bootcamps accelerate specific stacks. Many hiring managers weigh portfolios and behavioral interviews alongside credentials.",
        ],
        {
          bulletPoints: [
            "CompTIA: vendor-neutral entry and security stack",
            "Cisco CCNA: networking fundamentals for enterprise roles",
            "AWS Solutions Architect / Azure Administrator: cloud role alignment",
            "ISC2 CC / CISSP path: security governance at senior levels",
          ],
          citations: [
            {
              source: "CompTIA IT Certification Roadmap",
              url: "https://www.comptia.org/certifications",
            },
          ],
        }
      ),
      section(
        "soft-skills",
        "10.3 Communication, ethics, and customer service",
        [
          "Technologists translate jargon into outcomes — \"rebooted DNS cache\" becomes \"email should work now; call if delays persist.\" Empathy de-escalates frustrated users; blameless language focuses on systems, not personal failure.",
          "Ethics cover acceptable monitoring, responsible disclosure of vulnerabilities, and refusing to install backdoors. Licensing compliance and respect for intellectual property appear in enterprise codes of conduct.",
          "Documentation habits and time management separate seniors from juniors. SLAs teach prioritization — not every ticket is urgent though all users feel theirs is.",
        ],
        {
          bulletPoints: [
            "Active listening: repeat problem back for confirmation",
            "Ticket notes: future you and teammates depend on clarity",
            "Responsible disclosure: report vulns to vendors, not public dumps first",
            "Continuing education: blogs, conferences (BSides, Ignite), lab time",
          ],
        }
      ),
      section(
        "job-search",
        "10.4 Résumés, interviews, and portfolios",
        [
          "Résumés highlight measurable impact — \"reduced ticket backlog 30% via KCS articles\" beats duty lists. Tailor keywords to job descriptions without keyword stuffing that fails human review.",
          "Technical interviews may include troubleshooting scenarios, light scripting (PowerShell, Python), and system design whiteboards for senior roles. Take-home labs should be time-boxed and original — plagiarism destroys trust.",
          "LinkedIn and community meetups build networks; referrals often bypass resume piles. Internal mobility rewards known culture fits — perform well in adjacent teams before leap roles.",
        ],
        {
          bulletPoints: [
            "STAR stories: Situation, Task, Action, Result for behavioral questions",
            "Homelab doc: diagram network, services, backups implemented",
            "GitHub: scripts for automation — sanitize secrets before public push",
            "Mentorship: formal programs or peer shadowing on tickets",
          ],
        }
      ),
      section(
        "future-trends",
        "10.5 Emerging trends and lifelong learning",
        [
          "Artificial intelligence copilots assist scripting, log analysis, and ticket summarization — augmenting rather than replacing staff who verify outputs. Zero-trust, SASE, and identity-centric security reshape network hiring.",
          "Edge computing processes IoT data locally; 5G enables mobile workforce tools. Quantum computing threatens some cryptography — post-quantum algorithms migrate gradually per NIST selections.",
          "Sustainability and e-waste regulations influence hardware refresh cycles. Technologists who learn continuously — official courses, open source, security advisories — remain employable as paradigms shift.",
        ],
        {
          bulletPoints: [
            "AI assistance: verify generated commands before production execution",
            "Post-quantum cryptography: NIST ML-KEM and ML-DSA standards rollout",
            "Green IT: longer lifecycles, repairability, efficient data centers",
            "Soft skills remain differentiators as tools commoditize baseline tasks",
          ],
          citations: [
            {
              source: "NIST Post-Quantum Cryptography Project",
              url: "https://csrc.nist.gov/projects/post-quantum-cryptography",
            },
          ],
        }
      ),
    ],
    "Where fundamentals lead in the labor market"
  ),
];
