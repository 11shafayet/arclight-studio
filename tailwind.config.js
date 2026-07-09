/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#121314',
        paper: '#f2f2ee',
      },
      fontFamily: {
        display: ['Arial Narrow', 'Inter Tight', 'Arial', 'sans-serif'],
        sans: ['Inter', 'Arial', 'sans-serif'],
        geist: ['Geist', 'Geist Placeholder', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
        mono: ['Roboto Mono', 'Courier New', 'monospace'],
      },
      boxShadow: {
        soft: '0 18px 70px rgba(20, 26, 28, 0.12)',
      },
    },
  },
  plugins: [],
};
