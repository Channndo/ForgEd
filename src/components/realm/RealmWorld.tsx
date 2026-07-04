"use client";

import { useCallback, useEffect, useRef } from "react";
import {
  ASHFORD_NPCS,
  ASHFORD_TILES,
  findPath,
  isWalkable,
  LANTERNS,
  MAP_H,
  MAP_W,
  PLAYER_SPAWN,
} from "@/lib/realm/ashfordMap";
import type { RealmItem, RealmNpc, RealmSave, RealmSkills } from "@/lib/realm/types";
import { writeRealmSave } from "@/lib/realm/storage";
import { drawAvatar } from "@/lib/realm/drawAvatar";
import {
  ENEMIES,
  ENEMY_SPAWNS,
  itemDef,
  rollDrops,
} from "@/lib/realm/combat";
import {
  combatLevel,
  levelForXp,
  maxHit as calcMaxHit,
  maxHp as calcMaxHp,
  rollAttack,
} from "@/lib/realm/skills";
import { RealmSound } from "@/lib/realm/sound";

const TILE_COLORS: Record<number, string> = {
  0: "#2d4a2d",
  1: "#5c4a32",
  2: "#1a1a1e",
  3: "#1e3a5f",
  4: "#4a3a2a",
};

const MOVE_MS = 150; // ms per tile
const ATTACK_TICK_MS = 650;
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

interface RealmWorldProps {
  save: RealmSave;
  onSave: (save: RealmSave) => void;
  onDialogue: (npc: RealmNpc) => void;
  onToast: (msg: string) => void;
}

function addItem(inv: RealmItem[], id: string, qty: number): RealmItem[] {
  const next = inv.map((i) => ({ ...i }));
  const existing = next.find((i) => i.id === id);
  if (existing) existing.qty += qty;
  else next.push({ id, qty });
  return next;
}

