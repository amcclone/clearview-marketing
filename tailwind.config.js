/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        copper: {
          400: '#e89968',
          500: '#d97706',
          600: '#b87333',
          700: '#9a5d28',
        },
        brand: {
          50:  '#fff7ed',
          100: '#ffedd5',
          500: '#d97706',
          600: '#b87333',
          700: '#9a5d28',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
