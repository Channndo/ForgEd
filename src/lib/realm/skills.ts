import type { RealmSkills } from "./types";

export type SkillId = keyof RealmSkills;

export const MAX_LEVEL = 99;

/** Real RuneScape XP curve. */
export function xpForLevel(level: number): number {
  let total = 0;
  for (let n = 1; n < level; n++) {
    total += Math.floor(n + 300 * Math.pow(2, n / 7));
  }
  return Math.floor(total / 4);
}

const XP_TABLE: number[] = Array.from({ length: MAX_LEVEL + 1 }, (_, lvl) =>
  lvl < 1 ? 0 : xpForLevel(lvl)
);

export function levelForXp(xp: number): number {
  let level = 1;
  for (let l = 1; l <= MAX_LEVEL; l++) {
    if (xp >= XP_TABLE[l]) level = l;
    else break;
  }
  return level;
}

/** Fraction [0,1] toward the next level, for progress bars. */
export function levelProgress(xp: number): number {
  const lvl = levelForXp(xp);
  if (lvl >= MAX_LEVEL) return 1;
  const cur = XP_TABLE[lvl];
  const next = XP_TABLE[lvl + 1];
  return Math.max(0, Math.min(1, (xp - cur) / (next - cur)));
}

export function combatLevel(skills: RealmSkills): number {
  const att = levelForXp(skills.attack);
  const str = levelForXp(skills.strength);
  const def = levelForXp(skills.defence);
  const hp = levelForXp(skills.hitpoints);
  const base = 0.25 * (def + hp);
  const melee = 0.325 * (att + str);
  return Math.max(3, Math.floor(base + melee));
}

export function maxHp(skills: RealmSkills): number {
  return levelForXp(skills.hitpoints);
}

/** Max melee hit from Strength level plus a flat weapon bonus. */
export function maxHit(skills: RealmSkills, weaponStrength = 0): number {
  const str = levelForXp(skills.strength);
  return 1 + Math.floor((str + weaponStrength) / 8);
}

/** Hit chance vs a target defence level. */
export function hitChance(skills: RealmSkills, targetDefence: number, weaponAttack = 0): number {
  const att = levelForXp(skills.attack);
  const chance = 0.5 + (att + weaponAttack - targetDefence) / 50;
  return Math.max(0.25, Math.min(0.95, chance));
}

/** Roll a single attack: returns damage dealt (0 = miss). */
export function rollAttack(
  skills: RealmSkills,
  targetDefence: number,
  weaponAttack = 0,
  weaponStrength = 0
): number {
  if (Math.random() > hitChance(skills, targetDefence, weaponAttack)) return 0;
  const mh = maxHit(skills, weaponStrength);
  return Math.floor(Math.random() * (mh + 1));
}
