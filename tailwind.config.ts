import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlack: '#080807',
        darkLight: '#090908',
        dark: '#141516',
        beige: '#EEE9DB',
        orangeDark: '#783D19',
        orangeLight: '#C4661F',
        greyCustom: '#555555',
        greenLight: '#A9B388',
        greenDark: '#5F6F52',
        pinkDark: '#dd2a7b',
        pinkLight: '#cd486b',
      },
      cursor: {
        beige: "url('/images/cursor.svg'), auto",
      },
      keyframes: {
        'ig-stroke': {
          '0%': { stroke: '#8a3ab8', strokeDasharray: '1' },
          '100%': { stroke: '#dd2a7b', strokeDasharray: '100, 0' },
        },
        'hand-wave': {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(16deg)' },
          '20%': { transform: 'rotate(-4deg)' },
          '30%': { transform: 'rotate(16deg)' },
          '40%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(12deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'border-spin': {
          '0%': { transform: 'rotate(var(--x)) scale(3)' },
          '100%': { transform: 'rotate(var(--y)) scale(3)' },
        },
        wiggle: {
          '0%, 20%, 80%, 100%': { transform: 'rotate(0deg)' },
          '30%, 60%': { transform: 'rotate(-2deg)' },
          '40%, 70%': { transform: 'rotate(2deg)' },
          '45%': { transform: 'rotate(-4deg)' },
          '55%': { transform: 'rotate(4deg)' },
        },
      },
      animation: {
        'ig-stroke': 'ig-stroke 15s ease-out alternate 3s',
        'hand-wave': 'hand-wave 5s ease-out infinite 3s',
        'border-spin': 'border-spin 5s linear infinite',
        wiggle: 'wiggle 1.5s ease-in-out infinite',
      },
      gridTemplateColumns: {
        'auto-fill-70': 'repeat(auto-fill, minmax(70px, 1fr))',
      },
      gridTemplateRows: {
        'auto-fill-70': 'repeat(auto-fill, minmax(70px, 1fr))',
      },
    },
  },
  plugins: [],
};

export default config;
