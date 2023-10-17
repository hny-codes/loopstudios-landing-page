import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'body': '0.938rem'
      },
      fontFamily: {
        josefin: ['var(--font-josefin)'],
        alata: ['var(--font-alata)'],
      },
    },
    screens: {
      'sm': '690px', 
    }
  },
  plugins: [],
};
export default config;
