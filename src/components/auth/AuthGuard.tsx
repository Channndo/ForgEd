"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import { withBasePath } from "@/lib/basePath";

/** Only these routes require sign-in; courses and dashboard work as a guest. */
const PROTECTED_PREFIXES = ["/profile"];

const AUTH_PATHS = ["/login", "/signup", "/forgot-password"];

function isAuthPath(path: string): boolean {
  if (path.includes("/signup")) return true;
  return AUTH_PATHS.some((p) => path === p || path.endsWith(p));
}

function isProtectedPath(path: string): boolean {
  return PROTECTED_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`)
  );
}

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const path = pathname?.replace(/\/$/, "") || "/";
  const protectedRoute = isProtectedPath(path);
  const authRoute = isAuthPath(path);

  useEffect(() => {
    if (loading) return;
    if (!user && protectedRoute) {
      router.replace(withBasePath("/login"));
    }
    if (user && authRoute) {
      router.replace(withBasePath("/dashboard"));
    }
  }, [user, loading, protectedRoute, authRoute, router]);

  if (loading && protectedRoute) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-sm text-[var(--muted)]">
        Loading…
      </div>
    );
  }

  if (!user && protectedRoute) return null;
  if (user && authRoute) return null;

  return <>{children}</>;
}
