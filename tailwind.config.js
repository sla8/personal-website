/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: {
        1400: '1400',
      },
    },
    colors: {
      textwhite: '#E5E5E5',
      textblack: '#212427',
      textgreen: '#446D6E',
      black: '#121212',
      white: '#FFFFFF',
      grey: '#F7F7F7',
      darkgrey: '#363636',
      green: '#548687',
      red: '#B0413E',
    },
  },
  plugins: [],
};
