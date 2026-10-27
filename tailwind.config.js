const typography = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        // Couleurs qui suivent le thème (clair / sombre), définies dans app/globals.css :
        // « night » = fond, « white » = texte principal
        night: {
          DEFAULT: 'rgb(var(--bg) / <alpha-value>)',
          // Teintes fixes pour les cadres ordinateur / téléphone
          700: '#16161F',
          600: '#22222E',
        },
        white: 'rgb(var(--fg) / <alpha-value>)',
        mist: {
          DEFAULT: 'rgb(var(--mist) / <alpha-value>)',
          dark: 'rgb(var(--mist-dark) / <alpha-value>)',
        },
        // Blanc fixe (texte sur dégradé, mini-sites des démos)
        snow: '#FFFFFF',
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
