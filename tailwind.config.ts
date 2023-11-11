import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Heebo: ["Heebo", "Arial"],
    },
    extend: {
      colors: {
        "light-brown": "#6C6464",
        "dark-brown": "#332F2F",
      },
    },
  },
  plugins: [],
};
export default config;
