/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065',
        },
        navy: {
          900: '#0B1230',
          950: '#080F2B',
        },
        surface: {
          white: '#FFFFFF',
          lavender: '#F8F6FF',
          purple: '#F2EDFF',
          border: '#E9E3FF',
        },
        secondary: '#475569',
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        sans: ['Jost', 'sans-serif'],
      },
      boxShadow: {
        'soft-purple': '0 10px 30px -5px rgba(109, 40, 217, 0.08), 0 4px 12px -2px rgba(109, 40, 217, 0.04)',
        'hover-purple': '0 20px 40px -10px rgba(109, 40, 217, 0.16), 0 8px 20px -4px rgba(109, 40, 217, 0.08)',
        'banner-glow': '0 25px 60px -15px rgba(109, 40, 217, 0.45)',
        'card-elevated': '0 12px 32px 0 rgba(11, 18, 48, 0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
