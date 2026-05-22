import { NextRequest, NextResponse } from "next/server";
import { gasListCertificates } from "@/lib/certificates/server/gasCertificates";
import { MOCK_CERTIFICATES } from "@/lib/certificates/mockData";

function useMockStore(): boolean {
  return (
    process.env.CERTIFICATES_USE_MOCK === "true" ||
    !process.env.FORGED_WEB_APP_URL
  );
}

export async function GET(req: NextRequest) {
  const token = (req.headers.get("authorization") ?? "")
    .replace(/^Bearer\s+/i, "")
    .trim();
  if (!token) {
    return NextResponse.json({ ok: false, error: "Sign in required." }, { status: 401 });
  }

  if (useMockStore()) {
    return NextResponse.json({ ok: true, certificates: MOCK_CERTIFICATES });
  }

  try {
    const certificates = await gasListCertificates(token);
    return NextResponse.json({ ok: true, certificates });
  } catch (e) {
    console.error("[certificates/list]", e);
    return NextResponse.json(
      { ok: false, error: "Could not load certificates." },
      { status: 502 }
    );
  }
}
