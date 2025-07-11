/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
      },
      colors: {
        'dark-primary': '#121212',
        'dark-secondary': '#1E1E1E',
        'dark-tertiary': '#2A2A2A',
        'text-primary': '#E0E0E0',
        'text-secondary': '#B3B3B3',
        'neon-green': '#00CC7D',
        'neon-cyan': '#0CC6A0',
        'neon-pink': '#CC0066',
        'border-dark': '#333333',
      },
      animation: {
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 10px var(--accent-primary)' },
          '50%': { boxShadow: '0 0 20px var(--accent-primary), 0 0 30px var(--accent-primary)' },
        },
        textGlow: {
          'from': { textShadow: '0 0 10px var(--accent-primary), 0 0 20px var(--accent-primary)' },
          'to': { textShadow: '0 0 20px var(--accent-primary), 0 0 30px var(--accent-primary), 0 0 40px var(--accent-primary)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.6' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
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
  ]
};