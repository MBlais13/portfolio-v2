/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  darkmode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}