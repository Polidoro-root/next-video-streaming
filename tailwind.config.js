const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#F41B3B',
      secondary: '#1EBC99',
      tertiary: '#F9CC0D',
      quaternary: '#1884F7',
      black: {
        full: '#0A070B',
        100: '#807E81',
        300: '#4F4E50',
        500: '#363536',
      },
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['serif'],
    },
    screens: {
      xs: '320px',
      ...(defaultTheme?.screens || {}),
    },
    extend: {
      fontSize: {
        'header-1': ['4rem', { lineHeight: '5.5rem' }],
        'header-2': ['2.5rem', { lineHeight: '3rem' }],
        'header-3': ['2.375rem', { lineHeight: '5.5rem' }],
        'header-4': ['2rem', { lineHeight: '2.5rem' }],
        subtitle: ['1.5rem', { lineHeight: '2rem' }],
        'subtitle-2': ['1.25rem', { lineHeight: '2rem' }],
      },
    },
  },
  plugins: [],
}
