"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ASHFORD_NPCS,
  ASHFORD_TILES,
  findPath,
  LANTERNS,
  MAP_H,
  MAP_W,
  PLAYER_SPAWN,
} from "@/lib/realm/ashfordMap";
import type { RealmNpc, RealmSave } from "@/lib/realm/types";
import { writeRealmSave } from "@/lib/realm/storage";
import { drawAvatar } from "@/lib/realm/drawAvatar";

const TILE_COLORS: Record<number, string> = {
  0: "#2d4a2d",
  1: "#5c4a32",
  2: "#1a1a1e",
  3: "#1e3a5f",
  4: "#4a3a2a",
};

interface RealmWorldProps {
  save: RealmSave;
  onSave: (save: RealmSave) => void;
  onDialogue: (npc: RealmNpc) => void;
  onToast: (msg: string) => void;
}

export function RealmWorld({ save, onSave, onDialogue, onToast }: RealmWorldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState(PLAYER_SPAWN);
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null);
  const pathRef = useRef<{ x: number; y: number }[]>([]);
  const playerRef = useRef(PLAYER_SPAWN);
  const animRef = useRef<number | null>(null);
  const [dummyHp, setDummyHp] = useState(5);
  const attackingRef = useRef(false);

  const tileSizeRef = useRef(32);
  const offsetRef = useRef({ x: 0, y: 0 });

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = container.clientWidth;
    const h = container.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const tile = Math.floor(Math.min(w / MAP_W, h / MAP_H));
    tileSizeRef.current = Math.max(tile, 16);
    const mapPxW = tileSizeRef.current * MAP_W;
    const mapPxH = tileSizeRef.current * MAP_H;
    offsetRef.current = {
      x: (w - mapPxW) / 2,
      y: (h - mapPxH) / 2,
    };
    const { x: ox, y: oy } = offsetRef.current;
    const ts = tileSizeRef.current;

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
      const visited = save.lanternsVisited.includes(lantern.id);
      ctx.fillStyle = visited ? "#fbbf24" : "#92400e";
      ctx.beginPath();
      ctx.arc(ox + lantern.x * ts + ts / 2, oy + lantern.y * ts + ts / 2, ts * 0.25, 0, Math.PI * 2);
      ctx.fill();
    }

    if (save.tutorialStage === "food" || save.tutorialStage === "duel" || save.tutorialStage === "play") {
      ctx.fillStyle = "#78716c";
      ctx.fillRect(ox + 18 * ts, oy + 3 * ts, ts * 0.8, ts * 0.8);
      ctx.fillStyle = "#ef4444";
      ctx.font = `${Math.max(10, ts * 0.35)}px sans-serif`;
      ctx.fillText(`Dummy ${dummyHp}`, ox + 18 * ts, oy + 3 * ts - 4);
    }

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

    const char = save.character;
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
  }, [save, target, dummyHp]);

  useEffect(() => {
    draw();
    const ro = new ResizeObserver(() => draw());
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [draw]);

  useEffect(() => {
    const step = () => {
      const next = pathRef.current.shift();
      if (next) {
        playerRef.current = next;
        setPlayer({ ...next });
        const lantern = LANTERNS.find((l) => l.x === next.x && l.y === next.y);
        if (lantern && save.tutorialStage === "move" && !save.lanternsVisited.includes(lantern.id)) {
          const visited = [...save.lanternsVisited, lantern.id];
          const updated = { ...save, lanternsVisited: visited };
          if (visited.length >= 5) {
            updated.tutorialStage = "food";
            onToast("Lantern path complete. Find Betty the Baker.");
          }
          onSave(updated);
        }
        draw();
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [draw, onSave, onToast, save]);

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
    const tile = screenToTile(clientX, clientY);
    if (!tile) return;

    const npc = ASHFORD_NPCS.find((n) => n.x === tile.x && n.y === tile.y);
    if (npc) {
      const dist =
        Math.abs(npc.x - playerRef.current.x) + Math.abs(npc.y - playerRef.current.y);
      if (dist <= 2) {
        onDialogue(npc);
      } else {
        onToast("Move closer to talk.");
        pathRef.current = findPath(playerRef.current, { x: npc.x, y: npc.y });
        setTarget({ x: npc.x, y: npc.y });
      }
      return;
    }

    if (tile.x === 18 && tile.y === 3 && dummyHp > 0) {
      const dist = Math.abs(18 - playerRef.current.x) + Math.abs(3 - playerRef.current.y);
      if (dist <= 2) {
        setDummyHp((h) => {
          const nh = h - 1;
          if (nh <= 0) {
            onToast("Dummy defeated. Eat bread from your HUD.");
            if (save.tutorialStage === "food" && !save.ateBread) {
              onSave({ ...save, playerHp: Math.max(3, save.playerHp - 2) });
            }
          }
          return nh;
        });
      } else {
        pathRef.current = findPath(playerRef.current, { x: 18, y: 4 });
      }
      return;
    }

    pathRef.current = findPath(playerRef.current, tile);
    setTarget(tile);
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
      <p className="pointer-events-none absolute left-2 top-2 rounded bg-black/60 px-2 py-1 text-[10px] text-[var(--muted)] sm:text-xs">
        {typeof window !== "undefined" && "ontouchstart" in window
          ? "Tap to walk · Tap NPCs to talk"
          : "Click to walk · Click NPCs to talk"}
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
      writeRealmSave(updated);
      onSave(updated);
      return true;
    },
    doDuel: () => {
      const updated = {
        ...save,
        duelDone: true,
        tutorialStage: "play" as const,
      };
      writeRealmSave(updated);
      onSave(updated);
      return true;
    },
  };
}
