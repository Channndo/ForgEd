/**
 * Adds illustrative case study tables to section 3 of each law textbook chapter.
 * Run: node scripts/inject-law-case-studies.mjs
 */
import fs from "fs";
import path from "path";
import { getLawCaseStudies, LAW_COURSE_SLUGS } from "./data/law-case-studies.mjs";

const TEXTBOOKS_DIR = path.join(process.cwd(), "src/lib/courses/textbooks");

function formatCaseStudies(cases) {
  const lines = cases.map(
    (c) =>
      `          { name: ${JSON.stringify(c.name)}, year: ${JSON.stringify(c.year ?? "")}, summary: ${JSON.stringify(c.summary)} }`
  );
  return `caseStudies: [\n${lines.join(",\n")},\n        ]`;
}

function injectIntoFile(filePath, slug) {
  let content = fs.readFileSync(filePath, "utf8");
  const chRe = /chapter\(\s*"([^"]+)"/g;
  let changed = 0;
  let m;
  while ((m = chRe.exec(content))) {
    const chapterId = m[1];
    const cases = getLawCaseStudies(slug, chapterId);
    if (!cases?.length) continue;

    const sectionId = `${chapterId}-s3`;
    const sectionStart = content.indexOf(`"${sectionId}"`);
    if (sectionStart === -1) {
      console.warn(`  skip ${sectionId}: section not found`);
      continue;
    }

    const sectionEnd = content.indexOf("\n    ),", sectionStart);
    if (sectionEnd === -1) continue;
    const sectionBlock = content.slice(sectionStart, sectionEnd);

    if (sectionBlock.includes("caseStudies:")) continue;

    const caseBlock = formatCaseStudies(cases);
    let updatedBlock;

    if (sectionBlock.includes("bulletPoints:")) {
      updatedBlock = sectionBlock.replace(
        /(\n        bulletPoints: \[[\s\S]*?\])\s*(\n      \})/,
        `$1,\n        ${caseBlock}$2`
      );
    } else if (sectionBlock.match(/\], \{/)) {
      updatedBlock = sectionBlock.replace(/\], \{/, `], {\n        ${caseBlock},`);
    } else {
      console.warn(`  skip ${sectionId}: no extras block to attach caseStudies`);
      continue;
    }

    if (updatedBlock === sectionBlock) {
      console.warn(`  skip ${sectionId}: regex did not match`);
      continue;
    }

    content = content.slice(0, sectionStart) + updatedBlock + content.slice(sectionEnd);
    changed++;
    chRe.lastIndex = sectionStart + updatedBlock.length;
  }

  if (changed > 0) {
    fs.writeFileSync(filePath, content);
  }
  return changed;
}

let total = 0;
for (const slug of LAW_COURSE_SLUGS) {
  const filePath = path.join(TEXTBOOKS_DIR, `${slug}.ts`);
  if (!fs.existsSync(filePath)) {
    console.warn(`Missing ${filePath}`);
    continue;
  }
  const n = injectIntoFile(filePath, slug);
  console.log(`${slug}: ${n} sections updated`);
  total += n;
}
console.log(`Done. ${total} section(s) now include case studies.`);
