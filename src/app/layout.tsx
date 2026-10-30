import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { withBasePath } from "@/lib/basePath";
import { getPageMetadata } from "./i18n";
import { localeRedirectScript } from "./i18n/localeRedirect";

// Fonts are self-hosted from ./fonts (latin subset of the Google Fonts variable files), so neither
// builds nor visitors depend on Google. Space Grotesk and Inter are variable: one file per weight range.
const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-latin.woff2",
  variable: "--font-space-grotesk",
  weight: "500 700",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/Inter-latin.woff2",
  variable: "--font-inter",
  weight: "400 600",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-latin.woff2",
  variable: "--font-jetbrains-mono",
  weight: "500",
  display: "swap",
});

// The favicon is declared here rather than as app/favicon.ico: that file convention is emitted on every route
// and can't be overridden, whereas pages (e.g. /brainworm) can replace this `icons` entry with their own.
export const metadata: Metadata = {
  ...getPageMetadata("en"),
  icons: { icon: withBasePath("/favicon.ico") },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeRedirectScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
