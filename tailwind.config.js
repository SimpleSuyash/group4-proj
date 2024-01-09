/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
    './public/**/*.{js,html,jsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        logo:['Great Vibes'],
        heading: ['Kalnia'],
        body: ['Poppins'],
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotate(0deg)','z-index': 0 },
          '25%': { transform: 'rotate(20deg)','z-index': 1 },
          '50%': { transform: 'rotate(-20deg)','z-index': 2 },
          '75%': { transform: 'rotate(0deg)','z-index': 3 },
          '100%': { transform: 'rotate(0deg)','z-index': 0 }
        }
      },
      animation: {
        'fliping-card1':'flip 4s linear infinite',
        'fliping-card2':'flip 4s linear infinite 1s',
        'fliping-card3':'flip 4s linear infinite 2s',
        'fliping-card4':'flip 4s linear infinite 3s'
      },
      gridTemplateColumns: {
        'auto-fill' : 'repeat(auto-fill, minmax(18em, 1fr))'
      }
    }
  },
  plugins:[],
}

