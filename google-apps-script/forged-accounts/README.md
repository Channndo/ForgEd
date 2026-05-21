# ForgEd Accounts — Google Apps Script

Backend for ForgEd login, profiles, and learning progress (Google Sheets).

## First-time setup

1. Open [script.google.com](https://script.google.com) → **New project**.
2. Paste `Code.gs` into the editor.
3. Run **`createForgEdDatabase`** once (authorize when prompted).  
   This creates the spreadsheet and all tabs: `USERS`, `COURSE_PROGRESS`, `PATH_PROGRESS`, `ACHIEVEMENTS`, `LAB_PROGRESS`.
4. **Project Settings → Script properties** → add:
   - `FORGED_SERVER_SECRET` — e.g. `openssl rand -hex 32`
5. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Copy the Web App URL into ForgEd `.env.local`:

```bash
FORGED_WEB_APP_URL=https://script.google.com/macros/s/XXXX/exec
FORGED_SERVER_SECRET=your-secret-matching-script-property
```

## Sheet tabs (auto-created)

| Tab | Purpose |
|-----|---------|
| USERS | Accounts, XP, level, streak, session tokens |
| COURSE_PROGRESS | Per-course + full progress JSON |
| PATH_PROGRESS | Learning path completion |
| ACHIEVEMENTS | Unlocked badges |
| LAB_PROGRESS | Path lab completions |

## API actions (POST JSON)

| Action | Auth | Description |
|--------|------|-------------|
| `createForgEdDatabase` | Server secret | Creates spreadsheet (run once) |
| `initializeSheets` | Server secret | Rebuilds headers |
| `registerUser` | — | Sign up |
| `loginUser` | — | Sign in |
| `requestPasswordReset` | — | Email reset flow |
| `resetPassword` | — | Set new password with token |
| `getUserProfile` | Session | Profile |
| `updateUserProfile` | Session | Update display name / username |
| `loadUserDashboard` | Session | Profile + full progress |
| `saveUserProgress` | Session | Sync XP, paths, quizzes |
| `updateXP` / `updateStreak` | Session | Partial updates |
| `saveQuizResults` / `saveLabProgress` | Session | Granular saves |
| `unlockAchievement` | Session | Record badge |

Server-only actions include `serverSecret` in the body. User actions use `accessToken` from login/register.
