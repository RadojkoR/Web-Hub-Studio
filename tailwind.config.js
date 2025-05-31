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
        brandColorTwo: "#04c2c9",
        "cyan-950-opacity": "#083344c5"
      },
      width: {
        rem40: "40rem",
        rem35: "35rem",
        rem30: "30rem",
      },
      height: {
        vh80: "80vh",
        vh70: "70vh"
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
  safelist: [
    'bg-cyan-100',
    'bg-violet-100',
    'bg-green-100',
    'bg-blue-100',
    'text-cyan-500',
    'text-violet-500',
    'text-green-500',
    'text-blue-500',
    'border-cyan-500',
    'border-violet-500',
    'border-green-500',
    'border-blue-500',
  ],
}