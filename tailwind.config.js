/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ['"Barlow"'],
        Inter:['"Inter"']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

