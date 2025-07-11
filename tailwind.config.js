/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'dark-primary': '#0F1116',
        'dark-secondary': '#171923',
        'dark-tertiary': '#222736',
        'text-primary': '#E0E0E0',
        'text-secondary': '#B3B3B3',
        'neon-green': '#00E589',
        'neon-cyan': '#00D1B2',
        'neon-pink': '#E6007A',
        'border-dark': '#2D3748',
      },
      animation: {
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 229, 137, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(0, 229, 137, 0.6), 0 0 35px rgba(0, 229, 137, 0.3)' },
        },
        textGlow: {
          'from': { textShadow: '0 0 10px rgba(0, 229, 137, 0.7), 0 0 20px rgba(0, 229, 137, 0.5)' },
          'to': { textShadow: '0 0 20px rgba(0, 229, 137, 0.8), 0 0 30px rgba(0, 229, 137, 0.6), 0 0 40px rgba(0, 229, 137, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.6' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)', opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 15px 30px rgba(0, 0, 0, 0.25)',
        'button': '0 4px 10px rgba(0, 229, 137, 0.2)',
        'button-hover': '0 8px 20px rgba(0, 229, 137, 0.3)',
        'input-focus': '0 0 0 3px rgba(0, 229, 137, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
        md: '8px',
        lg: '12px',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
  safelist: [
    'text-neon-green',
    'text-neon-cyan', 
    'text-neon-pink',
    'border-neon-green',
    'border-neon-cyan',
    'border-neon-pink',
    'neon-glow',
    'neon-glow-cyan',
    'enhanced-card',
    'btn-primary',
    'btn-secondary',
  ]
};