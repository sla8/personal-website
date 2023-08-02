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
      textblue: '#224694',
      black: '#121212',
      white: '#FFFFFF',
      grey: '#E5E5E5',
      darkblue: '#1D315C',
      yellow: '#FCA311',
    },
  },
  plugins: [],
};
