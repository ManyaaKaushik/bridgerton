/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      champagne: "var(--color-champagne, #C19A6B)",
      "saddle-brown": "var(--color-saddle-brown, #8B4513)",
      "floral-white": "var(--color-floral-white, #F5F5DC)",
      tan: "var(--color-tan, #D2B48C)",
      "dark-brown": "var(--color-dark-brown, #4A3728)",
      "medium-brown": "var(--color-medium-brown, #6B5344)",
      black: "#000000",
      white: "#FFFFFF",
      transparent: "transparent",
      "black/70": "rgba(0, 0, 0, 0.7)",
      "orange-100": "#FED7AA",
      "orange-200": "#FDBA74",
      "yellow-700": "#B45309",
    },
    fontFamily: {
      playfair: ["'Playfair Display', serif"],
      crimson: ["'Crimson Text', serif"],
      "linden-hill": ["'Linden Hill', serif"],
      metal: ["'Metal', serif"],
      kapakana: ["'Kapakana', serif"],
      luxurious: ["'Luxurious Script', cursive"],
    },
    extend: {
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "fade-in": "fadeIn 1s ease-in",
        "slide-up": "slideUp 0.4s ease-out",
        "fade-in-scale": "fadeInScale 0.6s ease-out",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(193, 154, 107, 0.6), 0 0 40px rgba(193, 154, 107, 0.3)",
          },
          "50%": {
            boxShadow:
              "0 0 30px rgba(193, 154, 107, 0.8), 0 0 50px rgba(193, 154, 107, 0.4)",
          },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInScale: {
          from: {
            opacity: "0",
            transform: "scale(0.95)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
