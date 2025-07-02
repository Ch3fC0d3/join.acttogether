/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'act-teal': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: 'rgb(21, 86, 104)', // Main brand color
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'coral': {
          200: '#fecaca',
          300: '#fca5a5',
        }
      }
    },
  },
  plugins: [],
};