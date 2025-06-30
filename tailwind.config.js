/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // 1. Font
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // 2. Color palette
      colors: {
        'dark-gray': '#EFEFEF',
        'light-gray': '#FAFAFA',
        'bold-gray': '#E7E7E7',
        'lemon-blue': '#7843E9',
        'rich-black': '#0B0C10',      // for deep text
        'cool-white': '#FFFFFF',      // pure white
      },
      // 3. Shadows for cards / hero
      boxShadow: {
        'card': '0 4px 14px rgba(0, 0, 0, 0.08)',
        'hero': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
      // 4. Border radii
      borderRadius: {
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
