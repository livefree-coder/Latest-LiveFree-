/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-red': {
          DEFAULT: '#E60023',
          hover: '#CC001E',
        },
        'secondary-navy': '#1E2A38',
        'bg-light-gray': '#F8F8F8',
        'bg-dark-navy': '#0C0F16',
        'text-heading': '#111111',
        'text-body': '#444444',
        'text-muted': '#777777',
      },
      fontFamily: {
        // 'sans' is the default font family. We're setting it to Open Sans.
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        // This is the new font for your main headers.
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
        // This is a new font family for your sub-headers.
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};