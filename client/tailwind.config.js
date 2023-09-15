/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      orange: '#ffa34d',
      ligthOrange: '#ffaa50',
      dark: "#131e25"
    },
    borderRadius:{
      sm:'4px'
    },
    extend: {},
  },
  plugins: [],
}

