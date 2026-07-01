/** Tile IDs shared across all realm maps. */
export const TILE = {
  GRASS: 0,
  PATH: 1,
  WALL: 2,
  WATER: 3,
  ARENA: 4,
  TREE: 5,
  ROCK: 6,
  SAND: 7,
  BRIDGE: 8,
  FLOOR: 9,
} as const;

export type TileId = (typeof TILE)[keyof typeof TILE];

export const TILE_COLORS: Record<number, string> = {
  [TILE.GRASS]: "#2d4a2d",
  [TILE.PATH]: "#5c4a32",
  [TILE.WALL]: "#1a1a1e",
  [TILE.WATER]: "#1e3a5f",
  [TILE.ARENA]: "#4a3a2a",
  [TILE.TREE]: "#2d4a2d",
  [TILE.ROCK]: "#2d4a2d",
  [TILE.SAND]: "#6b5a3a",
  [TILE.BRIDGE]: "#7a6548",
  [TILE.FLOOR]: "#3a3a42",
};

const BLOCKED = new Set<number>([TILE.WALL, TILE.WATER, TILE.TREE, TILE.ROCK]);

export function isTileWalkable(tileId: number): boolean {
  return !BLOCKED.has(tileId);
}

export function drawTile(
  ctx: CanvasRenderingContext2D,
  tileId: number,
  px: number,
  py: number,
  ts: number
) {
  const pad = 1;
  const w = ts - pad;
  const h = ts - pad;

  ctx.fillStyle = TILE_COLORS[tileId] ?? "#333";
  ctx.fillRect(px, py, w, h);

  switch (tileId) {
    case TILE.GRASS:
      ctx.fillStyle = "rgba(255,255,255,0.04)";
      if ((px + py) % 17 < 4) ctx.fillRect(px + ts * 0.3, py + ts * 0.4, 2, 2);
      break;
    case TILE.PATH:
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(px, py + h * 0.45, w, 1);
      break;
    case TILE.WATER:
      ctx.fillStyle = "rgba(100,180,255,0.15)";
      ctx.fillRect(px + 2, py + ts * 0.35, w - 4, ts * 0.12);
      ctx.fillRect(px + 4, py + ts * 0.6, w - 8, ts * 0.1);
      break;
    case TILE.ARENA:
      ctx.strokeStyle = "rgba(212,175,55,0.25)";
      ctx.strokeRect(px + 2, py + 2, w - 3, h - 3);
      break;
    case TILE.TREE:
      ctx.fillStyle = "#3d2817";
      ctx.fillRect(px + ts * 0.42, py + ts * 0.55, ts * 0.16, ts * 0.38);
      ctx.fillStyle = "#1f5c28";
      ctx.beginPath();
      ctx.arc(px + ts / 2, py + ts * 0.38, ts * 0.32, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#2a7a35";
      ctx.beginPath();
      ctx.arc(px + ts * 0.38, py + ts * 0.32, ts * 0.18, 0, Math.PI * 2);
      ctx.fill();
      break;
    case TILE.ROCK:
      ctx.fillStyle = "#4a4a52";
      ctx.beginPath();
      ctx.ellipse(px + ts / 2, py + ts * 0.62, ts * 0.28, ts * 0.2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#6b6b75";
      ctx.beginPath();
      ctx.ellipse(px + ts * 0.42, py + ts * 0.55, ts * 0.12, ts * 0.08, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    case TILE.SAND:
      ctx.fillStyle = "rgba(255,220,150,0.06)";
      if ((px * 3 + py) % 13 < 3) ctx.fillRect(px + ts * 0.2, py + ts * 0.25, 3, 2);
      break;
    case TILE.BRIDGE:
      ctx.fillStyle = "#5a4632";
      for (let i = 0; i < 3; i++) {
        ctx.fillRect(px + ts * 0.15, py + ts * (0.2 + i * 0.25), w * 0.7, ts * 0.06);
      }
      break;
    case TILE.FLOOR:
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.strokeRect(px + 1, py + 1, w - 1, h - 1);
      break;
    default:
      break;
  }
}

export function drawPortal(
  ctx: CanvasRenderingContext2D,
  px: number,
  py: number,
  ts: number,
  label: string
) {
  const cx = px + ts / 2;
  const cy = py + ts / 2;
  ctx.fillStyle = "rgba(212,175,55,0.35)";
  ctx.beginPath();
  ctx.arc(cx, cy, ts * 0.32, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(212,175,55,0.8)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, ts * 0.32, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = "#fbbf24";
  ctx.font = `bold ${Math.max(8, ts * 0.22)}px sans-serif`;
  ctx.textAlign = "center";
  ctx.fillText("⇄", cx, cy + ts * 0.08);
  ctx.fillStyle = "#e5e5e5";
  ctx.font = `${Math.max(7, ts * 0.18)}px sans-serif`;
  ctx.fillText(label, cx, py - 3);
}
