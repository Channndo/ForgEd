import { findPath } from "./pathfinding";
import type { RealmAreaId, RealmNpc } from "./types";

export interface RealmLantern {
  id: number;
  x: number;
  y: number;
}

export interface RealmPortal {
  id: string;
  x: number;
  y: number;
  targetArea: RealmAreaId;
  targetSpawn: { x: number; y: number };
  label: string;
}

export interface RealmInteractable {
  id: string;
  kind: "dummy" | "goblin" | "tome";
  x: number;
  y: number;
  label: string;
  maxHp?: number;
}

export interface RealmMapConfig {
  id: RealmAreaId;
  name: string;
  subtitle: string;
  mapW: number;
  mapH: number;
  tiles: number[][];
  playerSpawn: { x: number; y: number };
  npcs: RealmNpc[];
  lanterns?: RealmLantern[];
  portals: RealmPortal[];
  interactables: RealmInteractable[];
  /** Wilderness-style area — show skull icon in HUD */
  isWilderness?: boolean;
}

export function createWalkableChecker(map: RealmMapConfig) {
  return (x: number, y: number): boolean => {
    if (x < 0 || y < 0 || x >= map.mapW || y >= map.mapH) return false;
    const t = map.tiles[y][x];
    return t !== 2 && t !== 3 && t !== 5 && t !== 6;
  };
}

export function mapFindPath(
  map: RealmMapConfig,
  start: { x: number; y: number },
  goal: { x: number; y: number }
): { x: number; y: number }[] {
  const isWalkable = createWalkableChecker(map);
  return findPath(map.tiles, map.mapW, map.mapH, isWalkable, start, goal);
}
