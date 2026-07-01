"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getRealmMap } from "@/lib/realm/maps/registry";
import { mapFindPath, type RealmMapConfig } from "@/lib/realm/mapTypes";
import type { RealmInteractable, RealmPortal } from "@/lib/realm/mapTypes";
import type { RealmNpc, RealmSave } from "@/lib/realm/types";
import { drawAvatar } from "@/lib/realm/drawAvatar";
import { drawPortal, drawTile } from "@/lib/realm/tiles";
import {
  adjacentMob,
  drawWildMob,
  livingWildMobs,
  mobAtTile,
  seedMarchesWanderers,
  tryRandomWildSpawn,
  wanderWildMobs,
  WILDERNESS_MOB_CONFIG,
  type RealmWildMob,
} from "@/lib/realm/wildernessMobs";

interface RealmWorldProps {
  save: RealmSave;
  onSave: (save: RealmSave) => void;
  onDialogue: (npc: RealmNpc) => void;
  onToast: (msg: string) => void;
}

function getInteractableHp(save: RealmSave, item: RealmInteractable): number {
  if (save.interactableHp[item.id] !== undefined) {
    return save.interactableHp[item.id];
  }
  return item.maxHp ?? 1;
}

function wildernessEnabled(save: RealmSave): boolean {
  return save.currentArea === "marches" && (save.tutorialStage === "play" || save.duelDone);
}

