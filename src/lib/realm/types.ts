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
  skin?: string;
}

/** Skills are stored as cumulative XP. */
export interface RealmSkills {
  attack: number;
  strength: number;
  defence: number;
  hitpoints: number;
  woodcutting: number;
  fishing: number;
  cooking: number;
}

export interface RealmQuestState {
  accepted: boolean;
  count: number;
  done: boolean;
}

export type RealmAttackStyle = "accurate" | "aggressive" | "defensive";

export interface RealmItem {
  id: string;
  qty: number;
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
  skills: RealmSkills;
  attackStyle: RealmAttackStyle;
  inventory: RealmItem[];
  kills: number;
  currentZone: string;
  questProgress: Record<string, RealmQuestState>;
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
  // Hitpoints starts at level 10 (1154 XP), RuneScape-style; others at level 1.
  skills: {
    attack: 0,
    strength: 0,
    defence: 0,
    hitpoints: 1154,
    woodcutting: 0,
    fishing: 0,
    cooking: 0,
  },
  attackStyle: "aggressive",
  inventory: [
    { id: "coins", qty: 25 },
    { id: "bread", qty: 5 },
  ],
  kills: 0,
  currentZone: "ashford",
  questProgress: {},
};
