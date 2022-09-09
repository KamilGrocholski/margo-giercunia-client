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

      animation: {
        'pulse-bg-infinite': 'pulse-bg 1s ease-in infinite'
      },

      keyframes: {
        'pulse-bg': {
          '0%': { backgroundColor: 'var(--tw-gradient-from)' },
          '50%': { backgroundColor: 'var(--tw-gradient-to)' },
          '100%': { backgroundColor: 'var(--tw-gradient-from)' },
        },
      },

      colors: {
        primary: '#FFB718',
        secondary: '#189bff',
        danger: '#C25152',
        success: '#51c264',
        texture: {
          light: '#212838',
          medium: '#121725',
          strong: '#121725',
        },
        rarities: {
          'common': '#ffffff',
          'rare': '#e6cc80',
          'heroic': '#0070dd',
          'legendary': '#ff8000'
      }
      }
    },
  },
  plugins: [],
}