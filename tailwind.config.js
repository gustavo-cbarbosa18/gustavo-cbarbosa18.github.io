/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nu-purple': '#8a05be',
        'nu-purple-dark': '#6b0495',
        'nu-purple-light': '#a020f0',
      },
    },
  },
  plugins: [],
}

