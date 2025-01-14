/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        8: 'repeat(8, minmax(0, 1fr))'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '2200px'
    }
  },
  plugins: []
}
