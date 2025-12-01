/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#1e3a8a',
          orange: '#f97316',
          yellow: '#facc15',
          red: '#ef4444',
          black: '#0f172a',
        }
      }
    }
  },
  plugins: [],
}