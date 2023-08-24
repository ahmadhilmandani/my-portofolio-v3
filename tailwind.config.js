/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-beige': {
          50: '#F5F4EF',
          100: 'B8B5A6'
        },
        'custom-black': {
          50: '#23252A',
          100: '#1E1E1E'
        },
        'custom-green': {
          50: 'D0EB7C',
          100: '00DC82'
        }
      }
    },
  },
  plugins: [],
}

