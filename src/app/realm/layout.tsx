import type { ReactNode } from "react";

/** Realm uses full viewport — shell handled in AppShell + RealmGame */
export default function RealmLayout({ children }: { children: ReactNode }) {
  return children;
}
