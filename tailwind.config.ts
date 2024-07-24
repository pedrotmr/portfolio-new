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
        darkLight: '#090908',
        dark: '#141516',
        beige: '#EEE9DB',
        orangeDark: '#783D19',
        orangeLight: '#C4661F',
        greyCustom: '#555555',
        // yellow: '#F9EBC7',
        greenLight: '#A9B388',
        greenDark: '#5F6F52',
        pinkDark: '#DD2A7B',
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
      },
      animation: {
        'ig-stroke': 'ig-stroke 15s ease-out alternate 3s',
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
