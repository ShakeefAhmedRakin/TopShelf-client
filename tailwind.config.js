/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // LIGHT MODE
        background: "#F5F5F5",
        primaryLight: "#F05454",
        secondary: "#30475E",
        // DARK MODE
        backgroundDark: "#0a0a0a",
        primaryLightDark: "#A90F0F",
        secondaryDark: "#A1B8CE",
      },

      fontFamily: {
        Inter: ["Inter"],
      },
    },
  },
  plugins: [require("daisyui")],
};
