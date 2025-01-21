import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom_gray: "#E5E5E5",
        //custom_purple: "#5932e6"
        //custom_purple: "#ff6a6a",
	custom_purple: "#ff7878"
      },
    },
  },
  plugins: [],
} satisfies Config;
