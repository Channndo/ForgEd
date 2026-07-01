import { ASHFORD_MAP } from "./ashford";
import { MINDSPIRE_MAP } from "./mindspire";
import { MARCHES_MAP } from "./marches";
import type { RealmAreaId } from "../types";
import type { RealmMapConfig } from "../mapTypes";

export const REALM_MAPS: Record<RealmAreaId, RealmMapConfig> = {
  ashford: ASHFORD_MAP,
  mindspire: MINDSPIRE_MAP,
  marches: MARCHES_MAP,
};

export function getRealmMap(areaId: RealmAreaId): RealmMapConfig {
  return REALM_MAPS[areaId];
}

export const ALL_REALM_AREAS = Object.values(REALM_MAPS);
