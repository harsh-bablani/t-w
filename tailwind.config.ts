import type { Config } from "tailwindcss";

/**
 * Design tokens — derived from the Tripex World logo.
 * lagoon = "TRIPEX" teal, atlas = "WORLD" blue, slate = tagline grey.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lagoon: { DEFAULT: "#04A9B9", deep: "#03808D", soft: "#BFEBEF" },
        atlas: { DEFAULT: "#1C5A8B", deep: "#123F65" },
        abyss: "#0A2338",
        slate: "#3A4356",
        mist: "#EEF3F5",
        frost: "#F7FAFB",
        sand: "#E8DCC8",
      },
      fontFamily: {
        display: ['"Instrument Serif"', "Georgia", '"Times New Roman"', "serif"],
        sans: ["Manrope", "system-ui", "-apple-system", '"Segoe UI"', "Roboto", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.4rem, 9vw, 9.5rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.8rem, 6vw, 6rem)", { lineHeight: "0.96", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(2.2rem, 4.2vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.75rem, 2.6vw, 2.5rem)", { lineHeight: "1.08" }],
      },
      maxWidth: { site: "1440px" },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.22, 1, 0.36, 1)",
        curtain: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
