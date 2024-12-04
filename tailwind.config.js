/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandColor: "#00AEE6"
      },
      height: {
        vh80: "80vh"
      }
    },
  },
  plugins: [],
}