/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src//*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        normal: '#ffd9d4',
        urgent: '#d4d7ff',
      },
    },
  },
  plugins: [],
};
