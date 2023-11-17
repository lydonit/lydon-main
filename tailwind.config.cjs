/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['sans-serif']
      },
      colors: {
        fg1: '#366c71',
        fg2: '#2A5357'
      }
    },
  },
  plugins: [],
}
