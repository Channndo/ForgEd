let ctx: AudioContext | null = null;
let muted = false;

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function tone(freq: number, durMs: number, type: OscillatorType, gain = 0.06, delayMs = 0) {
  const ac = audio();
  if (!ac || muted) return;
  const t0 = ac.currentTime + delayMs / 1000;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + durMs / 1000);
  osc.connect(g);
  g.connect(ac.destination);
  osc.start(t0);
  osc.stop(t0 + durMs / 1000 + 0.02);
}

export const RealmSound = {
  setMuted(v: boolean) {
    muted = v;
  },
  isMuted() {
    return muted;
  },
  hit() {
    tone(180, 90, "square", 0.05);
    tone(120, 120, "triangle", 0.04, 20);
  },
  miss() {
    tone(90, 80, "sine", 0.03);
  },
  enemyDie() {
    tone(200, 120, "sawtooth", 0.05);
    tone(110, 200, "sawtooth", 0.04, 80);
  },
  eat() {
    tone(320, 80, "sine", 0.05);
    tone(420, 90, "sine", 0.04, 60);
  },
  coin() {
    tone(880, 60, "square", 0.04);
    tone(1180, 70, "square", 0.035, 50);
  },
  pickup() {
    tone(520, 70, "triangle", 0.045);
  },
  levelUp() {
    [523, 659, 784, 1047].forEach((f, i) => tone(f, 180, "triangle", 0.06, i * 110));
  },
};
