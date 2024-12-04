import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "laylo": ["Bokor", "sans-serif"],
      "dancing": ["Dancing", "sans-serif"],
    },
    extend: {
      backgroundImage:{
        "rasm":"url(./src/assets/bg.jpg)",
        "hero": "url(./src/assets/)"
      }
    },
    colors: {
      ...colors,
      primary: "#C61F1F",
      lorem: "gold",
    },
    container:{
      center:true,
      screens:{
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1550px',
      }
    }
  },
  darkMode: "class",
  plugins: [],
}