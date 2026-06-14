export interface AvatarColors {
  tunic: string;
  hair: string;
  skin?: string;
  body?: "slim" | "standard" | "broad";
}

function shade(hex: string, amount: number): string {
  const m = hex.replace("#", "");
  const full = m.length === 3 ? m.split("").map((c) => c + c).join("") : m;
  const num = parseInt(full, 16);
  if (Number.isNaN(num)) return hex;
  const clamp = (v: number) => Math.max(0, Math.min(255, v));
  const r = clamp(((num >> 16) & 0xff) + amount);
  const g = clamp(((num >> 8) & 0xff) + amount);
  const b = clamp((num & 0xff) + amount);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

/**
 * Draws a small humanoid centered within a tile.
 * (px, py) is the top-left of the tile in screen pixels; `ts` is tile size.
 */
export function drawAvatar(
  ctx: CanvasRenderingContext2D,
  px: number,
  py: number,
  ts: number,
  colors: AvatarColors
) {
  const skin = colors.skin ?? "#e8b88a";
  const tunic = colors.tunic;
  const hair = colors.hair;
  const tunicDark = shade(tunic, -28);

  const cx = px + ts / 2;
  const top = py + ts * 0.08;
  const unit = ts / 16;
  const shoulder = (colors.body === "slim" ? 4.5 : colors.body === "broad" ? 6.5 : 5.5) * unit;

  const headR = 2.6 * unit;
  const headCy = top + headR + unit * 0.5;
  const torsoTop = headCy + headR + unit * 0.4;
  const torsoBottom = py + ts * 0.78;

  // shadow
  ctx.fillStyle = "rgba(0,0,0,0.3)";
  ctx.beginPath();
  ctx.ellipse(cx, py + ts * 0.92, shoulder * 0.85, unit * 0.9, 0, 0, Math.PI * 2);
  ctx.fill();

  // legs
  ctx.fillStyle = "#3b2f25";
  ctx.fillRect(cx - shoulder * 0.6, torsoBottom, shoulder * 0.5, ts * 0.16);
  ctx.fillRect(cx + shoulder * 0.1, torsoBottom, shoulder * 0.5, ts * 0.16);

  // arms
  ctx.fillStyle = tunicDark;
  ctx.fillRect(cx - shoulder, torsoTop, unit * 1.4, torsoBottom - torsoTop);
  ctx.fillRect(cx + shoulder - unit * 1.4, torsoTop, unit * 1.4, torsoBottom - torsoTop);

  // torso
  ctx.fillStyle = tunic;
  ctx.beginPath();
  ctx.moveTo(cx - shoulder, torsoTop);
  ctx.lineTo(cx + shoulder, torsoTop);
  ctx.lineTo(cx + shoulder * 0.8, torsoBottom);
  ctx.lineTo(cx - shoulder * 0.8, torsoBottom);
  ctx.closePath();
  ctx.fill();

  // belt
  ctx.fillStyle = "#5a4632";
  ctx.fillRect(cx - shoulder * 0.8, torsoBottom - unit * 1.4, shoulder * 1.6, unit * 1.1);
  ctx.fillStyle = "#d4af37";
  ctx.fillRect(cx - unit * 0.7, torsoBottom - unit * 1.4, unit * 1.4, unit * 1.1);

  // head
  ctx.fillStyle = skin;
  ctx.beginPath();
  ctx.arc(cx, headCy, headR, 0, Math.PI * 2);
  ctx.fill();

  // hair cap
  ctx.fillStyle = hair;
  ctx.beginPath();
  ctx.arc(cx, headCy, headR, Math.PI, Math.PI * 2);
  ctx.fill();
  ctx.fillRect(cx - headR, headCy - headR, headR * 2, headR * 0.5);

  // eyes
  ctx.fillStyle = "#2a2a2a";
  ctx.beginPath();
  ctx.arc(cx - headR * 0.4, headCy + headR * 0.1, Math.max(1, unit * 0.4), 0, Math.PI * 2);
  ctx.arc(cx + headR * 0.4, headCy + headR * 0.1, Math.max(1, unit * 0.4), 0, Math.PI * 2);
  ctx.fill();
}
