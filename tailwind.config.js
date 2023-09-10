/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow:{
        'header': '0px 2px 4px 0px rgba(0, 0, 0, 0.06)',
        'input': '0px 2px 9px 0px rgba(0, 0, 0, 0.05)',
        'listItem': '0px 0px 7px 2px rgba(0, 0, 0, 0.03)',
        'borderItem': '0px 0px 4px 1px rgba(0, 0, 0, 0.10)',
      },
      colors:{
        'textColor': '#111517',
        'lightDark': '#2B3844',
        'midDark': '#202C36'
      }
    },
  },
  plugins: [],
}