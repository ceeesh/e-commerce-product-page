/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#FF6E00',
        'darkgray': '#747C8B',
        'lightgray': '#ededed',
        'gray': '#ABB2BF',
        'opac': '#121212'
      }, 
      animation: {
        'slideDown': 'slide-down 400ms forwards;'
      }
    },
  },
  plugins: [],
}
