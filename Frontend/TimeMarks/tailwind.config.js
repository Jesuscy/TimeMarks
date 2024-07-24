/** @type {import('tailwindcss').Config} */
const { nextui, colors } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      fontFamily:{
        rubik:['Rubik','Roboto']
      },
      colors:{
        customBlue: '#134B70'
      
      }

    },
  },
  plugins: [nextui()],
}