# Implementation prompt: ForgEd welcome modal (post–account creation)

Use this document when building the **first-login welcome experience** on ForgEd. The UI should feel like a premium **welcome letter / email** that **pops up once** after a user successfully creates an account — not a generic toast.

---

## Product goal

When a new user completes signup and lands on the dashboard, show a **modal overlay** (not a separate route) that:

1. Welcomes them by first name
2. Reinforces the brand (“Learn Skills That Matter.”)
3. Briefly orients them: courses, XP/streaks, KODA, paths
4. Has one primary CTA (e.g. “Start learning” → closes modal)
5. Never shows again for that account on that browser (unless you add an explicit “Show welcome again” in profile later)

**Out of scope unless explicitly requested:** real SMTP welcome email, changing signup form fields, changing logo assets, or edits to KODA/Syntrix/CoverIQ prompts.

---

## Brand theme (match reference artwork)

**Reference image (do not regenerate — use as visual spec):**

`assets/887B4512-18D6-4BD9-81F5-5CD28B58C958-a94b32c8-7ddf-4a4b-b82a-90cbc842b24b.png`

(or copy into `public/forged-welcome-hero.png` if you need a dedicated welcome asset — **do not replace** `forged-icon.png` / `forged-wordmark.png` used site-wide)

### Visual language

| Element | Spec |
|--------|------|
| Background | Matte black `#050505`–`#121212`, subtle grain optional via CSS noise |
| Metallic accents | **Silver** `#c0c0c0` (Forg) + **Gold** `#d4af37` / `#b8860b` (Ed, rules, CTAs) |
| Typography | **Serif** headings: `font-serif` / Cinzel (`ForgEdWordmarkText`, dashboard patterns). **Sans** body: Geist / system |
| Tagline | `LEARN SKILLS THAT MATTER.` — uppercase, wide tracking (`tracking-[0.35em]`), gold flanking lines — reuse `ForgEdTagline` |
| Logo | Prefer existing `ForgEdLogo` variant `wordmark` or `full` via `withBasePath("/forged-wordmark.png")` — same as `AuthShell` |
| Card | `glass` utility + `border border-[var(--card-border)]`, soft gold glow `box-shadow: 0 0 40px var(--accent-glow)` |
| CTA | Gold gradient or solid gold button; silver secondary “Maybe later” text button |

### CSS variables (already in `src/app/globals.css`)

```css
--background: #121212;
--silver: #c0c0c0;
--gold: #d4af37;
--gold-dark: #b8860b;
--card-border: rgba(212, 175, 55, 0.12);
--accent-glow: rgba(212, 175, 55, 0.22);
```

Reuse `.text-gradient`, `.glass`, `.font-serif` — do not invent a new color system.

---

## Copy tone (welcome “email” inside the modal)

- Warm, concise, professional — not corporate spam
- Structure (suggested):

  **Headline:** `Welcome to ForgEd, {firstName}.`  
  **Subhead:** `Your account is ready. Everything you complete syncs here.`  
  **Body (2–3 short paragraphs or bullets):**
  - Browse the **Course Library** and pick a path that fits your goals
  - Earn **XP**, build **streaks**, and unlock badges as you finish lessons
  - Open **KODA** anytime for explanations (powered by Mindroot AI)
  **Footer line:** `Learn Skills That Matter.` with `ForgEdTagline`  
  **Disclaimer (small, muted):** General education only — not legal, medical, or licensing advice.

- Personalize `{firstName}` from `useAuth()` → `profile?.displayName?.split(" ")[0] ?? profile?.username ?? "Learner"`

---

## Technical integration (minimal diff)

### Trigger (choose one pattern; prefer A)

**A — sessionStorage flag (simplest, no API change)**  
1. On successful signup in `src/app/signup/page.tsx`, before `router.replace("/dashboard")`:  
   `sessionStorage.setItem("forged_show_welcome", "1")`  
2. On dashboard (or root layout under auth), read and clear flag; if set, open modal.

**B — AuthProvider return value**  
`signUp()` returns `{ showWelcome?: boolean }` when registration succeeds; dashboard consumes context. Slightly more refactor.

### Persistence (don’t show again)

```ts
const WELCOME_KEY = "forged_welcome_seen_v1";
// On dismiss: localStorage.setItem(WELCOME_KEY, "1")
// On mount: if localStorage.getItem(WELCOME_KEY) return null
```

Only set `forged_welcome_seen_v1` when user dismisses or clicks primary CTA. If they refresh mid-modal, flag from sessionStorage can re-open once.

### Suggested files

| File | Purpose |
|------|---------|
| `src/components/welcome/WelcomeAccountModal.tsx` | Modal UI + framer-motion fade (match `KodaChatPanel` overlay patterns) |
| `src/lib/welcome/constants.ts` | Copy strings + storage keys |
| `src/app/dashboard/page.tsx` OR `src/app/layout.tsx` | Mount modal when authenticated + trigger |

### Accessibility

- `role="dialog"` `aria-modal="true"` `aria-labelledby` for title
- Focus trap; Escape closes
- `prefers-reduced-motion`: skip spring animations

### Do NOT

- Change `ForgEdLogo.tsx` image paths or regenerate logos
- Broaden KODA prompts or touch `kodaPrompt.ts`
- Add dependencies unless project already has them (framer-motion is already used)
- Block dashboard interaction forever — backdrop click or “Start learning” must dismiss

---

## Layout wireframe (ASCII)

```
┌─────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░ backdrop blur ░░░░░░░░░░░░░░░ │
│   ┌─────────────────────────────────────┐   │
│   │         [ForgEd wordmark image]      │   │
│   │      ─── Learn Skills That Matter. ───   │
│   │                                      │   │
│   │   Welcome to ForgEd, Chandler.     │   │
│   │   Your account is ready…           │   │
│   │   • Course library & paths           │   │
│   │   • XP, streaks, badges              │   │
│   │   • KODA when you need help          │   │
│   │                                      │   │
│   │   [ Start learning ]  (gold CTA)     │   │
│   └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

---

## Verification checklist

- [ ] New signup → dashboard → modal appears once
- [ ] Dismiss → refresh dashboard → modal does not return
- [ ] Existing user login → no modal (unless `forged_show_welcome` only set on signup)
- [ ] Mobile: modal scrollable, max-width ~`max-w-md`, safe area padding
- [ ] Brand: black/gold/silver, serif headline, tagline matches site auth pages
- [ ] No logo file replacements in `public/`

---

## Optional later (not in first PR)

- Server-side `welcomeSeen` on user row in GAS sheet (cross-device)
- Actual transactional welcome email via existing `notifySignupEmail` in `gasClient.ts` — keep HTML template visually aligned with this modal
