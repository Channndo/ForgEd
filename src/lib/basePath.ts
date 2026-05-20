/** Base path for GitHub Pages (`/ForgEd`) or empty on Vercel/root deploy. */
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

export function withBasePath(path: string): string {
  if (!BASE_PATH) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${p}`;
}

export function apiUrl(path: string): string {
  return withBasePath(path.startsWith("/") ? path : `/${path}`);
}
