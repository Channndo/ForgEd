"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useKodaPanel } from "@/components/koda/KodaProvider";

/** Legacy route — opens KODA panel and returns to dashboard */
export default function AssistantRedirectPage() {
  const router = useRouter();
  const { setOpen } = useKodaPanel();

  useEffect(() => {
    setOpen(true);
    router.replace("/dashboard");
  }, [router, setOpen]);

  return (
    <div className="flex min-h-[40vh] items-center justify-center text-sm text-[var(--muted)]">
      Opening KODA…
    </div>
  );
}
