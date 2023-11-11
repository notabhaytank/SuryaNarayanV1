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
        InterDisplay: ['Inter-Display','cursive'],
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