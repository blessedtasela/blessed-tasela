/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-gray': '#EFEFEF',
        'light-gray': '#FAFAFA',
        'bold-gray': '#E7E7E7',
        'lemon-blue': '#7843E9',
      }, textColor: {
        'lemon-blue': '#7843E9',
        'bold-gray': '#E7E7E7',
        'light-gray': '#FAFAFA',
        'dark-gray': '#EFEFEF',
      },
      borderColor: {
        'dark-gray': '#EFEFEF',
        'bold-gray': '#E7E7E7',
        'lemon-blue': '#7843E9',
        'light-gray': '#FAFAFA',
      },
      colors: {
        'dark-gray': '#EFEFEF',
        'bold-gray': '#E7E7E7',
        'light-gray': '#FAFAFA',
        'lemon-blue': '#7843E9',
      },
    },
  },
  plugins: [],
}

