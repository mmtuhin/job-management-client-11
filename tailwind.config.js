/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
      animation: {
        example: 'example 20s linear 2s infinite normal',
      },
      keyframes: {
        example: {
          '0%': { left: '0px', top: '400px' },
          '100%': { left: '0px', top: '-400px' },
        },
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night", "corporate"],
    darkTheme: "night", // name of one of the included themes for dark mode
    
  },
  darkMode: ['class', '[data-theme="night"]']
}

