/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/*.{html,js,jsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      transitionDelay: {
        '400': '400ms',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        ball: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        ball: 'float 3s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwindcss-animate")
  ],
}

