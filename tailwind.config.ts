import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary : "#B7292E",
        gray: "rgba(69, 69, 69, 1)"
      },
      borderWidth: {
        1: "1px"
      },
      fontFamily: {
        roboto: ["Roboto", "serif"]
      },
      backgroundColor: {
        abu: "rgba(136, 137, 136, 0.2)"
      }
    },
  },
  plugins: [],
} satisfies Config;
