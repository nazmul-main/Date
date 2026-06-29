import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundParticles } from "@/components/layout/BackgroundParticles";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Date With Me ❤️",
  description: "Someone special wants to spend time with you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} font-sans antialiased min-h-screen bg-gradient-romance transition-colors duration-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundParticles />
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          <main className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-center p-4">
            {children}
            <footer className="absolute bottom-4 w-full text-center text-xs text-foreground/50 font-medium">
              &copy; {new Date().getFullYear()} NAZMUL. All rights reserved.
            </footer>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
