/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      gray: {
        500: '#202024',
        800: '#111114',
      },
      green: {
        400: '#00B37E',
      },
    },
    screens: {
      mobile: { max: '768px' },
      tablet: { max: '915px' },
      'sm-desk': { max: '1024px' },
      'md-desk': { max: '1320px' },
      'lg-desk': '1320px', // min-width: 1320px
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
