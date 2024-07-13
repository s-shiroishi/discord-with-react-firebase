/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': {
          100: '#37393f',
          200: '#2d2f36',
          300: '#1f2226',
          400: '#484c52',
          500: '#38393b'
        },
      },
    },
  },
  plugins: [],
}