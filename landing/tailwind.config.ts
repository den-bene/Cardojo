import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        // Dojo theme colors
        dojo: {
          red: "#DC143C",
          orange: "#FF6B35",
          deepRed: "#8B0000",
          lightOrange: "#FFA07A",
          gold: "#FFD700",
        },
      },
      animation: {
        swing: "swing 3s ease-in-out infinite",
        "lantern-glow": "lantern-glow 2s ease-in-out infinite",
      },
      keyframes: {
        swing: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        "lantern-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 107, 53, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 107, 53, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
