"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { certificatePdfUrl } from "@/lib/certificates/client";
import { getAccessToken } from "@/lib/forged-account/session";

export function DownloadButton({
  certificateId,
  label = "Download PDF",
  variant = "forge",
  className = "",
}: {
  certificateId: string;
  label?: string;
  variant?: "primary" | "secondary" | "ghost" | "forge";
  className?: string;
}) {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    setLoading(true);
    try {
      const token = getAccessToken();
      const res = await fetch(certificatePdfUrl(certificateId), {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      if (!res.ok) throw new Error("Download failed.");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download =
        res.headers.get("Content-Disposition")?.match(/filename="([^"]+)"/)?.[1] ||
        `ForgEd-Certificate.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      window.open(certificatePdfUrl(certificateId), "_blank");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      type="button"
      variant={variant}
      className={className}
      disabled={loading}
      onClick={handleDownload}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Download className="h-4 w-4" />
      )}
      {label}
    </Button>
  );
}
