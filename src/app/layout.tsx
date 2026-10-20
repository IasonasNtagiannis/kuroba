import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const varta = localFont({
  src: "./fonts/varta-latin.woff2",
  variable: "--font-varta",
  weight: "400 700",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kuroba | Web apps, designed and built end to end",
  description:
    "Kuroba is a Greece-based software team. Product design, full-stack engineering and cloud infrastructure for startups and scale-ups.",
};

export const viewport: Viewport = {
  themeColor: "#181818",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${varta.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-[100dvh] font-sans">{children}</body>
    </html>
  );
}
