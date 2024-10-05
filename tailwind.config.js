/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'animate-[swipe-right_300ms_ease-in-out_1_forwards]',
    'animate-[swipe-left_300ms_ease-in-out_1_forwards]',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#322c43',
        secondary: '#693f55',
        tertiary: '#3795BD',
        highlight: '#F7F7F8'
      }
    },
  },
  plugins: [],
}

