# USER_ACCOUNT_ARCHIVE

ForgEd keeps an **append-only** tab `USER_ACCOUNT_ARCHIVE` in the same Google Sheet as accounts. It is separate from live `USERS` / `COURSE_PROGRESS` rows and is **never cleared** when operational tabs are rebuilt.

## When snapshots are written

| Event | Trigger |
|-------|---------|
| `register` | New account created |
| `save_progress` | Learner syncs XP, lessons, quizzes, paths |
| `profile_update` | Display name or username changed |
| `issue_certificate` | Course certificate issued |

Each row stores: Snapshot ID, timestamp, user id, email, display name, event name, and a **Payload JSON** blob (profile, full progress JSON, path progress, achievements, course rows, certificates).

Up to **48 snapshots per user** are kept; older rows are pruned automatically.

## Restoring progress

- **Site:** Profile → Settings → **Restore progress from latest backup**
- **API:** `restoreFromArchive` with session token

## Preventing data loss

1. Do **not** run `initializeSheets` on the production spreadsheet.
2. Do **not** redeploy a Web App pointed at a **new empty** spreadsheet without migrating data.
3. Keep `FORGED_WEB_APP_URL` and `FORGED_SETUP.SPREADSHEET_ID` aligned with the sheet that has your learners.

If progress disappeared after a deploy, check `USER_ACCOUNT_ARCHIVE` in the sheet for rows with your email — restore from the site or copy `Payload JSON` manually.
