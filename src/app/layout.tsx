import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { PixelNavbar } from "@/components/pixel-navbar";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "I-WILL Dashboard",
  description: "Interactive Rive Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pressStart2P.variable} ${vt323.variable} antialiased font-mono`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PixelNavbar />
          <div className="pt-20">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
