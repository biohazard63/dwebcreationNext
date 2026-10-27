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
        ink: {
          DEFAULT: '#12110F',
          800: '#1C1B18',
          700: '#2A2825',
          600: '#3D3A35',
        },
        paper: {
          DEFAULT: '#F6F3EE',
          50: '#FBFAF7',
        },
        line: {
          DEFAULT: '#E3DED5',
          dark: '#33302B',
        },
        stone: {
          DEFAULT: '#6B665D',
          light: '#A39E94',
        },
        copper: {
          DEFAULT: '#B85C2A',
          dark: '#9A4A1F',
          light: '#E0915F',
        },
        // Jetons utilisés par les composants de formulaire
        border: '#E3DED5',
        input: '#D8D2C7',
        ring: '#B85C2A',
        background: '#FBFAF7',
        foreground: '#12110F',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        grotesk: ['var(--font-grotesk)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#3D3A35',
            '--tw-prose-headings': '#12110F',
            '--tw-prose-links': '#9A4A1F',
            '--tw-prose-bold': '#12110F',
            h2: { fontFamily: 'var(--font-display)', fontWeight: '400' },
          },
        },
      },
    },
  },
  plugins: [typography],
}
