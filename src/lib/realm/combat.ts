export interface ItemDef {
  id: string;
  name: string;
  /** short label drawn on ground / inventory */
  glyph: string;
  color: string;
  heal?: number;
  weaponAttack?: number;
  weaponStrength?: number;
  value?: number;
}

export const ITEMS: Record<string, ItemDef> = {
  coins: { id: "coins", name: "Coins", glyph: "¢", color: "#d4af37", value: 1 },
  bread: { id: "bread", name: "Bread", glyph: "🍞", color: "#c89b56", heal: 5, value: 4 },
  bones: { id: "bones", name: "Bones", glyph: "🦴", color: "#e5e0d0", value: 1 },
  raw_meat: { id: "raw_meat", name: "Raw Meat", glyph: "🍖", color: "#b45c5c", value: 2 },
  bronze_sword: {
    id: "bronze_sword",
    name: "Bronze Sword",
    glyph: "🗡️",
    color: "#b08d57",
    weaponAttack: 4,
    weaponStrength: 5,
    value: 25,
  },
  iron_dagger: {
    id: "iron_dagger",
    name: "Iron Dagger",
    glyph: "🔪",
    color: "#9ca3af",
    weaponAttack: 7,
    weaponStrength: 6,
    value: 60,
  },
};

export function itemDef(id: string): ItemDef {
  return ITEMS[id] ?? { id, name: id, glyph: "?", color: "#888" };
}

export interface DropEntry {
  id: string;
  min: number;
  max: number;
  /** probability 0..1 */
  chance: number;
}

export interface EnemyDef {
  type: string;
  name: string;
  level: number;
  maxHp: number;
  defence: number;
  attack: number;
  maxHit: number;
  xp: number;
  color: string;
  respawnMs: number;
  drops: DropEntry[];
}

export const ENEMIES: Record<string, EnemyDef> = {
  rat: {
    type: "rat",
    name: "Giant Rat",
    level: 1,
    maxHp: 5,
    defence: 1,
    attack: 1,
    maxHit: 1,
    xp: 12,
    color: "#7c6f64",
    respawnMs: 6000,
    drops: [
      { id: "coins", min: 1, max: 4, chance: 0.7 },
      { id: "bones", min: 1, max: 1, chance: 1 },
      { id: "raw_meat", min: 1, max: 1, chance: 0.4 },
    ],
  },
  goblin: {
    type: "goblin",
    name: "Goblin",
    level: 2,
    maxHp: 9,
    defence: 2,
    attack: 2,
    maxHit: 2,
    xp: 20,
    color: "#4d7c3a",
    respawnMs: 9000,
    drops: [
      { id: "coins", min: 2, max: 9, chance: 0.85 },
      { id: "bones", min: 1, max: 1, chance: 1 },
      { id: "bronze_sword", min: 1, max: 1, chance: 0.12 },
      { id: "iron_dagger", min: 1, max: 1, chance: 0.03 },
    ],
  },
};

export interface EnemySpawn {
  id: string;
  type: string;
  x: number;
  y: number;
}

/** Fixed spawn points in the open southern field of Ashford. */
export const ENEMY_SPAWNS: EnemySpawn[] = [
  { id: "rat-1", type: "rat", x: 6, y: 12 },
  { id: "rat-2", type: "rat", x: 9, y: 13 },
  { id: "rat-3", type: "rat", x: 4, y: 11 },
  { id: "goblin-1", type: "goblin", x: 13, y: 12 },
  { id: "goblin-2", type: "goblin", x: 16, y: 13 },
  { id: "goblin-3", type: "goblin", x: 11, y: 11 },
  { id: "goblin-4", type: "goblin", x: 15, y: 11 },
];

export function rollDrops(def: EnemyDef): { id: string; qty: number }[] {
  const out: { id: string; qty: number }[] = [];
  for (const d of def.drops) {
    if (Math.random() <= d.chance) {
      const qty = d.min + Math.floor(Math.random() * (d.max - d.min + 1));
      if (qty > 0) out.push({ id: d.id, qty });
    }
  }
  return out;
}
