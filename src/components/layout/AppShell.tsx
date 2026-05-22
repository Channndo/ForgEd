"use client";

import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export function AppShell({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const path = pathname?.replace(/\/$/, "") ?? "";
  const isAuthPage =
    path.endsWith("/login") ||
    path.includes("/signup") ||
    path.endsWith("/forgot-password");
  const isTextbookReader = /\/courses\/[^/]+\/read\/?$/.test(pathname ?? "");

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen w-full bg-[var(--background)]">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((c) => !c)}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar onMenuClick={() => setMobileOpen(true)} />
        <main className="flex-1">
          {isTextbookReader ? (
            <div className="w-full">{children}</div>
          ) : (
            <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">{children}</div>
          )}
        </main>
      </div>
    </div>
  );
}
