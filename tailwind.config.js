/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'dist/index.html',
    'dist/index2.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily: {
        body: ['Josefin']
      }
    },
  },
  plugins: [],
}
