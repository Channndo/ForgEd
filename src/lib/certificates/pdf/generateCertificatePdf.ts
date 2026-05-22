/**
 * Server-side PDF generation — premium ForgEd certificate layout.
 * Landscape US Letter @ 300 DPI equivalent vector output.
 */
import fs from "fs";
import path from "path";
import {
  PDFDocument,
  rgb,
  StandardFonts,
  type PDFPage,
  type PDFFont,
} from "pdf-lib";
import type { CertificateRenderData } from "@/lib/certificates/types";
import {
  CERTIFICATE_TAGLINE,
  FOUNDER_NAME,
  FOUNDER_SIGNATURE,
  FOUNDER_TITLE,
} from "@/lib/certificates/constants";
import { generateVerificationQrPng } from "@/lib/certificates/qr";

const PAGE_W = 792;
const PAGE_H = 612;

/** Pushes logo + certificate copy down so the wordmark is not clipped at the top */
const BODY_SHIFT_DOWN = 48;
const WORDMARK_MAX_HEIGHT = 86;
const BORDER_INSET = 28;

const GOLD = rgb(0.79, 0.66, 0.31);
const GOLD_LIGHT = rgb(0.92, 0.84, 0.55);
const SILVER = rgb(0.72, 0.72, 0.76);
const CHARCOAL = rgb(0.07, 0.07, 0.08);
const CHARCOAL_MID = rgb(0.12, 0.12, 0.13);
const WHITE = rgb(0.96, 0.96, 0.97);
const MUTED = rgb(0.55, 0.55, 0.58);

function formatDisplayDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

function drawDoubleBorder(page: PDFPage) {
  page.drawRectangle({
    x: BORDER_INSET,
    y: BORDER_INSET,
    width: PAGE_W - BORDER_INSET * 2,
    height: PAGE_H - BORDER_INSET * 2,
    borderColor: GOLD,
    borderWidth: 1.5,
  });
  page.drawRectangle({
    x: BORDER_INSET + 6,
    y: BORDER_INSET + 6,
    width: PAGE_W - (BORDER_INSET + 6) * 2,
    height: PAGE_H - (BORDER_INSET + 6) * 2,
    borderColor: GOLD_LIGHT,
    borderWidth: 0.75,
  });
}

function drawCornerFlourish(page: PDFPage, x: number, y: number, flipX: boolean, flipY: boolean) {
  const len = 22;
  const dx = flipX ? -1 : 1;
  const dy = flipY ? -1 : 1;
  page.drawLine({
    start: { x, y },
    end: { x: x + len * dx, y },
    thickness: 1,
    color: GOLD,
  });
  page.drawLine({
    start: { x, y },
    end: { x, y: y + len * dy },
    thickness: 1,
    color: GOLD,
  });
}

async function embedWordmark(doc: PDFDocument): Promise<Awaited<ReturnType<PDFDocument["embedPng"]>> | null> {
  const root = typeof process.cwd === "function" ? process.cwd() : "";
  const candidates = [
    path.join(/* turbopackIgnore: true */ root, "public", "forged-wordmark.png"),
    path.join(/* turbopackIgnore: true */ root, "public", "forged-icon.png"),
  ];
  for (const filePath of candidates) {
    try {
      if (fs.existsSync(filePath)) {
        const bytes = fs.readFileSync(filePath);
        return await doc.embedPng(bytes);
      }
    } catch {
      /* try next */
    }
  }
  return null;
}

function centerText(
  page: PDFPage,
  text: string,
  y: number,
  font: PDFFont,
  size: number,
  color: ReturnType<typeof rgb>
) {
  const w = font.widthOfTextAtSize(text, size);
  page.drawText(text, {
    x: (PAGE_W - w) / 2,
    y,
    size,
    font,
    color,
  });
}

