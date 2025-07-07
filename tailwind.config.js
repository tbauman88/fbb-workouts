/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Refined triadic harmony palette - beautiful nature-inspired colors
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#7ebfae', // Main teal
          600: '#14b8a6',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e'
        },
        secondary: {
          50: '#f1f4fd',
          100: '#e6ecfb',
          200: '#d1dcf6',
          300: '#b3c3ef',
          400: '#8fa3e5',
          500: '#536daa', // Main blue
          600: '#485f96',
          700: '#3e4e7a',
          800: '#364166',
          900: '#303754',
          950: '#1f2135'
        },
        accent: {
          50: '#f0fdfd',
          100: '#ccfbfb',
          200: '#9af6f7',
          300: '#5eeaec',
          400: '#2dd4d7',
          500: '#54aeb3', // Main teal
          600: '#3d8c91',
          700: '#337075',
          800: '#2d5a5e',
          900: '#294a4f',
          950: '#162e30'
        },
        tertiary: {
          50: '#f6f5f9',
          100: '#efecf4',
          200: '#e1dcea',
          300: '#cdc1db',
          400: '#b49ec7',
          500: '#6d5190', // Main purple
          600: '#5e4678',
          700: '#4f3a63',
          800: '#433253',
          900: '#3a2d46',
          950: '#251a2e'
        },
        neutral: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#eeeeee',
          400: '#d1d5db',
          500: '#9ca3af',
          600: '#6b7280',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712'
        },
        whoop: {
          recovery: '#67AEE6',
          high: '#16EC06',
          moderate: '#FFDE00',
          low: '#FF0026',
          sleep: '#7BA1BB'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        medium: '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        large: '0 10px 40px -12px rgba(0, 0, 0, 0.25)',
        glow: '0 0 20px rgba(59, 156, 246, 0.15)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 0.6s ease-in-out',
        'loading-shimmer': 'loading-shimmer 1.5s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-2px)' },
          '60%': { transform: 'translateY(-1px)' }
        },
        'loading-shimmer': {
          '0%': { backgroundPosition: '-400% 0' },
          '100%': { backgroundPosition: '400% 0' }
        }
      },
      gridTemplateColumns: {
        8: 'repeat(8, minmax(0, 1fr))'
      },
      typography: {
        DEFAULT: {
          css: {
            ul: {
              margin: '0',
              padding: '0'
            },
            'ul > li': {
              marginBottom: '0.5rem'
            },
            '.spaced-list-item': {
              marginTop: '0',
              marginBottom: '1rem',
              paddingInlineStart: '0',
              listStyleType: 'none'
            }
          }
        }
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
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities, theme }) {
      addUtilities({
        // Workout progress utilities
        '.progress-ring': {
          fill: 'none',
          stroke: theme('colors.neutral.300'),
          strokeWidth: '8',
          strokeLinecap: 'round',
          strokeDasharray: '283',
          strokeDashoffset: '283',
          transition: 'stroke-dashoffset 0.5s ease-in-out'
        },
        '.progress-ring-value': {
          stroke: theme('colors.primary.500')
        },

        // Flex utilities for common patterns
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        '.flex-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        '.flex-around': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        },

        // Interaction states
        '.interactive': {
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: theme('boxShadow.medium')
          },
          '&:active': {
            transform: 'translateY(0)'
          }
        },

        // Gradient backgrounds
        '.gradient-primary': {
          background: `linear-gradient(135deg, ${theme('colors.primary.500')}, ${theme('colors.primary.600')})`
        },
        '.gradient-secondary': {
          background: `linear-gradient(135deg, ${theme('colors.secondary.500')}, ${theme('colors.secondary.600')})`
        },
        '.gradient-accent': {
          background: `linear-gradient(135deg, ${theme('colors.accent.500')}, ${theme('colors.accent.600')})`
        },
        '.gradient-whoop': {
          background: 'linear-gradient(135deg, #283339, #101518)'
        }
      })
    }
  ]
}
