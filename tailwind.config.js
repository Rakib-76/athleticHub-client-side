/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // apnar source folder & file extension gulo
    "./public/index.html",        // jodi public index thake
  ],
  darkMode: 'class', // dark mode toggle korar jonno 'class' use korbo
  theme: {
    extend: {
      colors: {
        primary: '#f55a36',
        secondary: '#2b2c58',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
