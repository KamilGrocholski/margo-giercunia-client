/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    container: {
      screens: {
        lg: '1200px'
      }
    },

    extend: {
      colors: {
        primary: '#FFB718',
        secondary: '#189bff',
        danger: '#C25152',
        success: '#51c264',
        texture: {
          light: '#212838',
          medium: '#121725',
          strong: '#121725',
        }
      }
    },
  },
  plugins: [],
}