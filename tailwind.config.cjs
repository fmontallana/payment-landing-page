/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'accent': '#E9DCFF',
      'dark': '#1E1E1E',
      'secondary': '#2B2D3D',
      'primary': '#FFFFFF',
    },
  },
  plugins: [],
}