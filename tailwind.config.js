/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /from-\w+|via-\w+|to-\w+/,
    },],
  theme: {
    extend: {
      boxShadow: {
        'border-white': '0 0 4px .05px rgba(255, 255, 255, .3)', // White border shadow
      },
      fontFamily: {
        mali: ['Mali', 'sans-serif'],
        gothic: ['Gothic A1', 'sans-serif'],
        k2d: ['K2D', 'sans-serif'],
        koho: ['KoHo', 'sans-serif'],
        mPlus: ['M PLUS 1', 'sans-serif'],
      },
      colors: {
        primary: '#8800FF',      
        secondary: '#1E1E1E',   
        tertiary: '#141414',     
        quaternary: '#FF33A6',
        red1: '#FF0000',
        blue1: '#0000FF',
      },
      screens: {
        'xsm': '500px',
        'sml': '720px', 
        'med': '1000px', 
        'lrg': '1500px', 
        'xlrg': '1920px', 
      },
    },
  },
  plugins: [],
}
