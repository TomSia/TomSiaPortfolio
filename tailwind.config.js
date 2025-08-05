/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"], // Make sure this matches your file structure
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 10s linear infinite',
        },
      },
    },
    plugins: [],
  }