import type { RealmMapConfig } from "./mapTypes";
import { createWalkableChecker } from "./mapTypes";

export type WildMobKind = "goblin" | "rat";

export interface RealmWildMob {
  id: string;
  kind: WildMobKind;
  x: number;
  y: number;
  hp: number;
  maxHp: number;
  label: string;
  spawnType: "wander" | "random";
  /** Ticks until next wander step */
  wanderCooldown: number;
}

export const WILDERNESS_MOB_CONFIG = {
  maxActive: 2,
  spawnCooldownMs: 45_000,
  randomSpawnChance: 0.05,
  wanderIntervalMs: 2_500,
  fleeDamage: 2,
  aggroRange: 1,
} as const;

const MOB_STATS: Record<WildMobKind, { label: string; maxHp: number }> = {
  goblin: { label: "Goblin", maxHp: 4 },
  rat: { label: "Giant rat", maxHp: 2 },
};

let mobIdCounter = 0;

export function createWildMob(
  kind: WildMobKind,
  x: number,
  y: number,
  spawnType: RealmWildMob["spawnType"]
): RealmWildMob {
  mobIdCounter += 1;
  const stats = MOB_STATS[kind];
  return {
    id: `wild-${kind}-${mobIdCounter}-${Date.now()}`,
    kind,
    x,
    y,
    hp: stats.maxHp,
    maxHp: stats.maxHp,
    label: stats.label,
    spawnType,
    wanderCooldown: Math.floor(Math.random() * 3),
  };
}

export function livingWildMobs(mobs: RealmWildMob[]): RealmWildMob[] {
  return mobs.filter((m) => m.hp > 0);
}

type OccupiedChecker = (x: number, y: number) => boolean;

export function pickRandomSpawnTile(
  map: RealmMapConfig,
  player: { x: number; y: number },
  isOccupied: OccupiedChecker
): { x: number; y: number } | null {
  const isWalkable = createWalkableChecker(map);
  const candidates: { x: number; y: number }[] = [];
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ];

  for (const [dx, dy] of dirs) {
    const x = player.x + dx;
    const y = player.y + dy;
    if (!isWalkable(x, y) || isOccupied(x, y)) continue;
    const dist = Math.abs(dx) + Math.abs(dy);
    if (dist >= 2 && dist <= 4) {
      candidates.push({ x, y });
    }
  }

  if (candidates.length === 0) {
    for (const [dx, dy] of dirs.slice(0, 4)) {
      const x = player.x + dx;
      const y = player.y + dy;
      if (isWalkable(x, y) && !isOccupied(x, y)) candidates.push({ x, y });
    }
  }

  if (candidates.length === 0) return null;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

export function tryRandomWildSpawn(input: {
  map: RealmMapConfig;
  player: { x: number; y: number };
  mobs: RealmWildMob[];
  lastSpawnAt: number;
  now?: number;
}): { mob: RealmWildMob | null; lastSpawnAt: number } {
  const now = input.now ?? Date.now();
  const active = livingWildMobs(input.mobs);

  if (active.length >= WILDERNESS_MOB_CONFIG.maxActive) {
    return { mob: null, lastSpawnAt: input.lastSpawnAt };
  }
  if (now - input.lastSpawnAt < WILDERNESS_MOB_CONFIG.spawnCooldownMs) {
    return { mob: null, lastSpawnAt: input.lastSpawnAt };
  }
  if (Math.random() > WILDERNESS_MOB_CONFIG.randomSpawnChance) {
    return { mob: null, lastSpawnAt: input.lastSpawnAt };
  }

  const isOccupied = (x: number, y: number) =>
    active.some((m) => m.x === x && m.y === y) ||
    (x === input.player.x && y === input.player.y);

  const tile = pickRandomSpawnTile(input.map, input.player, isOccupied);
  if (!tile) return { mob: null, lastSpawnAt: input.lastSpawnAt };

  const kind: WildMobKind = Math.random() < 0.75 ? "goblin" : "rat";
  return {
    mob: createWildMob(kind, tile.x, tile.y, "random"),
    lastSpawnAt: now,
  };
}

export function wanderWildMobs(
  map: RealmMapConfig,
  mobs: RealmWildMob[],
  player: { x: number; y: number },
  isOccupied: OccupiedChecker
): RealmWildMob[] {
  const isWalkable = createWalkableChecker(map);
  const dirs = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 },
  ];

  return mobs.map((mob) => {
    if (mob.hp <= 0) return mob;

    const nextCooldown = mob.wanderCooldown - 1;
    if (nextCooldown > 0) {
      return { ...mob, wanderCooldown: nextCooldown };
    }

    const shuffled = [...dirs].sort(() => Math.random() - 0.5);
    for (const d of shuffled) {
      const nx = mob.x + d.x;
      const ny = mob.y + d.y;
      if (!isWalkable(nx, ny) || isOccupied(nx, ny)) continue;
      const playerDist = Math.abs(nx - player.x) + Math.abs(ny - player.y);
      if (playerDist <= 1 && Math.random() < 0.35) continue;
      return { ...mob, x: nx, y: ny, wanderCooldown: 2 + Math.floor(Math.random() * 2) };
    }

    return { ...mob, wanderCooldown: 2 };
  });
}

export function mobAtTile(
  mobs: RealmWildMob[],
  x: number,
  y: number
): RealmWildMob | undefined {
  return livingWildMobs(mobs).find((m) => m.x === x && m.y === y);
}

export function adjacentMob(
  mobs: RealmWildMob[],
  player: { x: number; y: number }
): RealmWildMob | undefined {
  return livingWildMobs(mobs).find(
    (m) => Math.abs(m.x - player.x) + Math.abs(m.y - player.y) <= WILDERNESS_MOB_CONFIG.aggroRange
  );
}

export function drawWildMob(
  ctx: CanvasRenderingContext2D,
  mob: RealmWildMob,
  px: number,
  py: number,
  ts: number,
  flash = false
) {
  if (mob.hp <= 0) return;

  if (flash) {
    ctx.fillStyle = "rgba(239,68,68,0.35)";
    ctx.fillRect(px, py, ts - 1, ts - 1);
  }

  const body = mob.kind === "goblin" ? "#16a34a" : "#78716c";
  ctx.fillStyle = body;
  ctx.fillRect(px + ts * 0.15, py + ts * 0.2, ts * 0.7, ts * 0.65);

  if (mob.kind === "rat") {
    ctx.fillStyle = "#fca5a5";
    ctx.fillRect(px + ts * 0.62, py + ts * 0.28, ts * 0.12, ts * 0.08);
  } else {
    ctx.fillStyle = "#fde047";
    ctx.fillRect(px + ts * 0.22, py + ts * 0.26, ts * 0.1, ts * 0.1);
    ctx.fillRect(px + ts * 0.55, py + ts * 0.26, ts * 0.1, ts * 0.1);
  }

  ctx.fillStyle = mob.spawnType === "random" ? "#f87171" : "#ef4444";
  ctx.font = `${Math.max(9, ts * 0.3)}px sans-serif`;
  ctx.textAlign = "left";
  ctx.fillText(`${mob.label} ${mob.hp}`, px, py - 3);
}

export function seedMarchesWanderers(map: RealmMapConfig): RealmWildMob[] {
  const isWalkable = createWalkableChecker(map);
  const seeds: RealmWildMob[] = [];
  const tries = [
    { x: 12, y: 7 },
    { x: 18, y: 14 },
  ];
  for (const t of tries) {
    if (isWalkable(t.x, t.y)) {
      seeds.push(createWildMob("goblin", t.x, t.y, "wander"));
    }
  }
  return seeds;
}
