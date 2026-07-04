"use client";

import { useCallback, useEffect, useRef } from "react";
import { LANTERNS } from "@/lib/realm/ashfordMap";
import type { RealmNpc, RealmSave, RealmSkills } from "@/lib/realm/types";
import { writeRealmSave } from "@/lib/realm/storage";
import { drawAvatar } from "@/lib/realm/drawAvatar";
import {
  addItemToInventory,
  ENEMIES,
  FOOD_PRIORITY,
  itemDef,
  rollDrops,
} from "@/lib/realm/combat";
import {
  getZone,
  zoneAdjacentTo,
  zoneFindPath,
  type Zone,
} from "@/lib/realm/zones";
import { REALM_QUESTS, questState } from "@/lib/realm/quests";
import {
  combatLevel,
  levelForXp,
  maxHp as calcMaxHp,
  rollAttack,
} from "@/lib/realm/skills";
import { RealmSound } from "@/lib/realm/sound";

const MOVE_MS = 150; // ms per tile
const ATTACK_TICK_MS = 650;
const GATHER_TICK_MS = 1200;
const DUMMY_TILE = { x: 18, y: 3 };

interface RtEnemy {
  id: string;
  type: string;
  x: number;
  y: number;
  hp: number;
  maxHp: number;
  alive: boolean;
  respawnAt: number;
  lunge: number;
}

interface Ground {
  id: string;
  qty: number;
  x: number;
  y: number;
}

interface Effect {
  x: number;
  y: number;
  text: string;
  color: string;
  ttl: number;
  max: number;
  vy: number;
}

type GatherKind = "tree" | "fish" | "fire";

interface RealmWorldProps {
  save: RealmSave;
  onSave: (save: RealmSave) => void;
  onDialogue: (npc: RealmNpc) => void;
  onToast: (msg: string) => void;
}

function initEnemies(zone: Zone): RtEnemy[] {
  return zone.spawns.map((s) => {
    const def = ENEMIES[s.type];
    return {
      id: s.id,
      type: s.type,
      x: s.x,
      y: s.y,
      hp: def.maxHp,
      maxHp: def.maxHp,
      alive: true,
      respawnAt: 0,
      lunge: 0,
    };
  });
}

