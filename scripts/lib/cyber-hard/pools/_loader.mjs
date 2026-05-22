import { chapter, Q } from "../format.mjs";

/**
 * @param {string[]} titles
 * @param {import("../format.mjs").HardQuestion[][]} perChapter
 */
export function fromChapters(titles, perChapter) {
  if (titles.length !== perChapter.length) {
    throw new Error(`Chapter count mismatch: ${titles.length} titles vs ${perChapter.length} banks`);
  }
  return titles.map((title, i) => {
    const questions = perChapter[i];
    if (!questions?.length) throw new Error(`Missing questions for ${title}`);
    return chapter(title, questions);
  });
}

export { Q };
