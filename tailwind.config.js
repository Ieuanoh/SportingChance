/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./src/**/*.{html,js,css}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        'sc-yellow': '#EAC435',
        'sc-red': '#FB4D3D',
        'sc-blue': '#2AB7CA',
        'black-20': 'rgba(0,0,0,0.2)',
      },
      fontFamily: {
        'header': ['Prism-Regular', 'Carter One'],
        'fancy': ['Carter One', 'cursive'],
        'main': ['Karla', 'sans-serif'],
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
      }
    },
  },
  plugins: [],
} 