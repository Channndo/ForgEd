export type RealmTutorialStage =
  | "charter"
  | "creator"
  | "move"
  | "food"
  | "duel"
  | "play";

export type RealmAreaId = "ashford" | "mindspire" | "marches";

export interface RealmCharacter {
  name: string;
  body: "slim" | "standard" | "broad";
  hair: string;
  tunic: string;
  skin?: string;
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
  /** Current world area */
  currentArea: RealmAreaId;
  /** Tile position within current area */
  playerPosition: { x: number; y: number };
  /** Areas the player has entered at least once */
  areasDiscovered: RealmAreaId[];
  /** Tome interactable IDs collected in Mindspire */
  tomesCollected: string[];
  /** Remaining HP for combat interactables (dummy, goblins) */
  interactableHp: Record<string, number>;
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
  currentArea: "ashford",
  playerPosition: { x: 6, y: 9 },
  areasDiscovered: ["ashford"],
  tomesCollected: [],
  interactableHp: {},
};
