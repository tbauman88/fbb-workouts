/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Modern fitness-focused color palette
        primary: {
          50: '#eff8ff',
          100: '#dbeffe',
          200: '#bfe3fe',
          300: '#93d2fd',
          400: '#60b8fa',
          500: '#3b9cf6', // Vibrant blue
          600: '#2681eb',
          700: '#1e6ad8',
          800: '#1f56af',
          900: '#1e4a8a',
          950: '#172f54',
        },
        secondary: {
          50: '#fef7ee',
          100: '#fdead6',
          200: '#f9d1ad',
          300: '#f5b378',
          400: '#ef8a41',
          500: '#ea6d1c', // Main brand orange
          600: '#dc5212',
          700: '#b73f11',
          800: '#933316',
          900: '#772d15',
          950: '#401408',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80', // Success green
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -12px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 20px rgba(59, 156, 246, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-2px)' },
          '60%': { transform: 'translateY(-1px)' },
        },
      },
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
              listStyleType: 'none',
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
