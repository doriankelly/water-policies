/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3485FE',
        'secondary': '#67A3FE',
        'terciary': '#CCE0FF',

      },
      height: {
        'panel': '50rem'
      },
      margin: {
        'boton': '28rem',
      },
      backgroundImage: {
        'backgroundZelda': "url('src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
}

