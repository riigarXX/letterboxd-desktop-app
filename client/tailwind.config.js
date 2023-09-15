/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "darkModeColors": {
        "orange": "#ffa34d",
        "ligthOrange": "#ffaa50",
        "background": "#131e25",
        "text": "#ffffff",
        "buttonBackground": "#ffaa50",
        "buttonText": "#131e25",
        "link": "#ffa34d",
        "linkHover": "#ffaa50"
      },
      "ligthModeColors": {
        "orange": "#FFC266",
        "ligthOrange": "#FFCB77",
        "background": "#FCE588",
        "text": "#131e25",
        "buttonBackground": "#FFCB77",
        "buttonText": "#131e25",
        "link": "#FFC266",
        "linkHover": "#FFCB77"

      }
    },
    borderRadius: {
      sm: '4px'
    },
    extend: {},
  },
  plugins: [],
}

