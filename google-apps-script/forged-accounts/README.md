# ForgEd Accounts — Google Apps Script

Backend for ForgEd login, profiles, and learning progress (Google Sheets).

## First-time setup

1. Open [script.google.com](https://script.google.com) → **New project**.
2. Paste `Code.gs` into the editor.
3. Run **`createForgEdDatabase`** once (authorize when prompted).  
   This creates the spreadsheet and all tabs: `USERS`, `COURSE_PROGRESS`, `PATH_PROGRESS`, `ACHIEVEMENTS`, `LAB_PROGRESS`.
4. In `Code.gs`, set **`FORGED_SETUP.SPREADSHEET_ID`** to your sheet ID (from the URL between `/d/` and `/edit`), then run **`bootstrapForgEdOnce()`** once.  
   Or skip that if your sheet is already named **ForgEd Accounts Database** (auto-linked on first request).  
   Server secret is pre-filled in `FORGED_SETUP.SERVER_SECRET` (same as Netlify).
5. If you already have a USERS sheet from an older deploy, run **`upgradeUsersSheet`** once via POST (server secret) or call **`upgradeUsersSheetHeaders_()`** from the editor after pasting new `Code.gs`.
6. Run **`ensureForgedAdminAccount()`** once to create `chandler@forgedlearn.com` (temp password in execution log — then use Forgot Password on the site).
7. Run **`diagnoseForgedEmail()`** — sends a test email and returns quota/errors in the execution log.
8. **Deploy → Manage deployments → New version → Deploy** (required after every Code.gs change).

Signup emails go to `chandler.hill.24@gmail.com` and `chandler@forgedlearn.com` via **MailApp** (Execute as: **Me**). Check the **EMAIL_LOG** sheet tab if mail fails.

**Critical:** An old Web App deployment will not send mail. The ForgEd site also calls `notifySignup` after each registration so email runs even if `registerUser` on GAS is outdated — but you still must deploy the latest `Code.gs` for that action to exist.
5. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Copy the Web App URL into ForgEd `.env.local`:

```bash
FORGED_WEB_APP_URL=https://script.google.com/macros/s/AKfycbyMUFkHPuSN2ajb-09lXAZvxt1n7M59dZ4L2NlpLTy8H3l3Ay_Nyx3iIP19XhwA7x-Q/exec
FORGED_SERVER_SECRET=your-secret-matching-script-property
```

## Sheet tabs (auto-created)

| Tab | Purpose |
|-----|---------|
| USERS | Accounts (name, email, username, phone, address, security Qs, referral), XP, sessions |
| COURSE_PROGRESS | Per-course + full progress JSON |
| PATH_PROGRESS | Learning path completion |
| ACHIEVEMENTS | Unlocked badges |
| LAB_PROGRESS | Path lab completions |

## API actions (POST JSON)

| Action | Auth | Description |
|--------|------|-------------|
| `createForgEdDatabase` | Server secret | Creates spreadsheet (run once) |
| `initializeSheets` | Server secret | Rebuilds headers |
| `upgradeUsersSheet` | Server secret | Migrates USERS to expanded signup columns |
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
