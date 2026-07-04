import type { RealmNpc } from "./types";
import type { EnemySpawn } from "./combat";
import { ASHFORD_NPCS, ASHFORD_TILES } from "./ashfordMap";

export interface ZonePortal {
  x: number;
  y: number;
  to: string;
  toX: number;
  toY: number;
  label: string;
}

export interface ZonePoint {
  x: number;
  y: number;
}

export interface Zone {
  id: string;
  name: string;
  tiles: number[][];
  palette: Record<number, string>;
  npcs: RealmNpc[];
  spawns: EnemySpawn[];
  portals: ZonePortal[];
  trees: ZonePoint[];
  fires: ZonePoint[];
  fishing: ZonePoint[];
  spawn: ZonePoint;
  /** Dying here costs half your coins. */
  dangerous?: boolean;
}

/** tile codes: 0 grass 1 path 2 wall 3 water 4 arena 5 stone floor */
function buildMap(w: number, h: number, floor: number): number[][] {
  return Array.from({ length: h }, (_, y) =>
    Array.from({ length: w }, (_, x) =>
      x === 0 || y === 0 || x === w - 1 || y === h - 1 ? 2 : floor
    )
  );
}

// ---------------------------------------------------------------------------
// The Marches — wilderness south of Ashford
// ---------------------------------------------------------------------------
const MARCHES_TILES = (() => {
  const t = buildMap(22, 16, 0);
  // north gate back to Ashford
  t[0][10] = 1;
  t[0][11] = 1;
  // worn path running south from the gate
  for (let y = 1; y <= 13; y++) {
    t[y][10] = 1;
    if (y % 2 === 0) t[y][11] = 1;
  }
  // western river
  for (let y = 4; y <= 10; y++) {
    t[y][2] = 3;
    t[y][3] = 3;
  }
  return t;
})();

// ---------------------------------------------------------------------------
// Grimheart Cave — lair of the Goblin King
// ---------------------------------------------------------------------------
const CAVE_TILES = (() => {
  const t = buildMap(22, 16, 5);
  // pillars
  for (const [x, y] of [
    [7, 5],
    [7, 10],
    [14, 7],
    [11, 4],
    [16, 4],
    [5, 8],
  ]) {
    t[y][x] = 2;
  }
  return t;
})();

