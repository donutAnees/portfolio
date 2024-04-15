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
        'windowLines' : "url('./img/windowLines.png')",
      },
      fontFamily: {
        chicago: ['pixChicago'],
      },
    },
  },
  plugins: [],
}

