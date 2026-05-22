/**
 * Materializes scripts/data/cyber-hard/*.mjs from question pool modules.
 * Run: node scripts/build-cyber-hard-data.mjs
 */
import fs from "fs";
import path from "path";
import { emitDataModule } from "./lib/cyber-hard/format.mjs";
import { buildBasicsChapters } from "./lib/cyber-hard/pools/basics.mjs";
import { buildThreatChapters } from "./lib/cyber-hard/pools/threat.mjs";
import { buildPasswordChapters } from "./lib/cyber-hard/pools/password.mjs";
import { buildPhishingChapters } from "./lib/cyber-hard/pools/phishing.mjs";
import { buildNetworkChapters } from "./lib/cyber-hard/pools/network.mjs";
import { buildIrChapters } from "./lib/cyber-hard/pools/ir.mjs";

const OUT = path.join(process.cwd(), "scripts/data/cyber-hard");

const FILES = [
  ["basics.mjs", buildBasicsChapters()],
  ["threat.mjs", buildThreatChapters()],
  ["password.mjs", buildPasswordChapters()],
  ["phishing.mjs", buildPhishingChapters()],
  ["network.mjs", buildNetworkChapters()],
  ["ir.mjs", buildIrChapters()],
];

fs.mkdirSync(OUT, { recursive: true });
for (const [name, chapters] of FILES) {
  const body = emitDataModule(name, chapters);
  const outPath = path.join(OUT, name);
  fs.writeFileSync(outPath, body, "utf8");
  const n = chapters.reduce((s, c) => s + c.questions.length, 0);
  console.log(`Wrote ${outPath} (${n} questions)`);
}
