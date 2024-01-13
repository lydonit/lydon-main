/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['sans-serif']
      },
      colors: {
        // Rose-pine
        // surface: '#fffaf3',
        // overlay: '#fffaf3',
        // text: '#575279',

        surface: '#ffffff',
        overlay: '#ffffff',
        text: '#000000',
        primary: '#286983'
        // primary: '#366c71'
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
}
