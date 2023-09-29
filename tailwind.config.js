/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-blue': '#0A192F',
      },textColor:{
        'lemon-green': '#48B0A0',
        'light-gray': '#C7D5D1'
      },
      borderColor: {
        'lemon-green': '#48B0A0',
      }
    },
  },
  plugins: [],
}

