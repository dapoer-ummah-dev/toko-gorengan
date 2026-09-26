/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FFF9F0',
          soft: '#FFF3E1',
        },
        brown: {
          50: '#F7EEE6',
          100: '#EEDDC9',
          200: '#DCB98F',
          300: '#C79760',
          400: '#A9713F',
          500: '#8A5A30',
          600: '#6B4423',
          700: '#4A2C17',
          800: '#331D0F',
          900: '#221208',
        },
        chili: {
          50: '#FDEEE8',
          100: '#FBDACC',
          400: '#DD5A2C',
          500: '#C1440E',
          600: '#A3380B',
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 12px 24px -8px rgba(74, 44, 23, 0.25)',
      },
    },
  },
  plugins: [],
};
