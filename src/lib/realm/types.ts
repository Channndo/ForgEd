export type RealmTutorialStage =
  | "charter"
  | "creator"
  | "move"
  | "food"
  | "duel"
  | "play";

export interface RealmCharacter {
  name: string;
  body: "slim" | "standard" | "broad";
  hair: string;
  tunic: string;
}

export interface RealmSave {
  charterAccepted: boolean;
  character: RealmCharacter | null;
  tutorialStage: RealmTutorialStage;
  lanternsVisited: number[];
  ateBread: boolean;
  duelDone: boolean;
  playerHp: number;
  playerMaxHp: number;
  combatLevel: number;
}

export interface RealmNpc {
  id: string;
  name: string;
  x: number;
  y: number;
  color: string;
  lines: string[];
}

export const DEFAULT_REALM_SAVE: RealmSave = {
  charterAccepted: false,
  character: null,
  tutorialStage: "charter",
  lanternsVisited: [],
  ateBread: false,
  duelDone: false,
  playerHp: 10,
  playerMaxHp: 10,
  combatLevel: 3,
};