const ZONES: Record<string, Zone> = {
  ashford: {
    id: "ashford",
    name: "Ashford",
    tiles: ASHFORD_TILES,
    palette: { 0: "#2d4a2d", 1: "#5c4a32", 2: "#1a1a1e", 3: "#1e3a5f", 4: "#4a3a2a" },
    npcs: ASHFORD_NPCS,
    spawns: [
      { id: "rat-1", type: "rat", x: 6, y: 12 },
      { id: "rat-2", type: "rat", x: 9, y: 13 },
      { id: "rat-3", type: "rat", x: 4, y: 11 },
      { id: "goblin-1", type: "goblin", x: 13, y: 12 },
      { id: "goblin-2", type: "goblin", x: 16, y: 13 },
      { id: "goblin-3", type: "goblin", x: 15, y: 11 },
    ],
    portals: [
      { x: 10, y: 15, to: "marches", toX: 10, toY: 1, label: "The Marches" },
      { x: 11, y: 15, to: "marches", toX: 11, toY: 1, label: "The Marches" },
    ],
    trees: [
      { x: 2, y: 3 },
      { x: 2, y: 8 },
      { x: 20, y: 12 },
      { x: 19, y: 13 },
    ],
    fires: [{ x: 13, y: 4 }],
    fishing: [{ x: 14, y: 9 }],
    spawn: { x: 5, y: 7 },
  },
  marches: {
    id: "marches",
    name: "The Marches",
    tiles: MARCHES_TILES,
    palette: { 0: "#22381f", 1: "#4a3b28", 2: "#141417", 3: "#173049", 5: "#26222b" },
    npcs: [],
    spawns: [
      { id: "wolf-1", type: "wolf", x: 7, y: 6 },
      { id: "wolf-2", type: "wolf", x: 12, y: 8 },
      { id: "wolf-3", type: "wolf", x: 9, y: 11 },
      { id: "bandit-1", type: "bandit", x: 15, y: 5 },
      { id: "bandit-2", type: "bandit", x: 17, y: 9 },
      { id: "goblin-m1", type: "goblin", x: 5, y: 12 },
      { id: "goblin-m2", type: "goblin", x: 14, y: 12 },
    ],
    portals: [
      { x: 10, y: 0, to: "ashford", toX: 10, toY: 14, label: "Ashford" },
      { x: 11, y: 0, to: "ashford", toX: 11, toY: 14, label: "Ashford" },
      { x: 19, y: 13, to: "cave", toX: 3, toY: 2, label: "Grimheart Cave" },
    ],
    trees: [
      { x: 5, y: 3 },
      { x: 7, y: 8 },
      { x: 13, y: 4 },
      { x: 16, y: 7 },
      { x: 6, y: 13 },
      { x: 13, y: 10 },
      { x: 18, y: 4 },
    ],
    fires: [],
    fishing: [{ x: 3, y: 7 }],
    spawn: { x: 10, y: 2 },
    dangerous: true,
  },
  cave: {
    id: "cave",
    name: "Grimheart Cave",
    tiles: CAVE_TILES,
    palette: { 0: "#26222b", 1: "#332d3a", 2: "#0d0c10", 3: "#173049", 5: "#26222b" },
    npcs: [],
    spawns: [
      { id: "skel-1", type: "skeleton", x: 6, y: 6 },
      { id: "skel-2", type: "skeleton", x: 10, y: 9 },
      { id: "skel-3", type: "skeleton", x: 14, y: 5 },
      { id: "skel-4", type: "skeleton", x: 8, y: 12 },
      { id: "king", type: "goblin_king", x: 17, y: 11 },
    ],
    portals: [{ x: 2, y: 2, to: "marches", toX: 18, toY: 13, label: "Leave cave" }],
    trees: [],
    fires: [{ x: 12, y: 12 }],
    fishing: [],
    spawn: { x: 3, y: 3 },
    dangerous: true,
  },
};

export function getZone(id: string): Zone {
  return ZONES[id] ?? ZONES.ashford;
}

export function zoneWalkable(zone: Zone, x: number, y: number): boolean {
  const h = zone.tiles.length;
  const w = zone.tiles[0].length;
  if (x < 0 || y < 0 || x >= w || y >= h) return false;
  const t = zone.tiles[y][x];
  if (t === 2 || t === 3) return false;
  if (zone.trees.some((p) => p.x === x && p.y === y)) return false;
  if (zone.fires.some((p) => p.x === x && p.y === y)) return false;
  return true;
}

export function zoneFindPath(
  zone: Zone,
  start: { x: number; y: number },
  goal: { x: number; y: number }
): { x: number; y: number }[] {
  if (!zoneWalkable(zone, goal.x, goal.y)) return [];
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
      if (!zoneWalkable(zone, nx, ny) || came.has(nk)) continue;
      came.set(nk, key(cur.x, cur.y));
      queue.push({ x: nx, y: ny });
    }
  }
  return [];
}

export function zoneAdjacentTo(
  zone: Zone,
  tx: number,
  ty: number,
  from: { x: number; y: number }
): { x: number; y: number } | null {
  const cands = [
    { x: tx + 1, y: ty },
    { x: tx - 1, y: ty },
    { x: tx, y: ty + 1 },
    { x: tx, y: ty - 1 },
  ].filter((c) => zoneWalkable(zone, c.x, c.y));
  cands.sort(
    (a, b) =>
      Math.abs(a.x - from.x) + Math.abs(a.y - from.y) - (Math.abs(b.x - from.x) + Math.abs(b.y - from.y))
  );
  return cands[0] ?? null;
}
