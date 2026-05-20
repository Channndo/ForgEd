import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
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

export const metadata: Metadata = {
  title: "ForgEd — Learn Skills That Matter.",
  description:
    "Free AI-powered education platform. Learn skills in technology, business, insurance, cybersecurity, and future careers.",
  icons: {
    icon: withBasePath("/forged-icon.png"),
    apple: withBasePath("/forged-icon.png"),
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
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} h-full`}
    >
      <body className="h-full overflow-hidden antialiased bg-[#050505]">
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
