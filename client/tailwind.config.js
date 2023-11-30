/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkModeColors: {
        orange: "#ffa34d",
        ligthOrange: "#ffaa50",
        background: "#131E25",
        text: "#ffffff",
        buttonBackground: "#ffaa50",
        buttonText: "#131e25",
        link: "#ffa34d",
        linkHover: "#ffaa50",
        card: "#1a2329",
      },
      ligthModeColors: {
        red: "#FDB5A6",
        ligthRed: "#ffd7e9",
        background: "#E96955",
        text: "#1A1A1A",
        buttonBackground: "#FFs7E9",
        buttonText: "#1A1A1A",
        link: "#E96955",
        linkHover: "#FFB699",
        card: "#dea1a0",
      },
    },
    fontFamily: {
      montserrat: ['"Montserrat"'],
    },
    borderRadius: {
      sm: "4px",
      md: "8px",
      full: "50%",
    },
    extend: {},
  },
  plugins: [],
};
