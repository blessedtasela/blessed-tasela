/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-blue': '#0A192F',
        'light-gray': '#C7D5D1',
        'lemon-green': '#48B0A0',
      },textColor:{
        'lemon-green': '#48B0A0',
        'light-gray': '#C7D5D1',
        'dark-blue': '#0A192F',
      },
      borderColor: {
        'lemon-green': '#48B0A0',
        'light-gray': '#C7D5D1',
      },
      colors: {
        'dark-blue': '#0A192F',
        'light-gray': '#C7D5D1',
        'lemon-green': '#48B0A0',
      },
    },
  },
  plugins: [],
}

