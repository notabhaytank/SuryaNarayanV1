/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        InterDisplay: ['Inter-Display','sans-serif'],
        InterDisplayBold: ['Inter-Display-ExtraBold','sans-serif'],
      },
      fontWeight: {
        InterDisplay: {
          light: 300,
          normal: 400,
          bold: 700,
        },

    },


  },
  plugins: [],
},}