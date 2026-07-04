import type { RealmItem } from "./types";

export interface ItemDef {
  id: string;
  name: string;
  /** short label drawn on ground / inventory */
  glyph: string;
  color: string;
  heal?: number;
  weaponAttack?: number;
  weaponStrength?: number;
  shieldDefence?: number;
  value?: number;
}

export const ITEMS: Record<string, ItemDef> = {
  coins: { id: "coins", name: "Coins", glyph: "¢", color: "#d4af37", value: 1 },
  bread: { id: "bread", name: "Bread", glyph: "🍞", color: "#c89b56", heal: 5, value: 4 },
  bones: { id: "bones", name: "Bones", glyph: "🦴", color: "#e5e0d0", value: 2 },
  raw_meat: { id: "raw_meat", name: "Raw Meat", glyph: "🍖", color: "#b45c5c", value: 3 },
  cooked_meat: { id: "cooked_meat", name: "Cooked Meat", glyph: "🥩", color: "#8f4a2e", heal: 4, value: 5 },
  raw_fish: { id: "raw_fish", name: "Raw Trout", glyph: "🐟", color: "#7dd3fc", value: 4 },
  cooked_fish: { id: "cooked_fish", name: "Cooked Trout", glyph: "🍤", color: "#f9a8d4", heal: 7, value: 8 },
  burnt_food: { id: "burnt_food", name: "Burnt Mess", glyph: "💀", color: "#44403c", value: 1 },
  logs: { id: "logs", name: "Logs", glyph: "🪵", color: "#926a3e", value: 3 },
  ledger_page: { id: "ledger_page", name: "Ledger Page", glyph: "📜", color: "#e7dcb8", value: 0 },
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
  steel_sword: {
    id: "steel_sword",
    name: "Steel Sword",
    glyph: "⚔️",
    color: "#cbd5e1",
    weaponAttack: 12,
    weaponStrength: 14,
    value: 220,
  },
  wooden_shield: {
    id: "wooden_shield",
    name: "Wooden Shield",
    glyph: "🛡️",
    color: "#8b6f47",
    shieldDefence: 3,
    value: 35,
  },
  iron_shield: {
    id: "iron_shield",
    name: "Iron Shield",
    glyph: "🛡️",
    color: "#94a3b8",
    shieldDefence: 6,
    value: 130,
  },
};

export function itemDef(id: string): ItemDef {
  return ITEMS[id] ?? { id, name: id, glyph: "?", color: "#888" };
}

/** Auto-eat priority: best heals first. */
export const FOOD_PRIORITY = ["cooked_fish", "bread", "cooked_meat"];

export function addItemToInventory(inv: RealmItem[], id: string, qty: number): RealmItem[] {
  const next = inv.map((i) => ({ ...i }));
  const existing = next.find((i) => i.id === id);
  if (existing) existing.qty += qty;
  else next.push({ id, qty });
  return next;
}

export function removeItemFromInventory(inv: RealmItem[], id: string, qty: number): RealmItem[] {
  return inv
    .map((i) => (i.id === id ? { ...i, qty: i.qty - qty } : { ...i }))
    .filter((i) => i.qty > 0);
}

export function inventoryCount(inv: RealmItem[], id: string): number {
  return inv.find((i) => i.id === id)?.qty ?? 0;
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
  boss?: boolean;
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
      { id: "raw_meat", min: 1, max: 1, chance: 0.5 },
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
      { id: "ledger_page", min: 1, max: 1, chance: 0.4 },
      { id: "bronze_sword", min: 1, max: 1, chance: 0.1 },
      { id: "iron_dagger", min: 1, max: 1, chance: 0.03 },
    ],
  },
  wolf: {
    type: "wolf",
    name: "Grey Wolf",
    level: 4,
    maxHp: 14,
    defence: 4,
    attack: 4,
    maxHit: 3,
    xp: 45,
    color: "#64748b",
    respawnMs: 10000,
    drops: [
      { id: "bones", min: 1, max: 1, chance: 1 },
      { id: "raw_meat", min: 1, max: 2, chance: 0.85 },
      { id: "coins", min: 3, max: 10, chance: 0.5 },
    ],
  },
  bandit: {
    type: "bandit",
    name: "Marches Bandit",
    level: 6,
    maxHp: 20,
    defence: 6,
    attack: 6,
    maxHit: 4,
    xp: 70,
    color: "#7f1d1d",
    respawnMs: 14000,
    drops: [
      { id: "coins", min: 8, max: 25, chance: 0.9 },
      { id: "bones", min: 1, max: 1, chance: 1 },
      { id: "bread", min: 1, max: 2, chance: 0.35 },
      { id: "iron_dagger", min: 1, max: 1, chance: 0.08 },
      { id: "wooden_shield", min: 1, max: 1, chance: 0.07 },
    ],
  },
  skeleton: {
    type: "skeleton",
    name: "Restless Skeleton",
    level: 8,
    maxHp: 26,
    defence: 8,
    attack: 8,
    maxHit: 5,
    xp: 95,
    color: "#d6d3d1",
    respawnMs: 16000,
    drops: [
      { id: "bones", min: 2, max: 3, chance: 1 },
      { id: "coins", min: 10, max: 30, chance: 0.8 },
      { id: "iron_shield", min: 1, max: 1, chance: 0.05 },
      { id: "steel_sword", min: 1, max: 1, chance: 0.02 },
    ],
  },
  goblin_king: {
    type: "goblin_king",
    name: "The Goblin King",
    level: 15,
    maxHp: 60,
    defence: 10,
    attack: 12,
    maxHit: 8,
    xp: 450,
    color: "#365314",
    respawnMs: 45000,
    boss: true,
    drops: [
      { id: "coins", min: 80, max: 150, chance: 1 },
      { id: "bones", min: 3, max: 5, chance: 1 },
      { id: "steel_sword", min: 1, max: 1, chance: 0.25 },
      { id: "iron_shield", min: 1, max: 1, chance: 0.2 },
    ],
  },
};

export interface EnemySpawn {
  id: string;
  type: string;
  x: number;
  y: number;
}

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
