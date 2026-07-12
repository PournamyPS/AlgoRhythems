/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // deep magenta-plum instead of near-black — still dark enough for contrast,
        // but reads as a color, not "off"
        ink: {
          950: "#2a0a1e",
          900: "#380f28",
          800: "#481533",
          700: "#5a1d40",
          600: "#6e254e",
        },
        // saffron/marigold, pushed more saturated and warm
        violet: {
          400: "#ffb347",
          500: "#ff8c1a",
          600: "#f2670a",
          700: "#cc5200",
        },
        // peacock teal, brightened
        cyan: {
          300: "#4de8d1",
          400: "#14cbb0",
          500: "#0aa693",
        },
        // new: ruby/magenta — the missing third accent, this is what will
        // make it feel "festival" rather than "muted dashboard"
        rose: {
          400: "#ff5ca8",
          500: "#ec2f7b",
          600: "#c81a63",
        },
        gold: {
          400: "#ffd166",
          500: "#f4b942",
        },
        maroon: {
          500: "#7a1f2b",
          600: "#5e1520",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 50px -8px rgba(255, 140, 26, 0.6)",
        "glow-cyan": "0 0 50px -8px rgba(20, 203, 176, 0.55)",
        "glow-rose": "0 0 50px -8px rgba(236, 47, 123, 0.55)",
        card: "0 8px 30px rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 15% 0%, rgba(255,140,26,0.35), transparent 45%), radial-gradient(circle at 85% 15%, rgba(20,203,176,0.28), transparent 45%), radial-gradient(circle at 50% 100%, rgba(236,47,123,0.22), transparent 50%)",
      },
      borderRadius: { xl2: "20px", xl3: "24px" },
      keyframes: {
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(255,140,26,0.55)" },
          "100%": { boxShadow: "0 0 0 18px rgba(255,140,26,0)" },
        },
      },
      animation: { pulseRing: "pulseRing 1.4s ease-out infinite" },
    },
  },
  plugins: [],
};
