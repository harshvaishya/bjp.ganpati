/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // A warm festive palette: deep vermilion, marigold, temple gold, deep maroon.
        maroon: {
          50: '#fbf3ee',
          100: '#f3e0d3',
          200: '#e3bda1',
          300: '#cf9268',
          400: '#b96a3d',
          500: '#8f3f22',
          600: '#722f19',
          700: '#5c2515', // primary deep maroon
          800: '#471c10',
          900: '#33130b',
          950: '#210b06',
        },
        marigold: {
          50: '#fff8ea',
          100: '#ffedc2',
          200: '#ffdb8a',
          300: '#ffc352',
          400: '#ffab2e', // primary marigold
          500: '#f88f0f',
          600: '#dc6c08',
          700: '#b64d0b',
          800: '#933c10',
          900: '#793310',
        },
        vermilion: '#c8452b',
        temple: '#fff9f0',
        sandal: '#fdf1de',
      },
      fontFamily: {
        hindi: ['"Baloo 2"', '"Noto Sans Devanagari"', 'sans-serif'],
        english: ['"Poppins"', 'sans-serif'],
        display: ['"Yatra One"', '"Baloo 2"', 'cursive'],
      },
      boxShadow: {
        card: '0 6px 24px -8px rgba(87, 37, 21, 0.25)',
        button: '0 8px 20px -6px rgba(200, 69, 43, 0.55)',
      },
      backgroundImage: {
        'diya-glow': 'radial-gradient(circle at 50% 0%, rgba(255,171,46,0.25), transparent 60%)',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        gentleBounce: 'gentleBounce 1.8s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
