/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'onest':["Onest", "sans-serif"],
      },
      colors:{
        "primary":"#F26922",
        "secondary":"#E4E4E7"
      }
    },
  },
  plugins: [],
}

