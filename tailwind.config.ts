import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "var(--base)",
        "base-two": "var(--basetwo)",
        contrast: "var(--contrast)",
        "contrast-two": "var(--contrasttwo)",
        "contrast-three": "var(--contrastthree)",
        "dust-grey": "var(--dust-grey)",
        "smoky-rose": "var(--smoky-rose)",
        "lilac-ash": "var(--lilac-ash)",
        silver: "var(--silver)",
        "chocolate-plum": "var(--chocolate-plum)",
        "aux-1": "var(--aux-color-1)",
        "aux-2": "var(--aux-color-2)",
        "aux-3": "var(--aux-color-3)",
      },
    },
  },
  plugins: [],
};
export default config;
