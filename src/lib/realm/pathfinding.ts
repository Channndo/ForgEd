export function findPath(
  tiles: number[][],
  mapW: number,
  mapH: number,
  isWalkable: (x: number, y: number) => boolean,
  start: { x: number; y: number },
  goal: { x: number; y: number }
): { x: number; y: number }[] {
  if (!isWalkable(goal.x, goal.y)) return [];
  const key = (x: number, y: number) => `${x},${y}`;
  const queue: { x: number; y: number }[] = [start];
  const came = new Map<string, string | null>([[key(start.x, start.y), null]]);
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  while (queue.length) {
    const cur = queue.shift()!;
    if (cur.x === goal.x && cur.y === goal.y) {
      const path: { x: number; y: number }[] = [];
      let k: string | null = key(cur.x, cur.y);
      while (k) {
        const [px, py] = k.split(",").map(Number);
        path.unshift({ x: px, y: py });
        k = came.get(k) ?? null;
      }
      return path.slice(1);
    }
    for (const [dx, dy] of dirs) {
      const nx = cur.x + dx;
      const ny = cur.y + dy;
      if (nx < 0 || ny < 0 || nx >= mapW || ny >= mapH) continue;
      const nk = key(nx, ny);
      if (!isWalkable(nx, ny) || came.has(nk)) continue;
      came.set(nk, key(cur.x, cur.y));
      queue.push({ x: nx, y: ny });
    }
  }
  return [];
}
