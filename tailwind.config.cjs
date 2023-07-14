/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        grey: "hsl(231, 7%, 60%)",
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        "gradient-rose":"#ff5478",
        "gradient-rose-opacity":"#ff547936"
      },
      fontFamily: {
        robotoBold: ["roboto-bold", "serif", "arial"],
        robotoRegular: ["roboto-regular", "serif", "arial"],
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "scale(.1)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "up-to-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-150%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "down-to-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(150%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in .3s backwards",
        "up-to-down": "up-to-down .3s backwards",
        "down-to-up": "down-to-up .3s backwards",
      },
    },
  },
  plugins: [],
};
