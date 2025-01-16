/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'custom-gray': 'rgba(54, 54, 54, 0.17)', // Add custom border color
        'black-full': 'rgba(0, 0, 0, 1)', 
      },
      fontFamily: {
        diplomata: ['"Diplomata SC"', 'cursive'], // Add Diplomata SC
        gidugu: ['"Gidugu"', 'sans-serif'],       // Add Gidugu
        inter: ['"Inter"', 'sans-serif'],         // Add Inter
        manrope: ['"Manrope"', 'sans-serif'],     // Add Manrope
      },
    },
  },
  plugins: [],
};
