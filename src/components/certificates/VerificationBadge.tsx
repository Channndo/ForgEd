"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { ShieldCheck } from "lucide-react";

/** QR + shield for certificate verification (preview UI). */
export function VerificationBadge({
  certificateId,
  verificationUrl,
  size = 72,
}: {
  certificateId: string;
  verificationUrl: string;
  size?: number;
}) {
  const [qrSrc, setQrSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    QRCode.toDataURL(verificationUrl || certificateId, {
      width: size * 2,
      margin: 1,
      color: { dark: "#1a1a1a", light: "#f0ebe0" },
    }).then((url) => {
      if (!cancelled) setQrSrc(url);
    });
    return () => {
      cancelled = true;
    };
  }, [verificationUrl, certificateId, size]);

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="relative rounded-full border-2 border-[var(--gold)]/50 bg-gradient-to-br from-[#2a2418] to-[#0a0a0a] p-1 shadow-[0_0_24px_rgba(201,169,98,0.25)]"
        style={{ width: size + 12, height: size + 12 }}
      >
        {qrSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={qrSrc}
            alt={`Verify certificate ${certificateId}`}
            width={size}
            height={size}
            className="rounded-full"
          />
        ) : (
          <div
            className="flex items-center justify-center rounded-full bg-[#1a1a1a]"
            style={{ width: size, height: size }}
          >
            <ShieldCheck className="h-6 w-6 text-[var(--gold)]/60" />
          </div>
        )}
      </div>
      <span className="font-mono text-[6px] uppercase tracking-widest text-[var(--muted)]">
        Scan to verify
      </span>
    </div>
  );
}
