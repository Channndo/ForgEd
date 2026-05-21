import { NextRequest, NextResponse } from "next/server";

const SYNTIX_API =
  process.env.SYNTRIX_API_URL?.replace(/\/$/, "") || "https://api.syntrix.solutions";

/** Proxy Syntrix auth routes (same pattern as CoverIQ Netlify /api/auth/*). */
export async function GET(
  req: NextRequest,
  ctx: { params: Promise<{ path: string[] }> }
) {
  const { path } = await ctx.params;
  return proxy(req, path, "GET");
}

export async function POST(
  req: NextRequest,
  ctx: { params: Promise<{ path: string[] }> }
) {
  const { path } = await ctx.params;
  return proxy(req, path, "POST");
}

async function proxy(req: NextRequest, segments: string[], method: string) {
  const subpath = segments.join("/");
  const url = `${SYNTIX_API}/api/${subpath}${req.nextUrl.search}`;

  const headers = new Headers();
  const auth = req.headers.get("authorization");
  if (auth) headers.set("Authorization", auth);
  const accept = req.headers.get("accept");
  if (accept) headers.set("Accept", accept);
  const contentType = req.headers.get("content-type");
  if (contentType) headers.set("Content-Type", contentType);

  const init: RequestInit = { method, headers };
  if (method !== "GET" && method !== "HEAD") {
    init.body = await req.text();
  }

  try {
    const res = await fetch(url, init);
    const text = await res.text();
    return new NextResponse(text, {
      status: res.status,
      headers: {
        "Content-Type": res.headers.get("content-type") ?? "application/json",
      },
    });
  } catch {
    return NextResponse.json(
      { detail: "Could not reach Syntrix account service." },
      { status: 502 }
    );
  }
}
