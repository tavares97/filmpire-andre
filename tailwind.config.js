/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '600px',
      '2xl': '1950px',
      '3xl': '3000px',
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
});
