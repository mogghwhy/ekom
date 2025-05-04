/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'eko-olive': '#3d550c',
        'eko-lime': '#81b622',
        'eko-yellow': '#ecf87f',
        'eko-green': '#59981a',
      },
    },
  },
  plugins: [],
};