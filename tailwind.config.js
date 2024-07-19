/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./views/**/*.{html,ejs,js}"],
  theme: {
    extend:{
      colors: {
          textBrown: "#803D3B"
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

