/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1E4BBC',
        primaryDark: '#143896',
        primaryLight: '#EBF1FF',
        hmttBlue: '#1E4BBC',
        hmttBlack: '#000000',
        hmttWhite: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
