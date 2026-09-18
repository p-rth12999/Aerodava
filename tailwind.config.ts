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
        border: "var(--border)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        medical: {
          green: "#0B4A3F",
          teal: "#317C71",
          light: "#F7F9F8",
          dark: "#1A2523",
        },
        triage: {
          low: "#10B981", // green
          moderate: "#F59E0B", // amber
          high: "#EF4444", // red
        }
      },
    },
  },
  plugins: [],
};
export default config;
