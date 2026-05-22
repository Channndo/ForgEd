/**
 * @typedef {{ q: string; o: [string, string, string, string]; c: 0|1|2|3; e: string }} HardQuestion
 */

/**
 * Build options with correct answer at index `c`.
 * @param {string} correct
 * @param {string[]} wrong
 * @param {0|1|2|3} c
 * @returns {[string, string, string, string]}
 */
export function opts(correct, wrong, c) {
  const o = /** @type {[string, string, string, string]} */ (["", "", "", ""]);
  let wi = 0;
  for (let i = 0; i < 4; i++) {
    if (i === c) o[i] = correct;
    else o[i] = wrong[wi++] ?? "None of the above — review the chapter.";
  }
  return o;
}

/**
 * @param {string} q
 * @param {string} correct
 * @param {string[]} wrong
 * @param {0|1|2|3} c
 * @param {string} e
 * @returns {HardQuestion}
 */
export function Q(q, correct, wrong, c, e) {
  return { q, o: opts(correct, wrong, c), c, e };
}

/**
 * @param {string} title
 * @param {HardQuestion[]} questions
 */
export function chapter(title, questions) {
  return { title, questions };
}

/**
 * @param {string} filePath
 * @param {ReturnType<typeof chapter>[]} chapters
 */
export function emitDataModule(filePath, chapters) {
  const lines = [
    `/** Hard cybersecurity questions — ${chapters.reduce((n, c) => n + c.questions.length, 0)} items */`,
    `export const CHAPTERS = [`,
  ];
  for (const ch of chapters) {
    lines.push(`  {`);
    lines.push(`    title: ${JSON.stringify(ch.title)},`);
    lines.push(`    questions: [`);
    for (const item of ch.questions) {
      lines.push(
        `      { q: ${JSON.stringify(item.q)}, o: ${JSON.stringify(item.o)}, c: ${item.c}, e: ${JSON.stringify(item.e)} },`
      );
    }
    lines.push(`    ],`);
    lines.push(`  },`);
  }
  lines.push(`];`, "");
  return lines.join("\n");
}
