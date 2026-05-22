/**
 * Aligns generated textbooks and quiz banks with ForgEd educational (non-cert) positioning.
 * Run: node scripts/fix-education-disclaimer-copy.mjs
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const DIRS = [
  path.join(ROOT, "src/lib/courses/textbooks"),
  path.join(ROOT, "src/lib/courses/textbook/banks"),
];

const REPLACEMENTS = [
  [
    /before certifications, college prep, or workplace upskilling/g,
    "for self-paced education and logical foundations — not professional certification, licensure, or cert-level competence",
  ],
  [
    /foundation for deeper specialization, certifications, and workplace decisions you can justify with cited reasoning/g,
    "logical foundation for further study and informed workplace decisions — not a substitute for professional certification or licensure",
  ],
  [
    /Use this section as a foundation for certifications, workplace decisions, and further specialization in/g,
    "Use this section to build a logical foundation for further study and informed decisions about",
  ],
  [
    /earn path certifications/g,
    "earn ForgEd path completion badges on your profile",
  ],
  [
    /not professional licensure or certification prep by itself/g,
    "general education for logical foundations — not professional licensure, certification prep, or cert-level competence",
  ],
  [
    /On a certification-style item about/g,
    "On a practice assessment item about",
  ],
  [
    /certify completion on your ForgEd profile/g,
    "record course completion on your ForgEd profile",
  ],
  [
    /suitable for self-paced study before certifications/g,
    "suitable for self-paced education and logical foundations — not professional certification",
  ],
  [
    /Use this section as a foundation for certifications, workplace decisions, and further specialization/g,
    "Use this section to build a logical foundation for further study and informed decisions",
  ],
  [
    /as a foundation for certifications, workplace decisions/g,
    "as a logical foundation for further study and informed decisions — not professional certification",
  ],
  [
    /for certifications, workplace decisions, and further specialization/g,
    "for further study and informed everyday decisions — not professional certification",
  ],
  [
    /and rigorous prose suitable for self-paced study for self-paced education and logical foundations — not professional certification, licensure, or cert-level competence\./g,
    "and rigorous prose for self-paced education and logical foundations. It does not replace professional certification, licensure exams, or cert-level competence.",
  ],
];

function patchFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;
  for (const [re, replacement] of REPLACEMENTS) {
    if (re.test(content)) {
      content = content.replace(re, replacement);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

let count = 0;
for (const dir of DIRS) {
  if (!fs.existsSync(dir)) continue;
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith(".ts")) continue;
    const fp = path.join(dir, name);
    if (patchFile(fp)) {
      count++;
      console.log("patched", name);
    }
  }
}
console.log("done,", count, "files");
