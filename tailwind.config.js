module.exports = {
  purge: ['./components/**/*.vue', './pages/**/*.vue'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    backdropFilter: {
      blur: 'blur(1rem)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-filters')],
}
