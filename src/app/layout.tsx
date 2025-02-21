import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/lib/store/provider/StoreProvider";
import AOSProvider from "@/lib/aos/AOSProvider";
import Header from "@/components/shared/header/Header";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OBRIO",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.variable} min-h-screen`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light">
          <StoreProvider>
            <AOSProvider>
              <Header data-aos="fade-up" />
              {children}
            </AOSProvider>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
