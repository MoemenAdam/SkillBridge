/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xsm': '320px',
        'xsm2': '350px',
        'lg2':'900px',
      },
      colors:{
        primary: '#FF9500',
      },
      brightness: {
        '25': '25%',
      },
    },
  },
  plugins: [],
}

