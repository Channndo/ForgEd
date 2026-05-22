# ForgEd Certificates — Database Schema

Certificates are stored in the **ForgEd Accounts** Google Spreadsheet on the `CERTIFICATES` tab.

## Sheet: `CERTIFICATES`

| Column | Type | Description |
|--------|------|-------------|
| Certificate ID | string | Unique ID, format `FE-CERT-{UUID}` |
| User ID | string | ForgEd user ID (`FE-…`) |
| Student Name | string | Display name on certificate |
| Course ID | string | Catalog course id |
| Course Title | string | Full course title |
| Course Slug | string | URL slug |
| Completion Date | ISO 8601 | When the course was completed |
| Hours Completed | number | From `course.estimatedHours` |
| Exam Score | number | Final exam correct count (optional) |
| Exam Total | number | Final exam question count (optional) |
| Verification URL | string | Public verify page URL |
| Issued At | ISO 8601 | When the certificate was issued |
| Status | string | `valid` or `revoked` |
| Instructor Signature | string | Signatory line (default: Chandler Hill) |

## API (Next.js)

| Route | Method | Auth | Purpose |
|-------|--------|------|---------|
| `/api/certificates/issue` | POST | Bearer | Issue certificate on course completion |
| `/api/certificates` | GET | Bearer | List user certificates |
| `/api/certificates/[id]/pdf` | GET | Optional | Download PDF (server-generated) |
| `/api/certificates/verify/[id]` | GET | Public | Verify authenticity |

## Google Apps Script actions

- `issueCertificate` — session required; idempotent per user + course
- `listCertificates` — session required
- `getCertificate` — session required; owner only
- `verifyCertificate` — public

## Local development

Set `CERTIFICATES_USE_MOCK=true` or omit `FORGED_WEB_APP_URL` to use in-memory mock certificates (`src/lib/certificates/mockData.ts`).

After deploying updated `Code.gs`, run `initializeSheets` once (or let `ensureCertificatesSheet_` create the tab on first issue).