export async function generateCertificatePdf(
  data: CertificateRenderData
): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  doc.setTitle(`ForgEd Certificate — ${data.courseTitle}`);
  doc.setAuthor("ForgEd");
  doc.setSubject(data.certificateId);

  const page = doc.addPage([PAGE_W, PAGE_H]);

  page.drawRectangle({
    x: 0,
    y: 0,
    width: PAGE_W,
    height: PAGE_H,
    color: CHARCOAL,
  });
  page.drawRectangle({
    x: 40,
    y: 40,
    width: PAGE_W - 80,
    height: PAGE_H - 80,
    color: CHARCOAL_MID,
  });

  drawDoubleBorder(page);
  drawCornerFlourish(page, BORDER_INSET + 10, PAGE_H - BORDER_INSET - 10, false, true);
  drawCornerFlourish(page, PAGE_W - BORDER_INSET - 10, PAGE_H - BORDER_INSET - 10, true, true);
  drawCornerFlourish(page, BORDER_INSET + 10, BORDER_INSET + 10, false, false);
  drawCornerFlourish(page, PAGE_W - BORDER_INSET - 10, BORDER_INSET + 10, true, false);

  const helvetica = await doc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const timesBold = await doc.embedFont(StandardFonts.TimesRomanBold);
  const timesItalic = await doc.embedFont(StandardFonts.TimesRomanItalic);

  /** Cursor tracks the next baseline, descending from a safe top margin */
  let cursorY = PAGE_H - BORDER_INSET - 20 - BODY_SHIFT_DOWN;

  const wordmark = await embedWordmark(doc);
  if (wordmark) {
    let wmW = 190;
    let wmH = (wmW / wordmark.width) * wordmark.height;
    if (wmH > WORDMARK_MAX_HEIGHT) {
      wmH = WORDMARK_MAX_HEIGHT;
      wmW = (wmH / wordmark.height) * wordmark.width;
    }
    const wmY = cursorY - wmH;
    page.drawImage(wordmark, {
      x: (PAGE_W - wmW) / 2,
      y: wmY,
      width: wmW,
      height: wmH,
    });
    cursorY = wmY - 16;
  } else {
    centerText(page, "ForgEd", cursorY - 8, timesBold, 36, GOLD);
    cursorY -= 44;
  }

  centerText(page, `— ${CERTIFICATE_TAGLINE} —`, cursorY, helvetica, 8, SILVER);
  cursorY -= 28;

  centerText(page, "CERTIFICATE OF COMPLETION", cursorY, timesBold, 22, GOLD);
  cursorY -= 38;

  centerText(page, "THIS CERTIFIES THAT", cursorY, helvetica, 9, SILVER);
  cursorY -= 32;

  const nameSize = Math.min(42, 520 / Math.max(data.studentName.length * 0.45, 12));
  centerText(page, data.studentName, cursorY, timesItalic, nameSize, WHITE);
  cursorY -= nameSize + 6;

  page.drawLine({
    start: { x: PAGE_W / 2 - 180, y: cursorY },
    end: { x: PAGE_W / 2 + 180, y: cursorY },
    thickness: 0.5,
    color: SILVER,
  });
  cursorY -= 22;

  centerText(page, "HAS SUCCESSFULLY COMPLETED THE", cursorY, helvetica, 9, SILVER);
  cursorY -= 28;

  const courseLines = wrapCourseTitle(data.courseTitle, 52);
  for (const line of courseLines) {
    centerText(page, line, cursorY, timesBold, 16, GOLD);
    cursorY -= 22;
  }

  centerText(
    page,
    `AND HAS DEMONSTRATED DEDICATION AND PROFICIENCY · ${data.hoursCompleted} HOURS`,
    cursorY - 6,
    helvetica,
    7.5,
    MUTED
  );

  const dateStr = formatDisplayDate(data.completionDate);
  const sigY = 72;

  page.drawText(FOUNDER_SIGNATURE, {
    x: 72,
    y: sigY + 18,
    size: 14,
    font: timesItalic,
    color: GOLD,
  });
  page.drawLine({
    start: { x: 72, y: sigY + 8 },
    end: { x: 220, y: sigY + 8 },
    thickness: 0.75,
    color: GOLD,
  });
  page.drawText(FOUNDER_NAME, {
    x: 72,
    y: sigY - 4,
    size: 9,
    font: helveticaBold,
    color: SILVER,
  });
  page.drawText(FOUNDER_TITLE.toUpperCase(), {
    x: 72,
    y: sigY - 16,
    size: 7,
    font: helvetica,
    color: MUTED,
  });

  const qrBytes = await generateVerificationQrPng(data.verificationUrl, 120);
  const qrImg = await doc.embedPng(qrBytes);
  const qrSize = 72;
  page.drawImage(qrImg, {
    x: PAGE_W / 2 - qrSize / 2,
    y: sigY - 8,
    width: qrSize,
    height: qrSize,
  });
  const verifyLabel = "SCAN TO VERIFY";
  const vlW = helvetica.widthOfTextAtSize(verifyLabel, 6);
  page.drawText(verifyLabel, {
    x: PAGE_W / 2 - vlW / 2,
    y: sigY - 18,
    size: 6,
    font: helvetica,
    color: MUTED,
  });

  page.drawText(dateStr, {
    x: PAGE_W - 72 - helvetica.widthOfTextAtSize(dateStr, 11),
    y: sigY + 18,
    size: 11,
    font: helvetica,
    color: WHITE,
  });
  page.drawLine({
    start: { x: PAGE_W - 220, y: sigY + 8 },
    end: { x: PAGE_W - 72, y: sigY + 8 },
    thickness: 0.75,
    color: GOLD,
  });
  page.drawText("DATE OF COMPLETION", {
    x: PAGE_W - 220,
    y: sigY - 6,
    size: 7,
    font: helvetica,
    color: SILVER,
  });

  const idLabel = `ID: ${data.certificateId}`;
  page.drawText(idLabel, {
    x: PAGE_W - 72 - helvetica.widthOfTextAtSize(idLabel, 6.5),
    y: 36,
    size: 6.5,
    font: helvetica,
    color: MUTED,
  });

  const pdfBytes = await doc.save();
  return pdfBytes;
}

function wrapCourseTitle(title: string, maxChars: number): string[] {
  const words = title.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const w of words) {
    const next = current ? `${current} ${w}` : w;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = w;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.length ? lines : [title];
}
