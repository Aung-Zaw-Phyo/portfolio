/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1444px',
      },
    },
  },
  plugins: [],
}
