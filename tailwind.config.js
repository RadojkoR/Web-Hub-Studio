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
        rem30: "30rem",
        rem40: "40rem",
      },
      height: {
        vh80: "80vh"
      }
    },
  },
  plugins: [],
}