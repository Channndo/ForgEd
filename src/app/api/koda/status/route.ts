import { NextResponse } from "next/server";
import { getKodaStatus } from "@/services/ai";

export const runtime = "nodejs";

export async function GET() {
  const status = await getKodaStatus();
  return NextResponse.json(status);
}
