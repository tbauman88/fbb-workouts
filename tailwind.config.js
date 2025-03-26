/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        8: 'repeat(8, minmax(0, 1fr))'
      },
      typography: {
        DEFAULT: {
          css: {
            ul: {
              margin: '0',
              padding: '0',
            },
            'ul > li': {
              marginBottom: '0.5rem',
            },
            '.spaced-list-item': {
              marginTop: '0',
              marginBottom: '1rem',
              paddingInlineStart: '0',
              listStyleType: 'none', // This removes the bullet.
            },
          },
        },
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px', 
      '2xl': '2200px'
    }
  },
  plugins: [require('@tailwindcss/typography')]}
