tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "gradient-blue":
          "linear-gradient(280.4deg, #09AEFF 11.18%, #6E60EF 105.85%)",
      },
      colors: {
        clifford: "#da373d",
        btnAccent: "#519FDE",
        primaryBlue: "#2AA0DA",
        secondaryFont: "#444444",
        'navy-900': '#0A1A2F',
      },
      animation: {
        "scroll-left": "scroll-left 40s linear infinite",
        "scroll-right": "scroll-right 40s linear infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
};
