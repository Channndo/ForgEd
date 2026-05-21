import { NextRequest, NextResponse } from "next/server";
import { getKodaStatus } from "@/services/ai";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const auth = request.headers.get("authorization");
  const status = await getKodaStatus(auth);
  return NextResponse.json(status);
}
