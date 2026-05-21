import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Lora } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { ProgressProvider } from "@/components/providers/ProgressProvider";
import { AchievementProvider } from "@/components/providers/AchievementProvider";
import { KodaProvider } from "@/components/koda/KodaProvider";
import { KodaFloatingButton } from "@/components/koda/KodaFab";
import { withBasePath } from "@/lib/basePath";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-textbook",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "ForgEd — Learn Skills That Matter.",
  description:
    "Free AI-powered education platform. Learn across technology, business, finance, trades, healthcare, and more.",
  icons: {
    icon: [
      { url: withBasePath("/favicon.ico?v=5"), sizes: "any" },
      { url: withBasePath("/icon-32.png?v=5"), sizes: "32x32", type: "image/png" },
      { url: withBasePath("/icon-16.png?v=5"), sizes: "16x16", type: "image/png" },
      { url: withBasePath("/icon-48.png?v=5"), sizes: "48x48", type: "image/png" },
    ],
    apple: [
      {
        url: withBasePath("/apple-touch-icon.png?v=5"),
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [{ url: withBasePath("/favicon.ico?v=5") }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full ${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${lora.variable}`}
    >
      <head>
        <link rel="icon" href={withBasePath("/favicon.ico?v=5")} sizes="any" />
        <link
          rel="icon"
          href={withBasePath("/icon-32.png?v=5")}
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href={withBasePath("/icon-16.png?v=5")}
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href={withBasePath("/apple-touch-icon.png?v=5")}
        />
      </head>
      <body className="min-h-full antialiased bg-[#050505]">
        <AuthProvider>
          <AuthGuard>
              <ProgressProvider>
                <AchievementProvider>
                  <KodaProvider>
                    <AppShell>{children}</AppShell>
                    <KodaFloatingButton />
                  </KodaProvider>
                </AchievementProvider>
              </ProgressProvider>
          </AuthGuard>
        </AuthProvider>
      </body>
    </html>
  );
}
