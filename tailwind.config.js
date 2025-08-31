/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aviation-blue': '#1e40af',
        'aviation-light-blue': '#3b82f6',
        'aviation-dark': '#1e293b',
        'success-green': '#10b981',
        'warning-orange': '#f59e0b',
      },
      fontFamily: {
        'aviation': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 