#!/usr/bin/env node
/**
 * GitHub Pages static export cannot include Route Handlers.
 * Temporarily moves src/app/api aside before `next build`.
 */
import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const apiDir = path.join(root, "src/app/api");
const backupDir = path.join(root, ".api-backup-for-export");

const action = process.argv[2] || "hide";

if (action === "hide") {
  if (fs.existsSync(apiDir)) {
    if (fs.existsSync(backupDir)) fs.rmSync(backupDir, { recursive: true });
    fs.renameSync(apiDir, backupDir);
    console.log("[gh-pages] API routes moved aside for static export.");
  }
} else if (action === "restore") {
  if (fs.existsSync(backupDir)) {
    if (fs.existsSync(apiDir)) fs.rmSync(apiDir, { recursive: true });
    fs.renameSync(backupDir, apiDir);
    console.log("[gh-pages] API routes restored.");
  }
} else {
  console.error("Usage: node scripts/prepare-gh-pages.mjs [hide|restore]");
  process.exit(1);
}
