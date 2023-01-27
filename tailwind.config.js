/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {},
    fontFamily:{
      inter:['Inter', "sans-serif"],
      Spectral:['Spectral' , "serif"],
      Poppins:['Poppins',"sans-serif"]
    },
    colors:{
      "brownmixgreen":"#52586B",
      "red":colors.red,
      "white":colors.white,
      "black":colors.black,
      "gray":colors.gray
    
    }
   
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
