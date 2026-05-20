# ForgEd

**Education Reforged** — A free AI-powered education platform under the Omnistrata ecosystem.

## Features

- Dark, modern dashboard UI with glassmorphism and XP progression
- Course library across 9 skill categories
- **Insurance Fundamentals** — expanded 13-chapter course (based on CoverIQ curriculum, with additional buying guide & agency chapters)
- Quiz engine with randomized questions, instant feedback, and retry
- XP, levels, streaks, and achievement badges
- AI assistant & career sections (architecture-ready placeholders)
- Mobile-responsive, localStorage progress (no auth required for MVP)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Pages (live site)

The app deploys automatically to **https://channndo.github.io/ForgEd/** on every push to `main`.

**Important:** In repo **Settings → Pages**, set **Source** to **GitHub Actions** (not “Deploy from branch” — that only shows the README).

Local preview of the Pages build:

```bash
npm run build:pages
npx serve out
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Production server |

## Structure

- `src/app/` — Next.js App Router pages
- `src/lib/courses/` — Course catalog & insurance textbook/quiz data
- `src/lib/progress.ts` — Client-side XP, badges, streaks
- `src/components/` — UI, layout, quiz engine, homepage sections

## KODA AI (shared Omnistrata Ollama)

ForgEd uses **KODA** as the user-facing learning assistant. KODA connects to the **same Ollama runtime** as CoverIQ/Syntrix (via `OLLAMA_BASE_URL`) — do not run a separate Ollama instance for ForgEd.

Copy `.env.example` to `.env.local` and point at your shared host:

```bash
OLLAMA_BASE_URL=http://127.0.0.1:11434
OLLAMA_MODEL=llama3.2:1b
KODA_ENABLED=true
```

### Architecture

| Layer | Path |
|-------|------|
| Ollama client | `src/services/ollama/` |
| KODA AI service | `src/services/ai/` |
| API routes | `src/app/api/koda/` |
| UI | `src/components/koda/`, `src/hooks/useKoda.ts` |

MIRA infrastructure improvements (streaming, model resolution, timeouts) apply automatically through the shared Ollama client pattern.

## Omnistrata

ForgEd is designed to scale into a full education ecosystem with credentials and cross-product integrations. KODA memory hooks are stubbed in `src/services/ai/memory.ts` for future Redis/Qdrant integration.
