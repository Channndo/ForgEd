import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
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
    icon: "/forged-icon.png",
    apple: "/forged-icon.png",
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
      <body className="texture-bg min-h-full flex flex-col antialiased relative">
        <ProgressProvider>
          <KodaProvider>
            <Header />
            <main className="relative z-10 flex-1">{children}</main>
            <Footer />
            <KodaFloatingButton />
          </KodaProvider>
        </ProgressProvider>
      </body>
    </html>
  );
}
