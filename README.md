# ForgEd

**Education Reforged** — A free AI-powered education platform under the Omnistrata ecosystem.

## Features

- Dark, modern dashboard UI with glassmorphism and XP progression
- Course library across 9 skill categories
- **Insurance Fundamentals** — expanded 13-chapter course (based on CoverIQ curriculum)
- Quiz engine with randomized questions, instant feedback, and retry
- XP, levels, streaks, and achievement badges
- **KODA** learning assistant (shared Ollama backbone with CoverIQ **MIRA**)
- **Accounts & progress** via Google Apps Script + Sheets (`google-apps-script/forged-accounts/`)
- **KODA** via Syntrix when signed in (shared Ollama with CoverIQ MIRA)

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Accounts & cloud progress (Google Apps Script)

ForgEd uses a dedicated **ForgEd Accounts** Apps Script project (not Supabase):

| Layer | Implementation |
|-------|----------------|
| **Auth** | `registerUser`, `loginUser`, password reset via `src/app/api/forged-account/route.ts` |
| **Session** | Access token in `localStorage` (`forged_access_token_v1`) |
| **Progress** | `loadUserDashboard` / `saveUserProgress` — XP, paths, quizzes, labs, achievements |

**Setup:** See [`google-apps-script/forged-accounts/README.md`](google-apps-script/forged-accounts/README.md). Run `createForgEdDatabase()` once, deploy the Web App, then set `FORGED_WEB_APP_URL` and `FORGED_SERVER_SECRET` in `.env.local` / Netlify.

**Hosting:** Deploy on **Netlify** at `forgedlearn.com` (see `netlify.toml`). GitHub Pages is static-only and cannot run account APIs or KODA.

### KODA on production

When `FORGED_WEB_APP_URL` is set (recommended), KODA validates the **ForgEd session** and uses `OLLAMA_BASE_URL` on the host. Learners must sign in to ForgEd.

Legacy Syntrix-only deploys: set `KODA_USE_SYNTRIX=true` and `SYNTRIX_API_URL=https://api.syntrix.solutions`.

### HTTPS (remove “Not Secure”)

In Netlify → **Domain management** → `forgedlearn.com` → verify DNS and **Provision TLS certificate** for your custom domain (not only `*.netlify.app`). `netlify.toml` forces HTTP→HTTPS and sends HSTS security headers.

## GitHub Pages (marketing / static preview)

The app can deploy to **https://channndo.github.io/ForgEd/** on push to `main` — course browsing works; sign-in and KODA require a Node host.

```bash
npm run build:pages
npx serve out
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server (auth + KODA APIs) |
| `npm run build` | Production build |
| `npm run build:pages` | Static export for GitHub Pages |
| `npm run start` | Production server |

## Structure

- `src/app/` — Next.js App Router pages
- `google-apps-script/forged-accounts/` — Sheets backend (users, progress, achievements)
- `src/lib/forged-account/` — Auth client & session
- `src/app/api/forged-account/` — Apps Script proxy
- `src/app/api/syntrix/` — Syntrix proxy (KODA only)
- `src/app/api/koda/` — KODA chat (Ollama)
- `src/lib/courses/` — Course catalog & textbooks
- `src/lib/progress.ts` — Client XP, badges, streaks
- `src/components/` — UI, layout, quiz engine

## KODA AI (shared Omnistrata Ollama)

ForgEd uses **KODA** as the user-facing learning assistant. KODA connects to the **same Ollama runtime** as CoverIQ/Syntrix (via `OLLAMA_BASE_URL`).

```bash
OLLAMA_BASE_URL=http://127.0.0.1:11434
OLLAMA_MODEL=llama3.2:1b
KODA_ENABLED=true
```

| Layer | Path |
|-------|------|
| Ollama client | `src/services/ollama/` |
| KODA AI service | `src/services/ai/` |
| API routes | `src/app/api/koda/` |
| UI | `src/components/koda/`, `src/hooks/useKoda.ts` |

## Omnistrata

One identity across CoverIQ (MIRA), Syntrix, and ForgEd. KODA memory hooks are stubbed in `src/services/ai/memory.ts` for future Redis/Qdrant integration.
