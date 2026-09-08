/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Gold / bronze temple palette, matched to the reference site.
        gold: {
          50: '#fdf7e8',
          100: '#f8ecc4',
          200: '#f0d98a',
          300: '#e6c15c',
          400: '#dcac41', // primary gold
          500: '#c8912f',
          600: '#a8721f',
          700: '#875a1b',
          800: '#6d491c',
          900: '#5c3d1c',
        },
        cocoa: {
          50: '#f6ede2',
          100: '#e9d3b8',
          200: '#cfa877',
          300: '#a97d4d',
          400: '#7a5530',
          500: '#5a3c20',
          600: '#432c19', // primary deep brown
          700: '#341f12',
          800: '#26160c',
          900: '#180d07', // near-black brown for the gate/blessing screens
        },
        cream: '#f8ecd2',
        vermilion: '#b23a1f',
      },
      fontFamily: {
        hindi: ['"Baloo 2"', '"Noto Sans Devanagari"', 'sans-serif'],
        english: ['"Poppins"', 'sans-serif'],
        display: ['"Yatra One"', '"Baloo 2"', 'cursive'],
      },
      boxShadow: {
        card: '0 8px 26px -10px rgba(52, 31, 18, 0.35)',
        button: '0 10px 24px -8px rgba(200, 145, 47, 0.6)',
        glow: '0 0 60px -10px rgba(220, 172, 65, 0.55)',
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
        petalFall: {
          '0%': { transform: 'translateY(-10px) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(340px) translateX(var(--drift, 0px)) rotate(320deg)', opacity: '0' },
        },
        ringPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(220,172,65,0.45)' },
          '50%': { boxShadow: '0 0 0 18px rgba(220,172,65,0)' },
        },
      },
      animation: {
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        gentleBounce: 'gentleBounce 1.8s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        petalFall: 'petalFall 1.8s ease-in forwards',
        ringPulse: 'ringPulse 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
