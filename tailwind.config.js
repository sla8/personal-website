/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeDarkBlue: {
          950: '#14213D'
        }
      }
    },
  },
  plugins: [],
}

