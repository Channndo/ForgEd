import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProgressProvider } from "@/components/providers/ProgressProvider";
import { KodaProvider } from "@/components/koda/KodaProvider";
import { KodaFloatingButton } from "@/components/koda/KodaFab";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ForgEd — Education Reforged",
  description:
    "Free AI-powered education platform. Learn skills in technology, business, insurance, cybersecurity, and future careers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <ProgressProvider>
          <KodaProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <KodaFloatingButton />
          </KodaProvider>
        </ProgressProvider>
      </body>
    </html>
  );
}
