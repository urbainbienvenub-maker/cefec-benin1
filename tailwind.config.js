/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Palette officielle CEFEC BENIN
        primary: {
          DEFAULT: '#005DA8', // Bleu principal
          dark: '#0A3D91',    // Bleu foncé
          light: '#27A9E1'    // Bleu clair
        },
        orange: {
          DEFAULT: '#F7931E'
        },
        solar: {
          DEFAULT: '#FDB913' // Jaune solaire
        },
        surface: {
          light: '#F5F7FA',
          dark: '#0B1220'
        }
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      backgroundImage: {
        'thermal-gradient': 'linear-gradient(90deg, #27A9E1 0%, #005DA8 30%, #F7931E 70%, #FDB913 100%)',
        'thermal-gradient-vertical': 'linear-gradient(180deg, #27A9E1 0%, #005DA8 35%, #F7931E 75%, #FDB913 100%)'
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(10, 61, 145, 0.15)',
        card: '0 4px 24px rgba(10, 61, 145, 0.08)',
        'card-hover': '0 20px 45px -12px rgba(10, 61, 145, 0.25)'
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' }
        }
      }
    }
  },
  plugins: []
}
