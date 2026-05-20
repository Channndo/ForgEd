import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Lora } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";
import { ProgressProvider } from "@/components/providers/ProgressProvider";
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
      {
        url: withBasePath("/icon.svg"),
        type: "image/svg+xml",
      },
      {
        url: withBasePath("/forged-icon.png"),
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: withBasePath("/apple-touch-icon.png"),
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [{ url: withBasePath("/icon.svg"), type: "image/svg+xml" }],
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
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${lora.variable}`}
    >
      <head>
        <link rel="icon" href={withBasePath("/icon.svg")} type="image/svg+xml" />
        <link rel="alternate icon" href={withBasePath("/favicon.ico")} />
        <link rel="apple-touch-icon" href={withBasePath("/apple-touch-icon.png")} />
      </head>
      <body className="min-h-screen overflow-y-auto antialiased bg-[#050505]">
        <ProgressProvider>
          <KodaProvider>
            <AppShell>{children}</AppShell>
            <KodaFloatingButton />
          </KodaProvider>
        </ProgressProvider>
      </body>
    </html>
  );
}
