"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { withBasePath } from "@/lib/basePath";

/** Home always opens the dashboard; guests browse with local progress. */
export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(withBasePath("/dashboard"));
  }, [router]);

  return (
    <div className="flex min-h-[50vh] items-center justify-center text-[var(--muted)]">
      Loading ForgEd…
    </div>
  );
}
