import type { RealmNpc } from "./types";

/** 0 grass 1 path 2 wall 3 water 4 arena */
export const MAP_W = 22;
export const MAP_H = 16;

export const ASHFORD_TILES: number[][] = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2],
  [2, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 4, 4, 2],
  [2, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 4, 4, 4, 2],
  [2, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 4, 4, 4, 2],
  [2, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 3, 3, 3, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

export const PLAYER_SPAWN = { x: 5, y: 7 };

export const LANTERNS = [
  { id: 1, x: 4, y: 6 },
  { id: 2, x: 10, y: 6 },
  { id: 3, x: 14, y: 7 },
  { id: 4, x: 8, y: 9 },
  { id: 5, x: 12, y: 10 },
];

export const ASHFORD_NPCS: RealmNpc[] = [
  {
    id: "reginald",
    name: "Sir Reginald Failsworth",
    x: 8,
    y: 5,
    color: "#9ca3af",
    lines: [
      "Ah! A fresh victim—I mean adventurer.",
      "Click or tap the ground to walk. If you click a wall, you will stand there thoughtfully.",
      "Walk the five lantern posts. Betty has bread. Bread saves lives.",
      "Also — goblins have been keeping a ledger of everything they've stolen. I want those pages. For legal reasons.",
    ],
  },
  {
    id: "betty",
    name: "Betty the Baker",
    x: 14,
    y: 5,
    color: "#d4af37",
    lines: [
      "You look underfed. Everyone does.",
      "Hit the training dummy near the arena. Then eat bread. Right-click food on desktop—or tap Eat on mobile.",
      "And if you fancy earning your crust: the rats south of town are ruining my stew. Deal with them.",
    ],
  },
  {
    id: "crisp",
    name: "Duel Master Crisp",
    x: 19,
    y: 4,
    color: "#c9a962",
    lines: [
      "Duels are consent. The Marches are not.",
      "Tap me and choose Duel when you're ready to lose dignity safely.",
    ],
  },
  {
    id: "nobby",
    name: "Wilderness Guard Nobby",
    x: 3,
    y: 12,
    color: "#6b7280",
    lines: [
      "Through the south gate: wolves, bandits, and worse. Die out there and the Marches take half your coins.",
      "Word is the Goblin King squats in Grimheart Cave, southeast of the Marches. Someone should do something about that. Someone else, ideally.",
    ],
  },
  {
    id: "pete",
    name: "Grubby Pete",
    x: 5,
    y: 9,
    color: "#a16207",
    lines: [
      "Finest wares in Ashford! Also the only wares in Ashford.",
      "I buy anything. Bones, logs, fish — one man's rubbish is my entire business model.",
    ],
  },
];

export function isWalkable(x: number, y: number): boolean {
  if (x < 0 || y < 0 || x >= MAP_W || y >= MAP_H) return false;
  const t = ASHFORD_TILES[y][x];
  return t !== 2 && t !== 3;
}

export function findPath(
  start: { x: number; y: number },
  goal: { x: number; y: number }
): { x: number; y: number }[] {
  if (!isWalkable(goal.x, goal.y)) return [];
  const key = (x: number, y: number) => `${x},${y}`;
  const queue: { x: number; y: number }[] = [start];
  const came = new Map<string, string | null>([[key(start.x, start.y), null]]);
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  while (queue.length) {
    const cur = queue.shift()!;
    if (cur.x === goal.x && cur.y === goal.y) {
      const path: { x: number; y: number }[] = [];
      let k: string | null = key(cur.x, cur.y);
      while (k) {
        const [px, py] = k.split(",").map(Number);
        path.unshift({ x: px, y: py });
        k = came.get(k) ?? null;
      }
      return path.slice(1);
    }
    for (const [dx, dy] of dirs) {
      const nx = cur.x + dx;
      const ny = cur.y + dy;
      const nk = key(nx, ny);
      if (!isWalkable(nx, ny) || came.has(nk)) continue;
      came.set(nk, key(cur.x, cur.y));
      queue.push({ x: nx, y: ny });
    }
  }
  return [];
}
