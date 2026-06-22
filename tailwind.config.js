/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FBF9F4',
          100: '#F4F0E6',
          200: '#EAE3D2',
        },
        charcoal: {
          DEFAULT: '#171519',
          800: '#1F1C21',
          700: '#2A262C',
        },
        walnut: {
          DEFAULT: '#6B4A33',
          dark: '#4A3122',
        },
        brass: {
          DEFAULT: '#B68C4E',
          light: '#D4AF74',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        label: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
