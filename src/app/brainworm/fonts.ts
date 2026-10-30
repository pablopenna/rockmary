import localFont from "next/font/local";

// Pixel font used only on the Brainworm page. It sits in public/bw next to the page's other assets.
export const monogram = localFont({
  src: "../../../public/bw/monogram-extended.ttf",
  variable: "--font-monogram",
  display: "swap",
});
