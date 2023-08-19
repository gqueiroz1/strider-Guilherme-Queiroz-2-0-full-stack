/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': 'rgb(100, 47, 153)',
        'purple-light': 'rgba(100, 47, 153, .5)'
      },
      spacings: {},
    }
  },
  safelist: [
    {
      pattern: /text-(red|purple|white|gray)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /bg-(red|purple|white)-(100|200|300|400|500|600|700|800|900)/,
    }
  ],
  plugins: [],
}

