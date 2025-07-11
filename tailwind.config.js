/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'primary': '#ffffff',
        'secondary': '#f6f9fc',
        'tertiary': '#edf2f7',
        'text-primary': '#1a1f36',
        'text-secondary': '#4f566b',
        'text-tertiary': '#697386',
        'accent-primary': '#635bff',
        'accent-secondary': '#7a73ff',
        'accent-tertiary': '#0a2540',
        'border-color': '#e3e8ee',
        'success': '#32d583',
        'warning': '#ffc107',
        'error': '#ff4757',
      },
      animation: {
        'pulse': 'pulse 2s ease-in-out infinite',
        'text-gradient': 'textGradient 8s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        textGradient: {
          'from': { backgroundPosition: '0% 50%' },
          'to': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.6' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)', opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.1)',
        'button': '0 4px 6px rgba(99, 91, 255, 0.1)',
        'button-hover': '0 7px 14px rgba(99, 91, 255, 0.2)',
        'input-focus': '0 0 0 2px rgba(99, 91, 255, 0.2)',
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
        'stripe': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-stripe': 'linear-gradient(135deg, #635bff, #7a73ff)',
      },
    },
  },
  plugins: [],
  safelist: [
    'text-accent-primary',
    'text-accent-secondary', 
    'text-accent-tertiary',
    'border-accent-primary',
    'border-accent-secondary',
    'border-accent-tertiary',
    'bg-accent-primary',
    'bg-accent-secondary',
    'bg-accent-tertiary',
    'stripe-button',
    'stripe-card',
    'stripe-input',
    'stripe-select',
    'stripe-badge',
    'stripe-badge-primary',
    'stripe-badge-success',
    'stripe-badge-warning',
    'stripe-badge-error',
  ]
};