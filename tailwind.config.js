/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        jet: "hsl(0, 0%, 22%)",
        onyx: " hsl(240, 1%, 17%)",
        "eerie-black-1": " hsl(240, 2%, 13%)",
        "eerie-black-2": "hsl(240, 2%, 12%)",
        "smoky-black": "hsl(0, 0%, 7%)",
        "white-1": "hsl(0, 0%, 100%)",
        "white-2": "hsl(0, 0%, 98%)",
        "orange-yellow-crayola": "hsl(45, 100%, 72%)",
        "vegas-gold": "hsl(45, 54%, 58%)",
        "light-gray": "hsl(0, 0%, 84%)",
        "light-gray-70": "hsla(0, 0%, 84%, 0.7)",
        "bittersweet-shimmer": "hsl(0, 43%, 51%)",
      },
      boxShadow: {
        "shadow-1": "-1px 1px 2px -1px hsl(45, 54%, 58%)",
        "shadow-2": "0 25px 50px  hsl(45, 54%, 58%)",
        "shadow-3": "0 0 0 4px hsl(0, 0%, 22%)",
        "shadow-4": "0 2px 5px 1px hsla(0, 0%, 0%, 0.15)",
        "shadow-5": "0 1px 1px 1px hsl(45, 54%, 58%)",
      },
      transitionDuration: {
        slow: "1600ms",
        normal: "300ms",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        elastic: "cubic-bezier(0.94, 0.11, 0.35, 1)",
      },
    },
  },

  plugins: [],
};
