/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {
      fontSize: {
        base: '16px',
      },
      screens: {
        sm: '385px',
        md: '600px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        background: '#F7F5F3',
        primary: '#4C7C7D',
        text: '#383634',
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
