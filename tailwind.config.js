/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        // primary:"#ffdf00",
        primary:"rgb(0, 162, 255);",
        // secondary:"",
        // accent:"",
        textColor:"#555555"
      }
    },
  },
  plugins: [],
}
