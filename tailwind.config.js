module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
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