export function RealmWorld({ save, onSave, onDialogue, onToast }: RealmWorldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const map = getRealmMap(save.currentArea);

  const [target, setTarget] = useState<{ x: number; y: number } | null>(null);
  const [wildMobs, setWildMobs] = useState<RealmWildMob[]>([]);
  const [flashMobId, setFlashMobId] = useState<string | null>(null);

  const pathRef = useRef<{ x: number; y: number }[]>([]);
  const playerRef = useRef(save.playerPosition);
  const animRef = useRef<number | null>(null);
  const saveRef = useRef(save);
  const wildMobsRef = useRef<RealmWildMob[]>([]);

  const tileSizeRef = useRef(32);
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    saveRef.current = save;
  }, [save]);

  useEffect(() => {
    wildMobsRef.current = wildMobs;
  }, [wildMobs]);

  useEffect(() => {
    playerRef.current = save.playerPosition;
    pathRef.current = [];
    setTarget(null);
  }, [save.currentArea, save.playerPosition.x, save.playerPosition.y]);

  useEffect(() => {
    if (wildernessEnabled(save)) {
      setWildMobs((prev) => (prev.length > 0 ? prev : seedMarchesWanderers(map)));
    } else {
      setWildMobs([]);
    }
  }, [save.currentArea, save.tutorialStage, save.duelDone, map]);

  const makeOccupiedChecker = useCallback(
    (currentMap: RealmMapConfig, mobs: RealmWildMob[], skipMobId?: string) => {
      return (x: number, y: number) => {
        if (x === playerRef.current.x && y === playerRef.current.y) return true;
        if (currentMap.npcs.some((n) => n.x === x && n.y === y)) return true;
        if (currentMap.portals.some((p) => p.x === x && p.y === y)) return true;
        if (
          currentMap.interactables.some(
            (i) => i.x === x && i.y === y && getInteractableHp(saveRef.current, i) > 0
          )
        ) {
          return true;
        }
        return livingWildMobs(mobs).some((m) => m.id !== skipMobId && m.x === x && m.y === y);
      };
    },
    []
  );

  const travelToArea = useCallback(
    (portal: RealmPortal) => {
      const current = saveRef.current;
      if (current.tutorialStage !== "play" && !current.duelDone) {
        onToast("Finish the Ashford tutorial before traveling.");
        return;
      }
      const targetMap = getRealmMap(portal.targetArea);
      const discovered = current.areasDiscovered.includes(portal.targetArea)
        ? current.areasDiscovered
        : [...current.areasDiscovered, portal.targetArea];
      const updated: RealmSave = {
        ...current,
        currentArea: portal.targetArea,
        playerPosition: { ...portal.targetSpawn },
        areasDiscovered: discovered,
      };
      playerRef.current = portal.targetSpawn;
      pathRef.current = [];
      setTarget(null);
      setWildMobs([]);
      onSave(updated);
      onToast(`Entered ${targetMap.name}. ${targetMap.subtitle}`);
    },
    [onSave, onToast]
  );

  const defeatMob = useCallback(
    (mob: RealmWildMob) => {
      const current = saveRef.current;
      onToast(`You slay the ${mob.label.toLowerCase()}.`);
      const updated: RealmSave = {
        ...current,
        combatLevel: current.combatLevel + (current.combatLevel < 8 ? 1 : 0),
      };
      onSave(updated);
    },
    [onSave, onToast]
  );

  const damageWildMob = useCallback(
    (mob: RealmWildMob) => {
      const nh = mob.hp - 1;
      if (nh <= 0) {
        setWildMobs((prev) => prev.map((m) => (m.id === mob.id ? { ...m, hp: 0 } : m)));
        defeatMob(mob);
        return;
      }
      setWildMobs((prev) => prev.map((m) => (m.id === mob.id ? { ...m, hp: nh } : m)));
      onSave({
        ...saveRef.current,
        playerHp: Math.max(1, saveRef.current.playerHp - 1),
      });
      onToast(`You hit the ${mob.label.toLowerCase()}. It hits back.`);
    },
    [defeatMob, onSave, onToast]
  );

  const damageInteractable = useCallback(
    (item: RealmInteractable) => {
      const current = saveRef.current;
      const hp = getInteractableHp(current, item);
      if (hp <= 0) return;

      const nh = hp - 1;
      const interactableHp = { ...current.interactableHp, [item.id]: nh };

      if (item.kind === "dummy" && nh <= 0) {
        onToast("Dummy defeated. Eat bread from your HUD.");
        if (current.tutorialStage === "food" && !current.ateBread) {
          onSave({
            ...current,
            interactableHp,
            playerHp: Math.max(3, current.playerHp - 2),
          });
          return;
        }
      }

      if (item.kind === "goblin") {
        if (nh <= 0) {
          onToast("You slay the goblin.");
          onSave({
            ...current,
            interactableHp,
            combatLevel: current.combatLevel + (current.combatLevel < 8 ? 1 : 0),
          });
          return;
        }
        onSave({
          ...current,
          interactableHp,
          playerHp: Math.max(1, current.playerHp - 1),
        });
        onToast("You hit the goblin. It hits back.");
        return;
      }

      onSave({ ...current, interactableHp });
    },
    [onSave, onToast]
  );

  const collectTome = useCallback(
    (item: RealmInteractable) => {
      const current = saveRef.current;
      if (current.tomesCollected.includes(item.id)) {
        onToast("You already studied this tome.");
        return;
      }
      const tomesCollected = [...current.tomesCollected, item.id];
      onSave({ ...current, tomesCollected });
      onToast(`Studied ${item.label}. (${tomesCollected.length}/3 tomes)`);
      if (tomesCollected.length >= 3) {
        onToast("All Mindspire tomes complete. Elara would nod approvingly.");
      }
    },
    [onSave, onToast]
  );

  const onPlayerStep = useCallback(
    (next: { x: number; y: number }) => {
      const currentSave = saveRef.current;
      const currentMap = getRealmMap(currentSave.currentArea);

      if (wildernessEnabled(currentSave)) {
        const spawn = tryRandomWildSpawn({
          map: currentMap,
          player: next,
          mobs: wildMobsRef.current,
          lastSpawnAt: currentSave.lastWildernessSpawnAt ?? 0,
        });
        if (spawn.mob) {
          setWildMobs((prev) => [...prev, spawn.mob!]);
          setFlashMobId(spawn.mob.id);
          setTimeout(() => setFlashMobId((id) => (id === spawn.mob!.id ? null : id)), 1200);
          onToast(
            spawn.mob.kind === "rat"
              ? "A giant rat scurries from the dunes!"
              : "A goblin stumbles out of the sand!"
          );
          onSave({ ...currentSave, lastWildernessSpawnAt: spawn.lastSpawnAt });
        }

        const steppedMob = mobAtTile(wildMobsRef.current, next.x, next.y);
        if (steppedMob) {
          onSave({ ...currentSave, playerHp: Math.max(1, currentSave.playerHp - 1) });
          onToast(`The ${steppedMob.label.toLowerCase()} claws you!`);
        }
      }
    },
    [onSave, onToast]
  );

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const currentSave = saveRef.current;
    const currentMap = getRealmMap(currentSave.currentArea);
    const mobs = wildMobsRef.current;

    const dpr = window.devicePixelRatio || 1;
    const w = container.clientWidth;
    const h = container.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const tile = Math.floor(Math.min(w / currentMap.mapW, h / currentMap.mapH));
    tileSizeRef.current = Math.max(tile, 14);
    const mapPxW = tileSizeRef.current * currentMap.mapW;
    const mapPxH = tileSizeRef.current * currentMap.mapH;
    offsetRef.current = {
      x: (w - mapPxW) / 2,
      y: (h - mapPxH) / 2,
    };
    const { x: ox, y: oy } = offsetRef.current;
    const ts = tileSizeRef.current;

    ctx.fillStyle = currentMap.isWilderness ? "#1a1208" : "#0a0a0a";
    ctx.fillRect(0, 0, w, h);

    for (let y = 0; y < currentMap.mapH; y++) {
      for (let x = 0; x < currentMap.mapW; x++) {
        drawTile(ctx, currentMap.tiles[y][x], ox + x * ts, oy + y * ts, ts);
      }
    }

    for (const portal of currentMap.portals) {
      drawPortal(ctx, ox + portal.x * ts, oy + portal.y * ts, ts, portal.label);
    }

    if (currentMap.lanterns) {
      for (const lantern of currentMap.lanterns) {
        const visited = currentSave.lanternsVisited.includes(lantern.id);
        ctx.fillStyle = visited ? "#fbbf24" : "#92400e";
        ctx.beginPath();
        ctx.arc(
          ox + lantern.x * ts + ts / 2,
          oy + lantern.y * ts + ts / 2,
          ts * 0.25,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }

    for (const item of currentMap.interactables) {
      const hp = getInteractableHp(currentSave, item);
      if (item.kind === "tome") {
        if (currentSave.tomesCollected.includes(item.id)) continue;
        ctx.fillStyle = "#6366f1";
        ctx.fillRect(ox + item.x * ts + ts * 0.2, oy + item.y * ts + ts * 0.15, ts * 0.6, ts * 0.7);
      } else if (hp > 0) {
        ctx.fillStyle = item.kind === "goblin" ? "#16a34a" : "#78716c";
        ctx.fillRect(ox + item.x * ts + ts * 0.15, oy + item.y * ts + ts * 0.2, ts * 0.7, ts * 0.65);
        ctx.fillStyle = "#ef4444";
        ctx.font = `${Math.max(9, ts * 0.32)}px sans-serif`;
        ctx.textAlign = "left";
        ctx.fillText(`${item.label} ${hp}`, ox + item.x * ts, oy + item.y * ts - 3);
      }
    }

    for (const mob of livingWildMobs(mobs)) {
      drawWildMob(
        ctx,
        mob,
        ox + mob.x * ts,
        oy + mob.y * ts,
        ts,
        mob.id === flashMobId
      );
    }

    for (const npc of currentMap.npcs) {
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

    const char = currentSave.character;
    drawAvatar(ctx, ox + playerRef.current.x * ts, oy + playerRef.current.y * ts, ts, {
      tunic: char?.tunic ?? "#d4af37",
      hair: char?.hair ?? "#1a1a1a",
      skin: char?.skin ?? "#e8b88a",
      body: char?.body,
    });
    ctx.fillStyle = "#f5f5f5";
    ctx.font = `bold ${Math.max(9, ts * 0.28)}px serif`;
    ctx.textAlign = "center";
    ctx.fillText(
      char?.name?.slice(0, 12) ?? "You",
      ox + playerRef.current.x * ts + ts / 2,
      oy + playerRef.current.y * ts - 4
    );

    if (target) {
      ctx.strokeStyle = "rgba(212,175,55,0.6)";
      ctx.lineWidth = 2;
      ctx.strokeRect(ox + target.x * ts + 2, oy + target.y * ts + 2, ts - 4, ts - 4);
    }
  }, [target, flashMobId]);

  useEffect(() => {
    draw();
    const ro = new ResizeObserver(() => draw());
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [draw, save.currentArea, wildMobs]);

  useEffect(() => {
    if (!wildernessEnabled(save)) return;

    const interval = setInterval(() => {
      const currentMap = getRealmMap("marches");
      setWildMobs((prev) =>
        wanderWildMobs(
          currentMap,
          prev,
          playerRef.current,
          makeOccupiedChecker(currentMap, prev)
        )
      );
      draw();
    }, WILDERNESS_MOB_CONFIG.wanderIntervalMs);

    return () => clearInterval(interval);
  }, [save.currentArea, save.tutorialStage, save.duelDone, draw, makeOccupiedChecker]);

  useEffect(() => {
    const step = () => {
      const next = pathRef.current.shift();
      if (next) {
        playerRef.current = next;

        const currentSave = saveRef.current;
        const currentMap = getRealmMap(currentSave.currentArea);

        const portal = currentMap.portals.find((p) => p.x === next.x && p.y === next.y);
        if (portal) {
          travelToArea(portal);
          draw();
          animRef.current = requestAnimationFrame(step);
          return;
        }

        onPlayerStep(next);

        const lantern = currentMap.lanterns?.find((l) => l.x === next.x && l.y === next.y);
        if (
          lantern &&
          currentSave.tutorialStage === "move" &&
          !currentSave.lanternsVisited.includes(lantern.id)
        ) {
          const visited = [...currentSave.lanternsVisited, lantern.id];
          const updated: RealmSave = {
            ...saveRef.current,
            lanternsVisited: visited,
            playerPosition: next,
          };
          if (visited.length >= 5) {
            updated.tutorialStage = "food";
            onToast("Lantern path complete. Find Betty the Baker.");
          }
          onSave(updated);
        } else if (
          next.x !== currentSave.playerPosition.x ||
          next.y !== currentSave.playerPosition.y
        ) {
          onSave({ ...saveRef.current, playerPosition: next });
        }

        draw();
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [draw, onSave, onToast, onPlayerStep, travelToArea]);

  const screenToTile = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const { x: ox, y: oy } = offsetRef.current;
    const ts = tileSizeRef.current;
    const x = Math.floor((clientX - rect.left - ox) / ts);
    const y = Math.floor((clientY - rect.top - oy) / ts);
    if (x < 0 || y < 0 || x >= map.mapW || y >= map.mapH) return null;
    return { x, y };
  };

  const handlePointer = (clientX: number, clientY: number) => {
    const tile = screenToTile(clientX, clientY);
    if (!tile) return;

    const currentSave = saveRef.current;
    const currentMap = getRealmMap(currentSave.currentArea);

    const nearMob = wildernessEnabled(currentSave)
      ? adjacentMob(wildMobsRef.current, playerRef.current)
      : undefined;
    if (nearMob) {
      const fleeDist =
        Math.abs(tile.x - nearMob.x) + Math.abs(tile.y - nearMob.y);
      if (fleeDist > 2) {
        onSave({
          ...currentSave,
          playerHp: Math.max(1, currentSave.playerHp - WILDERNESS_MOB_CONFIG.fleeDamage),
        });
        onToast(`You flee from the ${nearMob.label.toLowerCase()}!`);
      }
    }

    const portal = currentMap.portals.find((p) => p.x === tile.x && p.y === tile.y);
    if (portal) {
      const dist =
        Math.abs(portal.x - playerRef.current.x) + Math.abs(portal.y - playerRef.current.y);
      if (dist <= 1) {
        travelToArea(portal);
      } else {
        pathRef.current = mapFindPath(currentMap, playerRef.current, { x: portal.x, y: portal.y });
        setTarget({ x: portal.x, y: portal.y });
      }
      return;
    }

    const wildMob = mobAtTile(wildMobsRef.current, tile.x, tile.y);
    if (wildMob) {
      const dist =
        Math.abs(wildMob.x - playerRef.current.x) + Math.abs(wildMob.y - playerRef.current.y);
      if (dist <= 2) {
        damageWildMob(wildMob);
      } else {
        pathRef.current = mapFindPath(currentMap, playerRef.current, { x: wildMob.x, y: wildMob.y });
        setTarget({ x: wildMob.x, y: wildMob.y });
      }
      return;
    }

    const npc = currentMap.npcs.find((n) => n.x === tile.x && n.y === tile.y);
    if (npc) {
      const dist =
        Math.abs(npc.x - playerRef.current.x) + Math.abs(npc.y - playerRef.current.y);
      if (dist <= 2) {
        onDialogue(npc);
      } else {
        onToast("Move closer to talk.");
        pathRef.current = mapFindPath(currentMap, playerRef.current, { x: npc.x, y: npc.y });
        setTarget({ x: npc.x, y: npc.y });
      }
      return;
    }

    const interactable = currentMap.interactables.find((i) => i.x === tile.x && i.y === tile.y);
    if (interactable) {
      const dist =
        Math.abs(interactable.x - playerRef.current.x) +
        Math.abs(interactable.y - playerRef.current.y);
      if (dist <= 2) {
        if (interactable.kind === "tome") {
          collectTome(interactable);
        } else if (getInteractableHp(currentSave, interactable) > 0) {
          damageInteractable(interactable);
        }
      } else {
        pathRef.current = mapFindPath(currentMap, playerRef.current, {
          x: interactable.x,
          y: interactable.y,
        });
        setTarget({ x: interactable.x, y: interactable.y });
      }
      return;
    }

    pathRef.current = mapFindPath(currentMap, playerRef.current, tile);
    setTarget(tile);
  };

  const hintText =
    map.isWilderness && wildernessEnabled(save)
      ? "Wilderness — mobs wander & pop up · Click away to flee"
      : typeof window !== "undefined" && "ontouchstart" in window
        ? "Tap to walk · Golden portals travel · Tap NPCs & objects"
        : "Click to walk · Golden portals travel · Click NPCs & objects";

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
      <p className="pointer-events-none absolute left-2 top-10 rounded bg-black/60 px-2 py-1 text-[10px] text-[var(--muted)] sm:top-12 sm:text-xs">
        {hintText}
      </p>
      <p className="pointer-events-none absolute left-2 top-2 rounded border border-[var(--gold)]/20 bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-[var(--gold)] sm:text-xs">
        {map.name}
        {map.isWilderness ? " ☠" : ""}
      </p>
    </div>
  );
}

export function useRealmCombat(save: RealmSave, onSave: (s: RealmSave) => void) {
  return {
    eatBread: () => {
      if (save.playerHp >= save.playerMaxHp) return false;
      const updated = {
        ...save,
        playerHp: Math.min(save.playerMaxHp, save.playerHp + 5),
        ateBread: true,
        tutorialStage: save.tutorialStage === "food" ? ("duel" as const) : save.tutorialStage,
      };
      onSave(updated);
      return true;
    },
    doDuel: () => {
      const updated = {
        ...save,
        duelDone: true,
        tutorialStage: "play" as const,
      };
      onSave(updated);
      return true;
    },
  };
}
