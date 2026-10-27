const typography = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1240px' },
    },
    extend: {
      colors: {
        night: {
          DEFAULT: '#07070A',
          800: '#0E0E14',
          700: '#16161F',
          600: '#22222E',
        },
        mist: {
          DEFAULT: '#A1A1B5',
          dark: '#6E6E82',
        },
        flame: '#FF7A30',
        blush: '#FF3D7F',
        violet: '#8B5CF6',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        grotesk: ['var(--font-grotesk)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
}
