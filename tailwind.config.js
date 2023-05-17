/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3485FE',
        'secondary': '#67A3FE',
        'terciary': '#CCE0FF',
        'darkBlue': '#001433',
        'small-button': "#99C2FF"
      },
      height: {
        'panel': '50rem'
      },
      margin: {
        'boton': '28rem',
      },
      backgroundImage: {
        'backgroundPrimary': "url('src/assets/background.png')"
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

