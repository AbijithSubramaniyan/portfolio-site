/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      inter: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
    },
    plugins: [
    require('tailwind-scrollbar-hide')
  ],
      colors: {
        navy: "#0a192f",
        slate: {
          100: "#f8fafc",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        teal: {
          400: "#64ffda",
        }
      },
    },
  },
  plugins: [],
}
