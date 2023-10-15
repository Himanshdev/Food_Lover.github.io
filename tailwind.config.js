/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {

    // screens: {
    //   '2xl': {'max': '1535px'},
    //   // => @media (max-width: 1535px) { ... }

    //   'xl': {'max': '1279px'},
    //   // => @media (max-width: 1279px) { ... }

    //   'lg': {'max': '1023px'},
    //   // => @media (max-width: 1023px) { ... }

    //   'md': {'max': '767px'},
    //   // => @media (max-width: 767px) { ... }

    //   'sm': {'max': '639px'},
    //   // => @media (max-width: 639px) { ... }
    // },

    fontFamily: {
      sans: ["Aachen BT", 'sans-serif'],
      footstyle: ['Montserrat', 'sans-serif'],
    },
    extend: {

      colors: {
        'custom-yellow':'#e58f00',
        'custom-overlay': '#1d1d23',
        'custom-border': '#413422',
        'custom-back': '#1d1d23',
        'custom-thickborder': '#e58f00',
        'custom-footer': '#35353b',
      }

    },
  },
  plugins: [],
}