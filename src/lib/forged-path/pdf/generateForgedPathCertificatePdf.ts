/**
 * ForgEd Path program certificate PDF — Executive Mastery layout.
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
import type { ForgedPathCertificateRenderData } from "@/lib/forged-path/certificateTypes";
import { getForgedPathProgram } from "@/lib/forged-path/programs";

const PAGE_W = 792;
const PAGE_H = 612;
const BORDER_INSET = 24;

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

function centerText(
  page: PDFPage,
  text: string,
  y: number,
  font: PDFFont,
  size: number,
  color: ReturnType<typeof rgb>,
  maxWidth?: number
) {
  const lines = maxWidth ? wrapText(text, font, size, maxWidth) : [text];
  let cursor = y;
  for (const line of lines) {
    const w = font.widthOfTextAtSize(line, size);
    page.drawText(line, {
      x: (PAGE_W - w) / 2,
      y: cursor,
      size,
      font,
      color,
    });
    cursor -= size + 2;
  }
  return cursor;
}

function wrapText(
  text: string,
  font: PDFFont,
  size: number,
  maxWidth: number
): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(next, size) > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.length ? lines : [text];
}

async function embedIcon(
  doc: PDFDocument
): Promise<Awaited<ReturnType<PDFDocument["embedPng"]>> | null> {
  const root = typeof process.cwd === "function" ? process.cwd() : "";
  const candidates = [
    path.join(root, "public", "forged-icon.png"),
    path.join(root, "public", "forged-wordmark.png"),
  ];
  for (const filePath of candidates) {
    try {
      if (fs.existsSync(filePath)) {
        return await doc.embedPng(fs.readFileSync(filePath));
      }
    } catch {
      /* try next */
    }
  }
  return null;
}

