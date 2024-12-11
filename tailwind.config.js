/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        brandColor: "#00AEE6",
        brandColorTwo: "#04c2c9"
      },
      width: {
        rem40: "40rem",
        rem35: "35rem",
        rem30: "30rem",
      },
      height: {
        vh80: "80vh"
      },
      screens: {
        xs: '490px',
        xxs: '380px',
        xxxs: '320px',
        xxxxs: '280px'
      },
      rotate: {
        6: '6deg',
        45: '45deg'
        // Dodaj druge vrednosti po potrebi
      }
    },
  },
  plugins: [
    function({ addComponents, theme}) {
      addComponents({
        '.container-80': {
          width: '80%',
          margin: ' 0 auto',
          'max-width': "1500px"
        }
      })
    }
  ],
}