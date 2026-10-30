import localFont from "next/font/local";

// Chinese font used only on /zh. It is a subset holding just the characters in zh.json, so re-run
// scripts/subset-zh-font.py after changing the translation.
export const notoSansSC = localFont({
  src: "../fonts/NotoSansSC-zh.woff2",
  variable: "--font-noto-sans-sc",
  weight: "400 700",
  display: "swap",
});
