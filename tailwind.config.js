/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'header': '0px 2px 4px 0px rgba(0, 0, 0, 0.06)'
      },
      colors:{
        'textColor': '#111517' 
      }
    },
  },
  plugins: [],
}