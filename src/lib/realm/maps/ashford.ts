import type { RealmMapConfig } from "../mapTypes";
import { mapFindPath } from "../mapTypes";
import { TILE } from "../tiles";

const { GRASS, PATH, WALL, WATER, ARENA, TREE, ROCK, BRIDGE } = TILE;

export const ASHFORD_MAP: RealmMapConfig = {
  id: "ashford",
  name: "Ashford",
  subtitle: "Starter town — lanterns, bread, and duels",
  mapW: 26,
  mapH: 20,
  playerSpawn: { x: 6, y: 9 },
  tiles: [
    [WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL],
    [WALL, TREE, GRASS, GRASS, PATH, PATH, PATH, GRASS, GRASS, GRASS, GRASS, GRASS, PATH, PATH, PATH, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, TREE, WALL],
    [WALL, GRASS, GRASS, PATH, PATH, PATH, PATH, PATH, GRASS, GRASS, GRASS, PATH, PATH, PATH, PATH, PATH, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL],
    [WALL, GRASS, PATH, PATH, PATH, PATH, PATH, PATH, PATH, GRASS, PATH, PATH, PATH, PATH, PATH, PATH, PATH, GRASS, GRASS, ARENA, ARENA, GRASS, GRASS, GRASS, GRASS, WALL],
    [WALL, GRASS, GRASS, PATH, PATH, GRASS, GRASS, PATH, PATH, PATH, PATH, PATH, GRASS, GRASS, PATH, PATH, GRASS, GRASS, ARENA, ARENA, ARENA, GRASS, GRASS, GRASS, GRASS, WALL],
    [WALL, GRASS, GRASS, GRASS, PATH, GRASS, GRASS, GRASS, PATH, PATH, PATH, GRASS, GRASS, GRASS, PATH, GRASS, GRASS, GRASS, ARENA, ARENA, ARENA, GRASS, GRASS, GRASS, GRASS, WALL],
    [WALL, GRASS, GRASS, GRASS, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, PATH, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, PATH, PATH, PATH, GRASS, WALL],
    [WALL, GRASS, GRASS, GRASS, GRASS, GRASS, PATH, PATH, PATH, PATH, PATH, PATH, PATH, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, PATH, PATH, PATH, GRASS, WALL],
    [WALL, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, PATH, PATH, PATH, PATH, PATH, GRASS, GRASS, GRASS, WATER, WATER, WATER, GRASS, GRASS, GRASS, PATH, PATH, PATH, GRASS, WALL],
    [WALL, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, PATH, PATH, PATH, GRASS, GRASS, GRASS, WATER, WATER, WATER, WATER, WATER, GRASS, GRASS, PATH, PATH, PATH, GRASS, WALL],
    [WALL, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, PATH, GRASS, GRASS, GRASS, GRASS, GRASS, WATER, WATER, WATER, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL],
    [WALL, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL],
    [WALL, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL],
    [WALL, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL],
    [WALL, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL],
    [WALL, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL],
    [WALL, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL],
    [WALL, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL],
    [WALL, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, GRASS, WALL],
    [WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL],
  ],
  lanterns: [
    { id: 1, x: 5, y: 8 },
    { id: 2, x: 11, y: 7 },
    { id: 3, x: 15, y: 8 },
    { id: 4, x: 9, y: 10 },
    { id: 5, x: 13, y: 11 },
  ],
  npcs: [
    {
      id: "reginald",
      name: "Sir Reginald Failsworth",
      x: 9,
      y: 6,
      color: "#9ca3af",
      lines: [
        "Ah! A fresh victim—I mean adventurer.",
        "Click or tap the ground to walk. Walk the five lantern posts to learn the square.",
        "North leads to Mindspire. East crosses the bridge to The Marches. Betty has bread.",
      ],
    },
    {
      id: "betty",
      name: "Betty the Baker",
      x: 15,
      y: 6,
      color: "#d4af37",
      lines: [
        "You look underfed. Everyone does.",
        "Hit the training dummy near the arena. Then eat bread. Tap Eat on mobile.",
        "Once you've dueled Crisp, explore Mindspire or brave The Marches.",
      ],
    },
    {
      id: "crisp",
      name: "Duel Master Crisp",
      x: 20,
      y: 5,
      color: "#c9a962",
      lines: [
        "Duels are consent. The Marches are not.",
        "Tap me and choose Duel when you're ready to lose dignity safely.",
      ],
    },
    {
      id: "nobby",
      name: "Wilderness Guard Nobby",
      x: 4,
      y: 14,
      color: "#6b7280",
      lines: [
        "East across the bridge: The Marches. Goblins, sand, and bad decisions.",
        "The Marches take valuables someday. For now they take HP. I warned you.",
      ],
    },
    {
      id: "mira",
      name: "Guide Mira",
      x: 12,
      y: 3,
      color: "#7c9cbf",
      lines: [
        "Mindspire is the academy north of town — tomes, runes, and scholars who judge your shoes.",
        "Step on the golden portal north of the square when you're ready to travel.",
      ],
    },
  ],
  portals: [
    {
      id: "ashford-to-mindspire",
      x: 12,
      y: 2,
      targetArea: "mindspire",
      targetSpawn: { x: 12, y: 17 },
      label: "Mindspire",
    },
    {
      id: "ashford-to-marches",
      x: 23,
      y: 8,
      targetArea: "marches",
      targetSpawn: { x: 2, y: 10 },
      label: "Marches",
    },
  ],
  interactables: [
    { id: "dummy", kind: "dummy", x: 20, y: 4, label: "Training Dummy", maxHp: 5 },
  ],
};

/** Legacy exports for any remaining imports */
export const MAP_W = ASHFORD_MAP.mapW;
export const MAP_H = ASHFORD_MAP.mapH;
export const ASHFORD_TILES = ASHFORD_MAP.tiles;
export const PLAYER_SPAWN = ASHFORD_MAP.playerSpawn;
export const LANTERNS = ASHFORD_MAP.lanterns ?? [];
export const ASHFORD_NPCS = ASHFORD_MAP.npcs;

export function isWalkable(x: number, y: number): boolean {
  if (x < 0 || y < 0 || x >= MAP_W || y >= MAP_H) return false;
  const t = ASHFORD_TILES[y][x];
  return t !== WALL && t !== WATER && t !== TREE && t !== ROCK;
}

export function findPath(
  start: { x: number; y: number },
  goal: { x: number; y: number }
): { x: number; y: number }[] {
  return mapFindPath(ASHFORD_MAP, start, goal);
}
