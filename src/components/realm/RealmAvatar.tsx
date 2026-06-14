import type { RealmCharacter } from "@/lib/realm/types";

interface RealmAvatarProps {
  character: Pick<RealmCharacter, "body" | "hair" | "tunic"> & { skin?: string };
  size?: number;
  className?: string;
}

/** A small RuneScape-style adventurer rendered as scalable SVG. */
export function RealmAvatar({ character, size = 160, className }: RealmAvatarProps) {
  const skin = character.skin ?? "#e8b88a";
  const tunic = character.tunic;
  const hair = character.hair;

  const shoulder = character.body === "slim" ? 16 : character.body === "broad" ? 26 : 21;
  const cx = 32;
  const torsoTop = 38;
  const torsoBottom = 70;
  const armW = character.body === "broad" ? 7 : 6;
  const tunicDark = shade(tunic, -28);
  const tunicLight = shade(tunic, 22);
  const hairDark = shade(hair, -30);

  return (
    <svg
      viewBox="0 0 64 96"
      width={size}
      height={size * 1.5}
      className={className}
      shapeRendering="geometricPrecision"
    >
      {/* shadow */}
      <ellipse cx={cx} cy="92" rx={shoulder * 0.8} ry="4" fill="rgba(0,0,0,0.35)" />

      {/* legs */}
      <rect x={cx - 9} y={torsoBottom} width="8" height="16" rx="2" fill="#3b2f25" />
      <rect x={cx + 1} y={torsoBottom} width="8" height="16" rx="2" fill="#3b2f25" />
      {/* boots */}
      <rect x={cx - 10} y="84" width="10" height="6" rx="2" fill="#2a211a" />
      <rect x={cx} y="84" width="10" height="6" rx="2" fill="#2a211a" />

      {/* arms */}
      <rect x={cx - shoulder} y={torsoTop + 2} width={armW} height="22" rx="3" fill={tunicDark} />
      <rect x={cx + shoulder - armW} y={torsoTop + 2} width={armW} height="22" rx="3" fill={tunicDark} />
      {/* hands */}
      <circle cx={cx - shoulder + armW / 2} cy={torsoTop + 26} r="3" fill={skin} />
      <circle cx={cx + shoulder - armW / 2} cy={torsoTop + 26} r="3" fill={skin} />

      {/* torso / tunic */}
      <path
        d={`M ${cx - shoulder + 2} ${torsoTop}
            Q ${cx} ${torsoTop - 4} ${cx + shoulder - 2} ${torsoTop}
            L ${cx + shoulder - 4} ${torsoBottom}
            Q ${cx} ${torsoBottom + 4} ${cx - shoulder + 4} ${torsoBottom} Z`}
        fill={tunic}
        stroke={tunicDark}
        strokeWidth="1.5"
      />
      {/* tunic highlight */}
      <path
        d={`M ${cx - shoulder + 5} ${torsoTop + 3} L ${cx - 2} ${torsoTop + 1} L ${cx - 4} ${torsoBottom - 4} Z`}
        fill={tunicLight}
        opacity="0.45"
      />
      {/* belt */}
      <rect x={cx - shoulder + 3} y={torsoBottom - 9} width={(shoulder - 3) * 2} height="5" fill="#5a4632" />
      <rect x={cx - 3} y={torsoBottom - 9} width="6" height="5" fill="#d4af37" />

      {/* neck */}
      <rect x={cx - 4} y="30" width="8" height="8" fill={skin} />

      {/* head */}
      <circle cx={cx} cy="24" r="11" fill={skin} stroke={shade(skin, -25)} strokeWidth="0.8" />
      {/* ears */}
      <circle cx={cx - 11} cy="24" r="2.5" fill={skin} />
      <circle cx={cx + 11} cy="24" r="2.5" fill={skin} />

      {/* hair */}
      <path
        d={`M ${cx - 12} 24
            Q ${cx - 13} 11 ${cx} 11
            Q ${cx + 13} 11 ${cx + 12} 24
            L ${cx + 9} 21
            Q ${cx + 6} 15 ${cx} 15
            Q ${cx - 6} 15 ${cx - 9} 21 Z`}
        fill={hair}
        stroke={hairDark}
        strokeWidth="0.8"
      />
      <path d={`M ${cx - 11} 23 Q ${cx} 19 ${cx + 11} 23`} fill="none" stroke={hairDark} strokeWidth="1" opacity="0.5" />

      {/* eyes */}
      <circle cx={cx - 4} cy="25" r="1.5" fill="#2a2a2a" />
      <circle cx={cx + 4} cy="25" r="1.5" fill="#2a2a2a" />
      {/* smile */}
      <path d={`M ${cx - 3} 29 Q ${cx} 31 ${cx + 3} 29`} fill="none" stroke={shade(skin, -35)} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
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
