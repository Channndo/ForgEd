"use client";

import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export function AppShell({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isTextbookReader = /\/courses\/[^/]+\/read\/?$/.test(pathname ?? "");

  return (
    <div className="flex h-dvh overflow-hidden bg-[var(--background)]">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((c) => !c)}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <TopBar onMenuClick={() => setMobileOpen(true)} />
        <main className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain">
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