export function RealmWorld({ save, onSave, onDialogue, onToast }: RealmWorldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const saveRef = useRef(save);
  const onSaveRef = useRef(onSave);
  const onToastRef = useRef(onToast);
  const onDialogueRef = useRef(onDialogue);
  useEffect(() => {
    saveRef.current = save;
  }, [save]);
  useEffect(() => {
    onSaveRef.current = onSave;
    onToastRef.current = onToast;
    onDialogueRef.current = onDialogue;
  }, [onSave, onToast, onDialogue]);

  const zoneRef = useRef<Zone>(getZone(save.currentZone));
  const playerTileRef = useRef({ ...zoneRef.current.spawn });
  const playerPixRef = useRef({ ...zoneRef.current.spawn });
  const pathRef = useRef<{ x: number; y: number }[]>([]);
  const targetRef = useRef<{ x: number; y: number } | null>(null);
  const lastTileRef = useRef("");
  const combatTargetRef = useRef<string | null>(null);
  const attackAccRef = useRef(0);
  const gatherRef = useRef<{ kind: GatherKind; x: number; y: number } | null>(null);
  const gatherAccRef = useRef(0);
  const playerLungeRef = useRef(0);
  const enemiesRef = useRef<RtEnemy[]>(initEnemies(zoneRef.current));
  const groundRef = useRef<Ground[]>([]);
  const effectsRef = useRef<Effect[]>([]);
  const treeDepletedRef = useRef<Map<string, number>>(new Map());
  const dummyHpRef = useRef(5);

  const tileSizeRef = useRef(32);
  const offsetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef(0);

  const spawnEffect = (x: number, y: number, text: string, color: string, ttl = 900, vy = 1.1) => {
    effectsRef.current.push({ x, y, text, color, ttl, max: ttl, vy });
  };

  const persist = useCallback((patch: Partial<RealmSave>) => {
    const next = { ...saveRef.current, ...patch };
    saveRef.current = next;
    writeRealmSave(next);
    onSaveRef.current(next);
  }, []);

  const awardSkillXp = (skill: keyof RealmSkills, amount: number, extraHpXp = 0) => {
    const s = saveRef.current;
    const skills: RealmSkills = { ...s.skills };
    const before = levelForXp(skills[skill]);
    const beforeHp = levelForXp(skills.hitpoints);
    skills[skill] += amount;
    if (extraHpXp > 0) skills.hitpoints += extraHpXp;
    const after = levelForXp(skills[skill]);
    const afterHp = levelForXp(skills.hitpoints);

    const newMaxHp = calcMaxHp(skills);
    const patch: Partial<RealmSave> = {
      skills,
      playerMaxHp: newMaxHp,
      combatLevel: combatLevel(skills),
    };

    spawnEffect(playerPixRef.current.x + 0.5, playerPixRef.current.y - 0.3, `+${amount} xp`, "#fbbf24", 1000, 1.3);

    if (after > before || afterHp > beforeHp) {
      RealmSound.levelUp();
      if (afterHp > beforeHp) {
        patch.playerHp = Math.min(newMaxHp, s.playerHp + (afterHp - beforeHp));
      }
      const which = after > before ? skill : "hitpoints";
      const lvl = which === skill ? after : afterHp;
      onToastRef.current(`Level up! ${String(which)[0].toUpperCase()}${String(which).slice(1)} is now ${lvl}.`);
      spawnEffect(playerPixRef.current.x + 0.5, playerPixRef.current.y - 1, "LEVEL UP", "#34d399", 1600, 0.8);
    }
    persist(patch);
  };

  const awardCombatXp = (baseXp: number) => {
    const s = saveRef.current;
    const styled: keyof RealmSkills =
      s.attackStyle === "accurate" ? "attack" : s.attackStyle === "defensive" ? "defence" : "strength";
    awardSkillXp(styled, baseXp, Math.round(baseXp / 3));
  };

  const equipmentBonus = () => {
    const s = saveRef.current;
    let atk = 0;
    let str = 0;
    let shield = 0;
    for (const it of s.inventory) {
      const def = itemDef(it.id);
      if ((def.weaponAttack ?? 0) + (def.weaponStrength ?? 0) > atk + str) {
        atk = def.weaponAttack ?? 0;
        str = def.weaponStrength ?? 0;
      }
      if ((def.shieldDefence ?? 0) > shield) shield = def.shieldDefence ?? 0;
    }
    return { atk, str, shield };
  };

  const recordQuestKill = (enemyType: string) => {
    const s = saveRef.current;
    let questProgress = s.questProgress;
    let changed = false;
    for (const q of REALM_QUESTS) {
      if (q.kind !== "kill" || q.targetId !== enemyType) continue;
      const st = questState(s, q.id);
      if (!st.accepted || st.done || st.count >= q.count) continue;
      const count = st.count + 1;
      questProgress = { ...questProgress, [q.id]: { ...st, count } };
      changed = true;
      if (count >= q.count) {
        onToastRef.current(`${q.name}: done! Return to ${q.giver === "betty" ? "Betty" : q.giver === "nobby" ? "Nobby" : "Sir Reginald"}.`);
      } else {
        spawnEffect(playerPixRef.current.x + 0.5, playerPixRef.current.y - 0.7, `${q.name}: ${count}/${q.count}`, "#a5b4fc", 1200, 0.9);
      }
    }
    if (changed) persist({ questProgress });
  };

  const changeZone = (toId: string, tx: number, ty: number) => {
    const zone = getZone(toId);
    zoneRef.current = zone;
    enemiesRef.current = initEnemies(zone);
    groundRef.current = [];
    effectsRef.current = [];
    combatTargetRef.current = null;
    gatherRef.current = null;
    pathRef.current = [];
    targetRef.current = null;
    playerTileRef.current = { x: tx, y: ty };
    playerPixRef.current = { x: tx, y: ty };
    lastTileRef.current = `${tx},${ty}`;
    treeDepletedRef.current.clear();
    persist({ currentZone: toId });
    if (zone.dangerous) {
      onToastRef.current(`Entering ${zone.name}. Dying here costs half your coins.`);
    } else {
      onToastRef.current(`Welcome to ${zone.name}.`);
    }
  };

  const dropLoot = (e: RtEnemy) => {
    const def = ENEMIES[e.type];
    for (const d of rollDrops(def)) {
      groundRef.current.push({ id: d.id, qty: d.qty, x: e.x, y: e.y });
    }
  };

  const pickUp = (tileX: number, tileY: number) => {
    const remaining: Ground[] = [];
    let inv = saveRef.current.inventory;
    let picked = false;
    let pickedCoins = false;
    for (const g of groundRef.current) {
      if (g.x === tileX && g.y === tileY) {
        inv = addItemToInventory(inv, g.id, g.qty);
        const def = itemDef(g.id);
        spawnEffect(tileX + 0.5, tileY, `+${g.qty} ${def.name}`, def.color, 900, 1.2);
        picked = true;
        if (g.id === "coins") pickedCoins = true;
      } else {
        remaining.push(g);
      }
    }
    if (picked) {
      groundRef.current = remaining;
      if (pickedCoins) RealmSound.coin();
      else RealmSound.pickup();
      persist({ inventory: inv });
    }
  };

  const onStepTile = (tile: { x: number; y: number }) => {
    const zone = zoneRef.current;
    const s = saveRef.current;

    // portals
    const portal = zone.portals.find((p) => p.x === tile.x && p.y === tile.y);
    if (portal) {
      changeZone(portal.to, portal.toX, portal.toY);
      return;
    }

    // lantern tutorial (Ashford only)
    if (zone.id === "ashford") {
      const lantern = LANTERNS.find((l) => l.x === tile.x && l.y === tile.y);
      if (lantern && s.tutorialStage === "move" && !s.lanternsVisited.includes(lantern.id)) {
        const visited = [...s.lanternsVisited, lantern.id];
        RealmSound.pickup();
        if (visited.length >= 5) {
          onToastRef.current("Lantern path complete. Fight rats and goblins in the south field!");
          persist({ lanternsVisited: visited, tutorialStage: "food" });
        } else {
          persist({ lanternsVisited: visited });
        }
      }
    }

    if (groundRef.current.some((g) => g.x === tile.x && g.y === tile.y)) {
      pickUp(tile.x, tile.y);
    }
  };

  const handleDeath = () => {
    const zone = zoneRef.current;
    const s = saveRef.current;
    combatTargetRef.current = null;
    let inventory = s.inventory;
    let msg = "You were defeated! You wake up in Ashford.";
    if (zone.dangerous) {
      const coins = inventory.find((i) => i.id === "coins")?.qty ?? 0;
      const lost = Math.floor(coins / 2);
      if (lost > 0) {
        inventory = inventory
          .map((i) => (i.id === "coins" ? { ...i, qty: i.qty - lost } : i))
          .filter((i) => i.qty > 0);
        msg = `You were defeated! The ${zone.name} claimed ${lost} coins. You wake up in Ashford.`;
      }
    }
    persist({
      inventory,
      playerHp: Math.max(3, Math.floor(s.playerMaxHp / 2)),
    });
    onToastRef.current(msg);
    changeZone("ashford", getZone("ashford").spawn.x, getZone("ashford").spawn.y);
  };

  const doGatherTick = () => {
    const g = gatherRef.current;
    if (!g) return;
    const s = saveRef.current;
    const key = `${g.x},${g.y}`;

    if (g.kind === "tree") {
      const until = treeDepletedRef.current.get(key) ?? 0;
      if (until > performance.now()) {
        gatherRef.current = null;
        return;
      }
      const lvl = levelForXp(s.skills.woodcutting);
      if (Math.random() < Math.min(0.9, 0.5 + lvl * 0.01)) {
        RealmSound.chop();
        persist({ inventory: addItemToInventory(s.inventory, "logs", 1) });
        spawnEffect(g.x + 0.5, g.y + 0.2, "+1 Logs", "#926a3e", 900, 1.1);
        awardSkillXp("woodcutting", 25);
        if (Math.random() < 0.3) {
          treeDepletedRef.current.set(key, performance.now() + 8000);
          gatherRef.current = null;
          onToastRef.current("The tree falls over. It'll grow back. Trees are resilient like that.");
        }
      } else {
        spawnEffect(g.x + 0.5, g.y + 0.2, "swing…", "#9ca3af", 700, 0.8);
      }
      return;
    }

    if (g.kind === "fish") {
      const lvl = levelForXp(s.skills.fishing);
      if (Math.random() < Math.min(0.9, 0.45 + lvl * 0.012)) {
        RealmSound.splash();
        persist({ inventory: addItemToInventory(s.inventory, "raw_fish", 1) });
        spawnEffect(g.x + 0.5, g.y + 0.2, "+1 Raw Trout", "#7dd3fc", 900, 1.1);
        awardSkillXp("fishing", 30);
      } else {
        spawnEffect(g.x + 0.5, g.y + 0.2, "splash…", "#60a5fa", 700, 0.8);
      }
      return;
    }

    // fire: cook one raw item per tick
    const raw = s.inventory.find((i) => (i.id === "raw_meat" || i.id === "raw_fish") && i.qty > 0);
    if (!raw) {
      gatherRef.current = null;
      onToastRef.current("Nothing raw left to cook.");
      return;
    }
    const lvl = levelForXp(s.skills.cooking);
    const burnChance = Math.max(0.05, 0.45 - lvl * 0.015);
    let inv = saveRef.current.inventory;
    inv = inv
      .map((i) => (i.id === raw.id ? { ...i, qty: i.qty - 1 } : i))
      .filter((i) => i.qty > 0);
    if (Math.random() < burnChance) {
      inv = addItemToInventory(inv, "burnt_food", 1);
      spawnEffect(g.x + 0.5, g.y + 0.2, "Burnt!", "#78716c", 900, 1);
      persist({ inventory: inv });
    } else {
      const cooked = raw.id === "raw_fish" ? "cooked_fish" : "cooked_meat";
      inv = addItemToInventory(inv, cooked, 1);
      RealmSound.cook();
      spawnEffect(g.x + 0.5, g.y + 0.2, `+1 ${itemDef(cooked).name}`, itemDef(cooked).color, 900, 1.1);
      persist({ inventory: inv });
      awardSkillXp("cooking", 30);
    }
  };

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const zone = zoneRef.current;
    const mapH = zone.tiles.length;
    const mapW = zone.tiles[0].length;

    const dpr = window.devicePixelRatio || 1;
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const tile = Math.floor(Math.min(w / mapW, h / mapH));
    const ts = Math.max(tile, 16);
    tileSizeRef.current = ts;
    offsetRef.current = { x: (w - ts * mapW) / 2, y: (h - ts * mapH) / 2 };
    const { x: ox, y: oy } = offsetRef.current;
    const s = saveRef.current;
    const now = performance.now();

    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, w, h);

    for (let y = 0; y < mapH; y++) {
      for (let x = 0; x < mapW; x++) {
        const t = zone.tiles[y][x];
        ctx.fillStyle = zone.palette[t] ?? "#333";
        ctx.fillRect(ox + x * ts, oy + y * ts, ts - 1, ts - 1);
        if ((x + y) % 2 === 0 && t !== 2) {
          ctx.fillStyle = "rgba(0,0,0,0.07)";
          ctx.fillRect(ox + x * ts, oy + y * ts, ts - 1, ts - 1);
        }
      }
    }

    // portals — pulsing gold rings
    const pulse = 0.5 + 0.5 * Math.sin(now / 300);
    for (const p of zone.portals) {
      ctx.strokeStyle = `rgba(212,175,55,${0.35 + pulse * 0.45})`;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(ox + p.x * ts + ts / 2, oy + p.y * ts + ts / 2, ts * (0.3 + pulse * 0.06), 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = "rgba(212,175,55,0.9)";
      ctx.font = `${Math.max(8, ts * 0.22)}px sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText(p.label, ox + p.x * ts + ts / 2, oy + p.y * ts - 3);
    }

    // lanterns (Ashford)
    if (zone.id === "ashford") {
      for (const lantern of LANTERNS) {
        const visited = s.lanternsVisited.includes(lantern.id);
        ctx.fillStyle = visited ? "#fbbf24" : "#92400e";
        ctx.beginPath();
        ctx.arc(ox + lantern.x * ts + ts / 2, oy + lantern.y * ts + ts / 2, ts * 0.25, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // ground items
    for (const g of groundRef.current) {
      const def = itemDef(g.id);
      ctx.fillStyle = def.color;
      ctx.beginPath();
      ctx.arc(ox + g.x * ts + ts / 2, oy + g.y * ts + ts * 0.7, ts * 0.16, 0, Math.PI * 2);
      ctx.fill();
    }

    // trees
    for (const t of zone.trees) {
      const key = `${t.x},${t.y}`;
      const depleted = (treeDepletedRef.current.get(key) ?? 0) > now;
      const cx = ox + t.x * ts + ts / 2;
      if (depleted) {
        ctx.fillStyle = "#5c4a32";
        ctx.fillRect(cx - ts * 0.12, oy + t.y * ts + ts * 0.5, ts * 0.24, ts * 0.3);
      } else {
        ctx.fillStyle = "#4a3520";
        ctx.fillRect(cx - ts * 0.08, oy + t.y * ts + ts * 0.45, ts * 0.16, ts * 0.4);
        ctx.fillStyle = zone.id === "marches" ? "#1d3a1a" : "#2f5d2a";
        ctx.beginPath();
        ctx.arc(cx, oy + t.y * ts + ts * 0.35, ts * 0.38, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,0.06)";
        ctx.beginPath();
        ctx.arc(cx - ts * 0.1, oy + t.y * ts + ts * 0.27, ts * 0.18, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // fires
    for (const f of zone.fires) {
      const flicker = 0.2 + 0.05 * Math.sin(now / 110 + f.x);
      const cx = ox + f.x * ts + ts / 2;
      const cy = oy + f.y * ts + ts * 0.6;
      ctx.fillStyle = "#7c2d12";
      ctx.fillRect(cx - ts * 0.2, cy, ts * 0.4, ts * 0.12);
      ctx.fillStyle = "#f97316";
      ctx.beginPath();
      ctx.arc(cx, cy - ts * 0.08, ts * flicker, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fde047";
      ctx.beginPath();
      ctx.arc(cx, cy - ts * 0.05, ts * flicker * 0.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // fishing spots
    for (const f of zone.fishing) {
      const ripple = ((now / 600) % 1) * ts * 0.3;
      ctx.strokeStyle = "rgba(125,211,252,0.7)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(ox + f.x * ts + ts / 2, oy + f.y * ts + ts / 2, ts * 0.12 + ripple, 0, Math.PI * 2);
      ctx.stroke();
    }

    // tutorial dummy (Ashford)
    if (
      zone.id === "ashford" &&
      dummyHpRef.current > 0 &&
      (s.tutorialStage === "food" || s.tutorialStage === "duel" || s.tutorialStage === "play")
    ) {
      ctx.fillStyle = "#78716c";
      ctx.fillRect(ox + DUMMY_TILE.x * ts + ts * 0.2, oy + DUMMY_TILE.y * ts + ts * 0.15, ts * 0.6, ts * 0.7);
      ctx.fillStyle = "#ef4444";
      ctx.font = `${Math.max(9, ts * 0.3)}px sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText(`Dummy ${dummyHpRef.current}`, ox + DUMMY_TILE.x * ts + ts / 2, oy + DUMMY_TILE.y * ts - 3);
    }

    // enemies
    for (const e of enemiesRef.current) {
      if (!e.alive) continue;
      const def = ENEMIES[e.type];
      const lx = e.lunge * 0.18;
      const px = ox + (e.x + lx * Math.sign(playerTileRef.current.x - e.x)) * ts;
      const py = oy + e.y * ts;
      drawAvatar(ctx, px, py, ts, {
        tunic: def.color,
        hair: def.boss ? "#365314" : "#2f2a22",
        skin: e.type === "skeleton" ? "#e7e5e4" : "#8a9a5b",
        body: def.boss ? "broad" : "slim",
      });
      if (def.boss) {
        // crown
        ctx.fillStyle = "#d4af37";
        const crownY = py + ts * 0.05;
        ctx.beginPath();
        ctx.moveTo(px + ts * 0.32, crownY + ts * 0.1);
        ctx.lineTo(px + ts * 0.38, crownY);
        ctx.lineTo(px + ts * 0.44, crownY + ts * 0.08);
        ctx.lineTo(px + ts * 0.5, crownY - ts * 0.02);
        ctx.lineTo(px + ts * 0.56, crownY + ts * 0.08);
        ctx.lineTo(px + ts * 0.62, crownY);
        ctx.lineTo(px + ts * 0.68, crownY + ts * 0.1);
        ctx.closePath();
        ctx.fill();
      }
      if (e.hp < e.maxHp) {
        ctx.fillStyle = "#3b0a0a";
        ctx.fillRect(px + ts * 0.15, py + ts * 0.02, ts * 0.7, 4);
        ctx.fillStyle = "#22c55e";
        ctx.fillRect(px + ts * 0.15, py + ts * 0.02, ts * 0.7 * (e.hp / e.maxHp), 4);
      }
      ctx.fillStyle = combatTargetRef.current === e.id ? "#fca5a5" : def.boss ? "#fbbf24" : "#cbd5e1";
      ctx.font = `${def.boss ? "bold " : ""}${Math.max(8, ts * 0.22)}px sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText(`${def.name} (${def.level})`, px + ts / 2, py - 2);
    }

    // npcs
    for (const npc of zone.npcs) {
      drawAvatar(ctx, ox + npc.x * ts, oy + npc.y * ts, ts, {
        tunic: npc.color,
        hair: "#3b2f25",
        skin: "#e8b88a",
      });
      ctx.fillStyle = "#e5e5e5";
      ctx.font = `${Math.max(8, ts * 0.22)}px sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText(npc.name.split(" ")[0], ox + npc.x * ts + ts / 2, oy + npc.y * ts - 2);
    }

    // player
    const char = s.character;
    const lp = playerLungeRef.current * 0.2;
    const ppx = ox + (playerPixRef.current.x + lp) * ts;
    const ppy = oy + playerPixRef.current.y * ts;
    drawAvatar(ctx, ppx, ppy, ts, {
      tunic: char?.tunic ?? "#d4af37",
      hair: char?.hair ?? "#1a1a1a",
      skin: char?.skin ?? "#e8b88a",
      body: char?.body,
    });
    ctx.fillStyle = "#f5f5f5";
    ctx.font = `bold ${Math.max(9, ts * 0.28)}px serif`;
    ctx.textAlign = "center";
    ctx.fillText(char?.name?.slice(0, 12) ?? "You", ppx + ts / 2, ppy - 4);

    const target = targetRef.current;
    if (target) {
      ctx.strokeStyle = "rgba(212,175,55,0.6)";
      ctx.lineWidth = 2;
      ctx.strokeRect(ox + target.x * ts + 2, oy + target.y * ts + 2, ts - 4, ts - 4);
    }

    // effects
    for (const fx of effectsRef.current) {
      const a = Math.max(0, fx.ttl / fx.max);
      const rise = (1 - a) * fx.vy;
      ctx.globalAlpha = a;
      ctx.fillStyle = fx.color;
      ctx.font = `bold ${Math.max(11, ts * 0.34)}px sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText(fx.text, ox + fx.x * ts, oy + (fx.y - rise) * ts);
      ctx.globalAlpha = 1;
    }
  }, []);

  // The single game loop.
  useEffect(() => {
    const loop = (ts: number) => {
      const dt = lastTsRef.current ? Math.min(64, ts - lastTsRef.current) : 16;
      lastTsRef.current = ts;
      const now = ts;
      const zone = zoneRef.current;

      // movement
      const tileRef = playerTileRef.current;
      const pix = playerPixRef.current;
      const dx = tileRef.x - pix.x;
      const dy = tileRef.y - pix.y;
      const dist = Math.abs(dx) + Math.abs(dy);
      if (dist > 0.001) {
        const move = Math.min(dt / MOVE_MS, dist);
        if (dx !== 0) pix.x += Math.sign(dx) * Math.min(Math.abs(dx), move);
        if (dy !== 0) pix.y += Math.sign(dy) * Math.min(Math.abs(dy), move);
      } else {
        pix.x = tileRef.x;
        pix.y = tileRef.y;
        const tk = `${tileRef.x},${tileRef.y}`;
        if (tk !== lastTileRef.current) {
          lastTileRef.current = tk;
          onStepTile({ ...tileRef });
        }
        const next = pathRef.current.shift();
        if (next) playerTileRef.current = next;
      }

      const idle = dist < 0.001 && pathRef.current.length === 0;

      // gathering
      if (gatherRef.current && idle) {
        const g = gatherRef.current;
        const md = Math.abs(g.x - tileRef.x) + Math.abs(g.y - tileRef.y);
        if (md <= 1) {
          gatherAccRef.current += dt;
          if (gatherAccRef.current >= GATHER_TICK_MS) {
            gatherAccRef.current = 0;
            doGatherTick();
          }
        }
      }

      // combat
      const ctId = combatTargetRef.current;
      if (ctId) {
        const e = enemiesRef.current.find((x) => x.id === ctId);
        if (!e || !e.alive) {
          combatTargetRef.current = null;
        } else {
          const md = Math.abs(e.x - tileRef.x) + Math.abs(e.y - tileRef.y);
          if (md <= 1 && dist < 0.001) {
            attackAccRef.current += dt;
            if (attackAccRef.current >= ATTACK_TICK_MS) {
              attackAccRef.current = 0;
              const def = ENEMIES[e.type];
              const { atk, str, shield } = equipmentBonus();
              const dmg = rollAttack(saveRef.current.skills, def.defence, atk, str);
              playerLungeRef.current = 1;
              if (dmg > 0) {
                e.hp -= dmg;
                RealmSound.hit();
                spawnEffect(e.x + 0.5, e.y + 0.4, `${dmg}`, "#ef4444");
              } else {
                RealmSound.miss();
                spawnEffect(e.x + 0.5, e.y + 0.4, "0", "#93c5fd");
              }
              if (e.hp <= 0) {
                e.alive = false;
                e.respawnAt = now + def.respawnMs;
                RealmSound.enemyDie();
                dropLoot(e);
                awardCombatXp(def.xp);
                persist({ kills: saveRef.current.kills + 1 });
                recordQuestKill(e.type);
                if (def.boss) {
                  spawnEffect(e.x + 0.5, e.y - 0.5, "BOSS SLAIN", "#fbbf24", 2000, 0.6);
                }
                combatTargetRef.current = null;
              } else {
                // retaliation
                e.lunge = 1;
                const defLvl = levelForXp(saveRef.current.skills.defence);
                const enemyChance = Math.max(0.2, Math.min(0.9, 0.65 - shield * 0.04 - defLvl * 0.004));
                const eHit = Math.random() < enemyChance ? Math.floor(Math.random() * (def.maxHit + 1)) : 0;
                if (eHit > 0) {
                  const newHp = Math.max(0, saveRef.current.playerHp - eHit);
                  spawnEffect(pix.x + 0.5, pix.y + 0.4, `${eHit}`, "#f97316");
                  persist({ playerHp: newHp });
                  if (newHp <= 0) handleDeath();
                } else {
                  spawnEffect(pix.x + 0.5, pix.y + 0.4, "0", "#93c5fd");
                }
              }
            }
          } else if (pathRef.current.length === 0 && dist < 0.001) {
            const adj = zoneAdjacentTo(zone, e.x, e.y, tileRef);
            if (adj) {
              pathRef.current = zoneFindPath(zone, tileRef, adj);
              targetRef.current = adj;
            }
          }
        }
      }

      // respawns
      for (const e of enemiesRef.current) {
        if (!e.alive && e.respawnAt > 0 && now >= e.respawnAt) {
          const spawn = zone.spawns.find((sp) => sp.id === e.id);
          if (spawn) {
            e.alive = true;
            e.hp = e.maxHp;
            e.x = spawn.x;
            e.y = spawn.y;
          }
        }
      }

      // decay lunges + effects
      if (playerLungeRef.current > 0) playerLungeRef.current = Math.max(0, playerLungeRef.current - dt / 180);
      for (const e of enemiesRef.current) if (e.lunge > 0) e.lunge = Math.max(0, e.lunge - dt / 180);
      effectsRef.current = effectsRef.current.filter((fx) => {
        fx.ttl -= dt;
        return fx.ttl > 0;
      });

      draw();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    const ro = new ResizeObserver(() => draw());
    if (containerRef.current) ro.observe(containerRef.current);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const screenToTile = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const { x: ox, y: oy } = offsetRef.current;
    const ts = tileSizeRef.current;
    const zone = zoneRef.current;
    const x = Math.floor((clientX - rect.left - ox) / ts);
    const y = Math.floor((clientY - rect.top - oy) / ts);
    if (x < 0 || y < 0 || x >= zone.tiles[0].length || y >= zone.tiles.length) return null;
    return { x, y };
  };

  const walkToward = (tx: number, ty: number, exact: boolean) => {
    const zone = zoneRef.current;
    const p = playerTileRef.current;
    if (exact) {
      pathRef.current = zoneFindPath(zone, p, { x: tx, y: ty });
      targetRef.current = { x: tx, y: ty };
    } else {
      const adj = zoneAdjacentTo(zone, tx, ty, p);
      if (adj) {
        pathRef.current = zoneFindPath(zone, p, adj);
        targetRef.current = { x: tx, y: ty };
      }
    }
  };

  const handlePointer = (clientX: number, clientY: number) => {
    const tile = screenToTile(clientX, clientY);
    if (!tile) return;
    const zone = zoneRef.current;
    const p = playerTileRef.current;
    gatherRef.current = null;

    // enemy?
    const enemy = enemiesRef.current.find((e) => e.alive && e.x === tile.x && e.y === tile.y);
    if (enemy) {
      combatTargetRef.current = enemy.id;
      const md = Math.abs(enemy.x - p.x) + Math.abs(enemy.y - p.y);
      if (md > 1) walkToward(enemy.x, enemy.y, false);
      return;
    }

    // npc?
    const npc = zone.npcs.find((n) => n.x === tile.x && n.y === tile.y);
    if (npc) {
      combatTargetRef.current = null;
      const md = Math.abs(npc.x - p.x) + Math.abs(npc.y - p.y);
      if (md <= 2) onDialogueRef.current(npc);
      else {
        onToastRef.current("Move closer to talk.");
        walkToward(npc.x, npc.y, false);
      }
      return;
    }

    // tree / fire / fishing spot?
    const isTree = zone.trees.some((t) => t.x === tile.x && t.y === tile.y);
    const isFire = zone.fires.some((f) => f.x === tile.x && f.y === tile.y);
    const isFish = zone.fishing.some((f) => f.x === tile.x && f.y === tile.y);
    if (isTree || isFire || isFish) {
      combatTargetRef.current = null;
      gatherRef.current = {
        kind: isTree ? "tree" : isFire ? "fire" : "fish",
        x: tile.x,
        y: tile.y,
      };
      gatherAccRef.current = 0;
      const md = Math.abs(tile.x - p.x) + Math.abs(tile.y - p.y);
      if (md > 1) walkToward(tile.x, tile.y, false);
      onToastRef.current(
        isTree ? "You swing at the tree." : isFire ? "You start cooking." : "You cast your line."
      );
      return;
    }

    // tutorial dummy (Ashford)?
    const s = saveRef.current;
    if (
      zone.id === "ashford" &&
      tile.x === DUMMY_TILE.x &&
      tile.y === DUMMY_TILE.y &&
      dummyHpRef.current > 0 &&
      (s.tutorialStage === "food" || s.tutorialStage === "duel" || s.tutorialStage === "play")
    ) {
      const md = Math.abs(DUMMY_TILE.x - p.x) + Math.abs(DUMMY_TILE.y - p.y);
      if (md <= 1) {
        dummyHpRef.current -= 1;
        RealmSound.hit();
        spawnEffect(DUMMY_TILE.x + 0.5, DUMMY_TILE.y + 0.4, "1", "#ef4444");
        if (dummyHpRef.current <= 0) onToastRef.current("Dummy defeated. Now try real enemies in the south field!");
      } else {
        walkToward(DUMMY_TILE.x, DUMMY_TILE.y, false);
      }
      return;
    }

    // walk
    combatTargetRef.current = null;
    pathRef.current = zoneFindPath(zone, p, tile);
    targetRef.current = tile;
  };

  return (
    <div ref={containerRef} className="relative h-full w-full touch-none">
      <canvas
        ref={canvasRef}
        className="h-full w-full cursor-crosshair"
        onClick={(e) => handlePointer(e.clientX, e.clientY)}
        onTouchStart={(e) => {
          e.preventDefault();
          const t = e.changedTouches[0];
          if (t) handlePointer(t.clientX, t.clientY);
        }}
      />
      <p className="pointer-events-none absolute left-2 top-16 rounded bg-black/60 px-2 py-1 text-[10px] text-[var(--muted)] sm:text-xs">
        {typeof window !== "undefined" && "ontouchstart" in window
          ? "Tap: walk · fight · chop · fish · cook"
          : "Click: walk · fight · chop · fish · cook"}
      </p>
    </div>
  );
}

export function useRealmCombat(save: RealmSave, onSave: (s: RealmSave) => void) {
  return {
    eatBread: () => {
      const max = calcMaxHp(save.skills);
      if (save.playerHp >= max) return false;
      const foodId = FOOD_PRIORITY.find((id) =>
        save.inventory.some((i) => i.id === id && i.qty > 0)
      );
      if (!foodId) return false;
      const inventory = save.inventory
        .map((i) => (i.id === foodId ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0);
      const updated: RealmSave = {
        ...save,
        inventory,
        playerHp: Math.min(max, save.playerHp + (itemDef(foodId).heal ?? 4)),
        playerMaxHp: max,
        ateBread: true,
        tutorialStage: save.tutorialStage === "food" ? "duel" : save.tutorialStage,
      };
      RealmSound.eat();
      writeRealmSave(updated);
      onSave(updated);
      return true;
    },
    doDuel: () => {
      const updated: RealmSave = { ...save, duelDone: true, tutorialStage: "play" };
      writeRealmSave(updated);
      onSave(updated);
      return true;
    },
  };
}
