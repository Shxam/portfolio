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
        cyber: {
          void: "#050812",
          base: "#0A0F2C",
          surface: "#0E1538",
          card: "#121B44",
          cardHover: "#182458",
          border: "#1E2A5E",
          borderBright: "#2D3E82",
          white: "#F2F2ED",
          muted: "#8A93B2",
          dim: "#556080",
        },
        terminal: {
          green: "#39FF88",
          greenDim: "#1A8A48",
          greenGlow: "rgba(57, 255, 136, 0.25)",
          cyan: "#00F0FF",
          cyanGlow: "rgba(0, 240, 255, 0.25)",
          violet: "#A855F7",
          amber: "#F59E0B",
          rose: "#F43F5E",
        },
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "Space Mono", "Courier New", "monospace"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["var(--font-orbitron)", "var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(to right, rgba(57, 255, 136, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(57, 255, 136, 0.05) 1px, transparent 1px)",
        "cyber-grid-dense": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
      boxShadow: {
        "terminal-glow": "0 0 25px -5px rgba(57, 255, 136, 0.3)",
        "terminal-glow-lg": "0 0 50px -10px rgba(57, 255, 136, 0.4)",
        "cyan-glow": "0 0 30px -5px rgba(0, 240, 255, 0.3)",
        "card-glass": "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
      },
      animation: {
        "cursor-blink": "blink 1s step-start infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "radar-sweep": "radar 4s linear infinite",
        "scanline": "scanline 8s linear infinite",
        "glitch-flicker": "glitch 3s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        radar: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
