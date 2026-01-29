import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F19",
        foreground: "#FFFFFF",
      },
    },
  },
  plugins: [
    function ({ addVariant }: { addVariant: (n: string, s: string) => void }) {
      addVariant('light', '.light &');
    },
  ],
};
export default config;

