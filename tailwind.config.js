/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#CC7C32",
        blue: "#71B4BE",
        orange: "#FF6A00",
        bg: "#F2F3F4"
      },
      fontFamily: {
        body: ['Manrope'],
      }
    },
    gridTemplateRows: {
      'custom': 'repeat(3, minmax(0, 250px))',
    }
  },
  plugins: [],
}