export function RealmWorld({ save, onSave, onDialogue, onToast }: RealmWorldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Synced-from-props refs so the game loop never tears down.
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

  // Runtime (non-persisted) state.
  const playerTileRef = useRef({ ...PLAYER_SPAWN });
  const playerPixRef = useRef({ x: PLAYER_SPAWN.x, y: PLAYER_SPAWN.y });
  const pathRef = useRef<{ x: number; y: number }[]>([]);
  const targetRef = useRef<{ x: number; y: number } | null>(null);
  const lastTileRef = useRef("");
  const combatTargetRef = useRef<string | null>(null);
  const attackAccRef = useRef(0);
  const playerLungeRef = useRef(0);
  const enemiesRef = useRef<RtEnemy[]>(
    ENEMY_SPAWNS.map((s) => {
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
    })
  );
  const groundRef = useRef<Ground[]>([]);
  const effectsRef = useRef<Effect[]>([]);
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

  const awardXp = (baseXp: number) => {
    const s = saveRef.current;
    const skills: RealmSkills = { ...s.skills };
    const styled =
      s.attackStyle === "accurate" ? "attack" : s.attackStyle === "defensive" ? "defence" : "strength";
    const beforeStyled = levelForXp(skills[styled]);
    const beforeHp = levelForXp(skills.hitpoints);
    skills[styled] += baseXp;
    skills.hitpoints += Math.round(baseXp / 3);
    const afterStyled = levelForXp(skills[styled]);
    const afterHp = levelForXp(skills.hitpoints);

    const newMaxHp = calcMaxHp(skills);
    let hp = s.playerHp;
    const patch: Partial<RealmSave> = {
      skills,
      playerMaxHp: newMaxHp,
      combatLevel: combatLevel(skills),
    };

    spawnEffect(playerPixRef.current.x, playerPixRef.current.y - 0.3, `+${baseXp} xp`, "#fbbf24", 1000, 1.3);

    if (afterStyled > beforeStyled || afterHp > beforeHp) {
      RealmSound.levelUp();
      if (afterHp > beforeHp) {
        hp = Math.min(newMaxHp, hp + (afterHp - beforeHp));
        patch.playerHp = hp;
      }
      const which = afterStyled > beforeStyled ? styled : "hitpoints";
      const lvl = which === "hitpoints" ? afterHp : afterStyled;
      onToastRef.current(`Level up! ${which[0].toUpperCase()}${which.slice(1)} is now ${lvl}.`);
      spawnEffect(playerPixRef.current.x, playerPixRef.current.y - 1, "LEVEL UP", "#34d399", 1600, 0.8);
    }
    persist(patch);
  };

  const playerAttackBonus = () => {
    const s = saveRef.current;
    let atk = 0;
    let str = 0;
    for (const it of s.inventory) {
      const def = itemDef(it.id);
      if (def.weaponAttack) atk = Math.max(atk, def.weaponAttack);
      if (def.weaponStrength) str = Math.max(str, def.weaponStrength);
    }
    return { atk, str };
  };

  const dropLoot = (e: RtEnemy) => {
    const def = ENEMIES[e.type];
    const drops = rollDrops(def);
    for (const d of drops) {
      groundRef.current.push({ id: d.id, qty: d.qty, x: e.x, y: e.y });
    }
  };

  const pickUp = (tileX: number, tileY: number) => {
    const remaining: Ground[] = [];
    let inv = saveRef.current.inventory;
    let picked = false;
    for (const g of groundRef.current) {
      if (g.x === tileX && g.y === tileY) {
        inv = addItem(inv, g.id, g.qty);
        const def = itemDef(g.id);
        spawnEffect(tileX + 0.5, tileY, `+${g.qty} ${def.name}`, def.color, 900, 1.2);
        picked = true;
      } else {
        remaining.push(g);
      }
    }
    if (picked) {
      groundRef.current = remaining;
      if (remaining.every((g) => g.id !== "coins")) RealmSound.coin();
      RealmSound.pickup();
      persist({ inventory: inv });
    }
  };

  const onStepTile = (tile: { x: number; y: number }) => {
    const s = saveRef.current;
    // lantern tutorial
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
    // auto pick-up
    if (groundRef.current.some((g) => g.x === tile.x && g.y === tile.y)) {
      pickUp(tile.x, tile.y);
    }
  };

  const adjacentTo = (tx: number, ty: number) => {
    const p = playerTileRef.current;
    const cands = [
      { x: tx + 1, y: ty },
      { x: tx - 1, y: ty },
      { x: tx, y: ty + 1 },
      { x: tx, y: ty - 1 },
    ].filter((c) => isWalkable(c.x, c.y));
    cands.sort(
      (a, b) =>
        Math.abs(a.x - p.x) + Math.abs(a.y - p.y) - (Math.abs(b.x - p.x) + Math.abs(b.y - p.y))
    );
    return cands[0] ?? null;
  };

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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

    const tile = Math.floor(Math.min(w / MAP_W, h / MAP_H));
    const ts = Math.max(tile, 16);
    tileSizeRef.current = ts;
    const mapPxW = ts * MAP_W;
    const mapPxH = ts * MAP_H;
    offsetRef.current = { x: (w - mapPxW) / 2, y: (h - mapPxH) / 2 };
    const { x: ox, y: oy } = offsetRef.current;
    const s = saveRef.current;

    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, w, h);

    for (let y = 0; y < MAP_H; y++) {
      for (let x = 0; x < MAP_W; x++) {
        const t = ASHFORD_TILES[y][x];
        ctx.fillStyle = TILE_COLORS[t] ?? "#333";
        ctx.fillRect(ox + x * ts, oy + y * ts, ts - 1, ts - 1);
      }
    }

    for (const lantern of LANTERNS) {
      const visited = s.lanternsVisited.includes(lantern.id);
      ctx.fillStyle = visited ? "#fbbf24" : "#92400e";
      ctx.beginPath();
      ctx.arc(ox + lantern.x * ts + ts / 2, oy + lantern.y * ts + ts / 2, ts * 0.25, 0, Math.PI * 2);
      ctx.fill();
    }

    // ground items
    for (const g of groundRef.current) {
      const def = itemDef(g.id);
      ctx.fillStyle = def.color;
      ctx.beginPath();
      ctx.arc(ox + g.x * ts + ts / 2, oy + g.y * ts + ts * 0.7, ts * 0.16, 0, Math.PI * 2);
      ctx.fill();
    }

    // tutorial dummy
    if (s.tutorialStage === "food" || s.tutorialStage === "duel" || s.tutorialStage === "play") {
      if (dummyHpRef.current > 0) {
        ctx.fillStyle = "#78716c";
        ctx.fillRect(ox + DUMMY_TILE.x * ts + ts * 0.2, oy + DUMMY_TILE.y * ts + ts * 0.15, ts * 0.6, ts * 0.7);
        ctx.fillStyle = "#ef4444";
        ctx.font = `${Math.max(9, ts * 0.3)}px sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(`Dummy ${dummyHpRef.current}`, ox + DUMMY_TILE.x * ts + ts / 2, oy + DUMMY_TILE.y * ts - 3);
      }
    }

    // enemies
    for (const e of enemiesRef.current) {
      if (!e.alive) continue;
      const def = ENEMIES[e.type];
      const lx = e.lunge * 0.18;
      const px = ox + (e.x + lx * Math.sign(playerTileRef.current.x - e.x)) * ts;
      const py = oy + e.y * ts;
      drawAvatar(ctx, px, py, ts, { tunic: def.color, hair: "#2f2a22", skin: "#8a9a5b", body: "slim" });
      // hp bar
      if (e.hp < e.maxHp) {
        ctx.fillStyle = "#3b0a0a";
        ctx.fillRect(px + ts * 0.15, py + ts * 0.02, ts * 0.7, 4);
        ctx.fillStyle = "#22c55e";
        ctx.fillRect(px + ts * 0.15, py + ts * 0.02, ts * 0.7 * (e.hp / e.maxHp), 4);
      }
      ctx.fillStyle = combatTargetRef.current === e.id ? "#fca5a5" : "#cbd5e1";
      ctx.font = `${Math.max(8, ts * 0.22)}px sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText(`${def.name} (${def.level})`, px + ts / 2, py - 2);
    }

    // npcs
    for (const npc of ASHFORD_NPCS) {
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

    // move target
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
              const { atk, str } = playerAttackBonus();
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
                awardXp(def.xp);
                persist({ kills: saveRef.current.kills + 1 });
                combatTargetRef.current = null;
              } else {
                // retaliation
                e.lunge = 1;
                const eHit = Math.random() < 0.6 ? Math.floor(Math.random() * (def.maxHit + 1)) : 0;
                if (eHit > 0) {
                  const newHp = Math.max(0, saveRef.current.playerHp - eHit);
                  spawnEffect(pix.x + 0.5, pix.y + 0.4, `${eHit}`, "#f97316");
                  persist({ playerHp: newHp });
                  if (newHp <= 0) {
                    combatTargetRef.current = null;
                    onToastRef.current("You were defeated! You wake up in Ashford. Eat and try again.");
                    playerTileRef.current = { ...PLAYER_SPAWN };
                    pix.x = PLAYER_SPAWN.x;
                    pix.y = PLAYER_SPAWN.y;
                    pathRef.current = [];
                    persist({ playerHp: Math.max(3, Math.floor(saveRef.current.playerMaxHp / 2)) });
                  }
                } else {
                  spawnEffect(pix.x + 0.5, pix.y + 0.4, "0", "#93c5fd");
                }
              }
            }
          } else if (pathRef.current.length === 0 && dist < 0.001) {
            const adj = adjacentTo(e.x, e.y);
            if (adj) {
              pathRef.current = findPath(tileRef, adj);
              targetRef.current = adj;
            }
          }
        }
      }

      // respawns
      for (const e of enemiesRef.current) {
        if (!e.alive && now >= e.respawnAt) {
          const spawn = ENEMY_SPAWNS.find((s) => s.id === e.id)!;
          e.alive = true;
          e.hp = e.maxHp;
          e.x = spawn.x;
          e.y = spawn.y;
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
    const x = Math.floor((clientX - rect.left - ox) / ts);
    const y = Math.floor((clientY - rect.top - oy) / ts);
    if (x < 0 || y < 0 || x >= MAP_W || y >= MAP_H) return null;
    return { x, y };
  };

  const handlePointer = (clientX: number, clientY: number) => {
    RealmSound.setMuted(RealmSound.isMuted()); // ensures audio context resumes on gesture
    const tile = screenToTile(clientX, clientY);
    if (!tile) return;
    const p = playerTileRef.current;

    // enemy?
    const enemy = enemiesRef.current.find((e) => e.alive && e.x === tile.x && e.y === tile.y);
    if (enemy) {
      combatTargetRef.current = enemy.id;
      const md = Math.abs(enemy.x - p.x) + Math.abs(enemy.y - p.y);
      if (md > 1) {
        const adj = adjacentTo(enemy.x, enemy.y);
        if (adj) {
          pathRef.current = findPath(p, adj);
          targetRef.current = adj;
        }
      }
      return;
    }

    // npc?
    const npc = ASHFORD_NPCS.find((n) => n.x === tile.x && n.y === tile.y);
    if (npc) {
      combatTargetRef.current = null;
      const md = Math.abs(npc.x - p.x) + Math.abs(npc.y - p.y);
      if (md <= 2) onDialogueRef.current(npc);
      else {
        onToastRef.current("Move closer to talk.");
        const adj = adjacentTo(npc.x, npc.y);
        if (adj) {
          pathRef.current = findPath(p, adj);
          targetRef.current = { x: npc.x, y: npc.y };
        }
      }
      return;
    }

    // tutorial dummy?
    const s = saveRef.current;
    if (
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
        const adj = adjacentTo(DUMMY_TILE.x, DUMMY_TILE.y);
        if (adj) {
          pathRef.current = findPath(p, adj);
          targetRef.current = adj;
        }
      }
      return;
    }

    // walk
    combatTargetRef.current = null;
    pathRef.current = findPath(p, tile);
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
          ? "Tap ground to walk · Tap enemies to fight"
          : "Click ground to walk · Click enemies to fight"}
      </p>
    </div>
  );
}

export function useRealmCombat(save: RealmSave, onSave: (s: RealmSave) => void) {
  return {
    eatBread: () => {
      const idx = save.inventory.findIndex((i) => i.id === "bread" && i.qty > 0);
      const max = calcMaxHp(save.skills);
      if (idx < 0) return false;
      if (save.playerHp >= max) return false;
      const inventory = save.inventory
        .map((i, n) => (n === idx ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0);
      const updated: RealmSave = {
        ...save,
        inventory,
        playerHp: Math.min(max, save.playerHp + (itemDef("bread").heal ?? 5)),
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

export { calcMaxHit };
