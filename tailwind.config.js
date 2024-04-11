/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '200x200': '200px 200px',
      },
      backgroundImage: {
        'hero': "url('./img/hero.jpg')",
      },
      fontFamily: {
        chicago: ['pixChicago'],
      },
    },
  },
  plugins: [],
}