export async function generateForgedPathCertificatePdf(
  data: ForgedPathCertificateRenderData
): Promise<Uint8Array> {
  const program = getForgedPathProgram(data.programId);
  if (!program) throw new Error("Program not found.");

  const cert = program.certificate;
  const doc = await PDFDocument.create();
  doc.setTitle(`ForgEd Path — ${cert.programTitle}`);
  doc.setAuthor("ForgEd");
  doc.setSubject(data.programId);

  const page = doc.addPage([PAGE_W, PAGE_H]);
  page.drawRectangle({ x: 0, y: 0, width: PAGE_W, height: PAGE_H, color: CHARCOAL });
  page.drawRectangle({
    x: 36,
    y: 36,
    width: PAGE_W - 72,
    height: PAGE_H - 72,
    color: CHARCOAL_MID,
  });

  page.drawRectangle({
    x: BORDER_INSET,
    y: BORDER_INSET,
    width: PAGE_W - BORDER_INSET * 2,
    height: PAGE_H - BORDER_INSET * 2,
    borderColor: GOLD,
    borderWidth: 1.5,
  });
  page.drawRectangle({
    x: BORDER_INSET + 5,
    y: BORDER_INSET + 5,
    width: PAGE_W - (BORDER_INSET + 5) * 2,
    height: PAGE_H - (BORDER_INSET + 5) * 2,
    borderColor: GOLD_LIGHT,
    borderWidth: 0.75,
  });

  const helvetica = await doc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const timesBold = await doc.embedFont(StandardFonts.TimesRomanBold);
  const timesItalic = await doc.embedFont(StandardFonts.TimesRomanItalic);

  const icon = await embedIcon(doc);
  if (icon) {
    const iconSize = 36;
    page.drawImage(icon, {
      x: BORDER_INSET + 16,
      y: PAGE_H - BORDER_INSET - 52,
      width: iconSize,
      height: iconSize,
    });
  }

  page.drawText("ForgEd Path", {
    x: BORDER_INSET + 58,
    y: PAGE_H - BORDER_INSET - 28,
    size: 12,
    font: timesBold,
    color: GOLD,
  });
  page.drawText("— LEARN SKILLS THAT MATTER. —", {
    x: BORDER_INSET + 58,
    y: PAGE_H - BORDER_INSET - 42,
    size: 5.5,
    font: helvetica,
    color: MUTED,
  });

  let y = PAGE_H - BORDER_INSET - 78;
  centerText(page, "THIS CERTIFIES THAT", y, helvetica, 7, GOLD);
  y -= 22;

  const nameSize = Math.min(28, 400 / Math.max(data.studentName.length * 0.5, 10));
  centerText(page, data.studentName.toUpperCase(), y, timesBold, nameSize, GOLD);
  y -= nameSize + 8;

  centerText(page, "HAS SUCCESSFULLY COMPLETED THE", y, helvetica, 7, SILVER);
  y -= 18;
  centerText(page, cert.programTitle, y, timesBold, 14, WHITE);
  y -= 20;

  y = centerText(page, cert.curriculumLine, y, helvetica, 5, GOLD, PAGE_W - 120);
  y -= 6;

  const descLines = wrapText(cert.description, timesItalic, 6.5, PAGE_W - 140);
  for (const line of descLines) {
    const w = timesItalic.widthOfTextAtSize(line, 6.5);
    page.drawText(line, {
      x: (PAGE_W - w) / 2,
      y,
      size: 6.5,
      font: timesItalic,
      color: SILVER,
    });
    y -= 9;
  }
  y -= 4;

  const colCount = 6;
  const colW = (PAGE_W - 100) / colCount;
  const row1 = cert.institutions.slice(0, 6);
  const row2 = cert.institutions.slice(6);

  for (let i = 0; i < row1.length; i++) {
    drawInstitutionBlock(page, row1[i], 50 + i * colW, y, helveticaBold, helvetica, colW - 4);
  }
  y -= 52;
  const colW2 = (PAGE_W - 100) / row2.length;
  for (let i = 0; i < row2.length; i++) {
    drawInstitutionBlock(page, row2[i], 50 + i * colW2, y, helveticaBold, helvetica, colW2 - 4);
  }

  const sigY = 58;
  page.drawText(cert.programDirector.motto, {
    x: 52,
    y: sigY + 22,
    size: 9,
    font: timesItalic,
    color: GOLD,
  });
  page.drawLine({
    start: { x: 52, y: sigY + 10 },
    end: { x: 200, y: sigY + 10 },
    thickness: 0.5,
    color: GOLD,
  });
  page.drawText(cert.programDirector.name.toUpperCase(), {
    x: 52,
    y: sigY - 2,
    size: 7,
    font: helveticaBold,
    color: GOLD,
  });
  page.drawText(cert.programDirector.title.toUpperCase(), {
    x: 52,
    y: sigY - 12,
    size: 5.5,
    font: helvetica,
    color: MUTED,
  });

  if (icon) {
    const sealSize = 44;
    page.drawCircle({
      x: PAGE_W / 2,
      y: sigY + 6,
      size: sealSize / 2,
      borderColor: GOLD,
      borderWidth: 1.5,
      color: CHARCOAL,
    });
    page.drawImage(icon, {
      x: PAGE_W / 2 - 12,
      y: sigY - 6,
      width: 24,
      height: 24,
    });
    const ringW = helveticaBold.widthOfTextAtSize(cert.sealRing, 4);
    page.drawText(cert.sealRing, {
      x: PAGE_W / 2 - ringW / 2,
      y: sigY + 28,
      size: 4,
      font: helveticaBold,
      color: GOLD,
    });
    const footerW = helveticaBold.widthOfTextAtSize(cert.sealFooter, 4);
    page.drawText(cert.sealFooter, {
      x: PAGE_W / 2 - footerW / 2,
      y: sigY - 22,
      size: 4,
      font: helveticaBold,
      color: GOLD,
    });
  }

  const boardNameW = helveticaBold.widthOfTextAtSize(
    cert.executiveBoard.name.toUpperCase(),
    7
  );
  page.drawText(cert.executiveBoard.motto, {
    x: PAGE_W - 52 - helvetica.widthOfTextAtSize(cert.executiveBoard.motto, 9),
    y: sigY + 22,
    size: 9,
    font: timesItalic,
    color: GOLD,
  });
  page.drawLine({
    start: { x: PAGE_W - 200, y: sigY + 10 },
    end: { x: PAGE_W - 52, y: sigY + 10 },
    thickness: 0.5,
    color: GOLD,
  });
  page.drawText(cert.executiveBoard.name.toUpperCase(), {
    x: PAGE_W - 52 - boardNameW,
    y: sigY - 2,
    size: 7,
    font: helveticaBold,
    color: GOLD,
  });
  page.drawText(cert.executiveBoard.title.toUpperCase(), {
    x: PAGE_W - 200,
    y: sigY - 12,
    size: 5.5,
    font: helvetica,
    color: MUTED,
  });

  const footerW = helvetica.widthOfTextAtSize(cert.footerLine, 5);
  page.drawText(cert.footerLine, {
    x: (PAGE_W - footerW) / 2,
    y: 36,
    size: 5,
    font: helvetica,
    color: GOLD,
  });

  const dateStr = formatDisplayDate(data.completionDate);
  const dateW = helvetica.widthOfTextAtSize(dateStr, 5);
  page.drawText(dateStr, {
    x: (PAGE_W - dateW) / 2,
    y: 26,
    size: 5,
    font: helvetica,
    color: MUTED,
  });

  return doc.save();
}

function drawInstitutionBlock(
  page: PDFPage,
  institution: { name: string; courses: string[] },
  x: number,
  y: number,
  bold: PDFFont,
  regular: PDFFont,
  maxW: number
) {
  const nameLines = wrapText(institution.name.toUpperCase(), bold, 4.5, maxW);
  let cursor = y;
  for (const line of nameLines) {
    page.drawText(line, { x, y: cursor, size: 4.5, font: bold, color: GOLD });
    cursor -= 6;
  }
  for (const course of institution.courses) {
    const courseLines = wrapText(course, regular, 4, maxW);
    for (const line of courseLines) {
      page.drawText(line, { x, y: cursor, size: 4, font: regular, color: SILVER });
      cursor -= 5;
    }
  }
}
