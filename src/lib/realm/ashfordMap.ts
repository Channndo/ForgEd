/** @deprecated Import from `@/lib/realm/maps/ashford` or `@/lib/realm/maps/registry` */
export {
  ASHFORD_MAP,
  MAP_W,
  MAP_H,
  ASHFORD_TILES,
  PLAYER_SPAWN,
  LANTERNS,
  ASHFORD_NPCS,
  isWalkable,
} from "./maps/ashford";

import { mapFindPath } from "./mapTypes";
import { ASHFORD_MAP } from "./maps/ashford";

/** @deprecated Use mapFindPath with a RealmMapConfig */
export function findPath(
  start: { x: number; y: number },
  goal: { x: number; y: number }
): { x: number; y: number }[] {
  return mapFindPath(ASHFORD_MAP, start, goal);
}
