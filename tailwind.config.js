/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'my-mint': '#02FECB',
        'my-gray-1': '#D9D9D9',
        'my-gray-2': '#767676',
        'my-gray-3': '#434343',
        'my-gray-4': '#1E1E1E'
      }
    },
    fontFamily: {
      'rubik': ['Rubik Mono One', 'sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}