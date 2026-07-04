import type { RealmQuestState, RealmSave, RealmSkills } from "./types";
import { addItemToInventory, inventoryCount, removeItemFromInventory } from "./combat";

export interface RealmQuest {
  id: string;
  name: string;
  giver: string;
  blurb: string;
  kind: "kill" | "collect";
  /** enemy type for kill quests, item id for collect quests */
  targetId: string;
  targetLabel: string;
  count: number;
  rewardCoins: number;
  rewardItems?: { id: string; qty: number }[];
  rewardXp?: { skill: keyof RealmSkills; amount: number }[];
  acceptLine: string;
  completeLine: string;
}

export const REALM_QUESTS: RealmQuest[] = [
  {
    id: "rat-stew",
    name: "Rat Stew",
    giver: "betty",
    blurb: "Betty's stew keeps acquiring rats. Remove 5 of them from the south field. Permanently.",
    kind: "kill",
    targetId: "rat",
    targetLabel: "Giant Rats",
    count: 5,
    rewardCoins: 40,
    rewardItems: [{ id: "bread", qty: 3 }],
    rewardXp: [{ skill: "cooking", amount: 150 }],
    acceptLine: "Betty hands you a rolling pin. You politely decline and keep your sword.",
    completeLine: "\"Five fewer rats. The stew thanks you. The stew is mostly rat-free now.\"",
  },
  {
    id: "goblin-ledger",
    name: "The Goblin Ledger",
    giver: "reginald",
    blurb: "Goblins keep a ledger of everything they've stolen. Sir Reginald wants 3 pages. For legal reasons.",
    kind: "collect",
    targetId: "ledger_page",
    targetLabel: "Ledger Pages",
    count: 3,
    rewardCoins: 200,
    rewardXp: [{ skill: "attack", amount: 300 }],
    acceptLine: "\"Goblins drop the pages when defeated. Reading their handwriting is its own punishment.\"",
    completeLine: "\"Excellent. According to page two, they owe me a chicken. Justice at last.\"",
  },
  {
    id: "king-of-grime",
    name: "King of Grime",
    giver: "nobby",
    blurb: "The Goblin King rules Grimheart Cave, southeast of the Marches. Nobby would like him to stop.",
    kind: "kill",
    targetId: "goblin_king",
    targetLabel: "The Goblin King",
    count: 1,
    rewardCoins: 500,
    rewardItems: [{ id: "steel_sword", qty: 1 }],
    rewardXp: [{ skill: "strength", amount: 500 }],
    acceptLine: "\"Bring food. And a will. Not a will to live — a legal will.\"",
    completeLine: "\"You actually did it. I owe the lads at the gate an apology and several coins.\"",
  },
];

export function getQuest(id: string): RealmQuest | undefined {
  return REALM_QUESTS.find((q) => q.id === id);
}

export function questsForGiver(npcId: string): RealmQuest[] {
  return REALM_QUESTS.filter((q) => q.giver === npcId);
}

export function questState(save: RealmSave, questId: string): RealmQuestState {
  return save.questProgress[questId] ?? { accepted: false, count: 0, done: false };
}

export function questProgressCount(save: RealmSave, quest: RealmQuest): number {
  if (quest.kind === "collect") {
    return Math.min(quest.count, inventoryCount(save.inventory, quest.targetId));
  }
  return Math.min(quest.count, questState(save, quest.id).count);
}

export function canCompleteQuest(save: RealmSave, quest: RealmQuest): boolean {
  const st = questState(save, quest.id);
  return st.accepted && !st.done && questProgressCount(save, quest) >= quest.count;
}

export function acceptQuest(save: RealmSave, quest: RealmQuest): RealmSave {
  return {
    ...save,
    questProgress: {
      ...save.questProgress,
      [quest.id]: { accepted: true, count: 0, done: false },
    },
  };
}

export function completeQuest(save: RealmSave, quest: RealmQuest): RealmSave {
  let inventory = save.inventory;
  if (quest.kind === "collect") {
    inventory = removeItemFromInventory(inventory, quest.targetId, quest.count);
  }
  if (quest.rewardCoins > 0) {
    inventory = addItemToInventory(inventory, "coins", quest.rewardCoins);
  }
  for (const item of quest.rewardItems ?? []) {
    inventory = addItemToInventory(inventory, item.id, item.qty);
  }
  const skills = { ...save.skills };
  for (const xp of quest.rewardXp ?? []) {
    skills[xp.skill] += xp.amount;
  }
  return {
    ...save,
    inventory,
    skills,
    questProgress: {
      ...save.questProgress,
      [quest.id]: { accepted: true, count: questState(save, quest.id).count, done: true },
    },
  };
}

export function describeQuestRewards(quest: RealmQuest): string {
  const parts: string[] = [];
  if (quest.rewardCoins > 0) parts.push(`${quest.rewardCoins} coins`);
  for (const item of quest.rewardItems ?? []) {
    parts.push(`${item.qty > 1 ? `${item.qty}× ` : ""}${item.id.replace(/_/g, " ")}`);
  }
  for (const xp of quest.rewardXp ?? []) {
    parts.push(`${xp.amount} ${xp.skill} xp`);
  }
  return parts.join(" · ");
}
