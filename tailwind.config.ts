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
        dark: "#090908",
        beige: "#EEE9DB",
        orangeDark: "#783D19",
        orangeLight: "#C4661F",
        greyCustom: "#555555",
        yellow: "#F9EBC7",
        greenLight: "#A9B388",
        greenDark: "#5F6F52",
      },
      cursor: {
        beige: "url('/images/cursor.svg'), auto", // Ensure the path is correct
      },
      keyframes: {
        "ig-stroke": {
          "0%": { stroke: "#8a3ab8", strokeDasharray: "1" },
          "100%": { stroke: "#cd486b", strokeDasharray: "100, 0" },
        },
      },
      animation: {
        "ig-stroke": "ig-stroke 15s ease-out alternate 3s",
      },
    },
  },
  plugins: [],
};
export default config;
